#!/usr/bin/env python3
"""Показывает расход вызовов Composio за текущий календарный месяц.

Вход:
- COMPOSIO_API_KEY (project key вида ak_...)

Выход:
- used_calls
- remaining_calls (из 20000)
- used_premium_calls и remaining_premium_calls (если premium можно
  надёжно отличить по логам)
"""

from __future__ import annotations

import argparse
import json
import os
import sys
from datetime import datetime
from typing import Any
from urllib import error, request

API_URL = "https://backend.composio.dev/api/v3/internal/action_execution/logs"
MONTHLY_LIMIT = 20000


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Composio usage за текущий календарный месяц"
    )
    parser.add_argument(
        "--api-key",
        default=os.getenv("COMPOSIO_API_KEY", "").strip(),
        help="Composio project key (или через COMPOSIO_API_KEY)",
    )
    parser.add_argument(
        "--page-size",
        type=int,
        default=500,
        help="Размер страницы для пагинации (по умолчанию: 500)",
    )
    parser.add_argument(
        "--timeout",
        type=int,
        default=30,
        help="Таймаут HTTP запроса в секундах (по умолчанию: 30)",
    )
    return parser.parse_args()


def month_bounds_ms() -> tuple[int, int, datetime, datetime]:
    now = datetime.now().astimezone()
    start = now.replace(day=1, hour=0, minute=0, second=0, microsecond=0)
    return int(start.timestamp() * 1000), int(now.timestamp() * 1000), start, now


def post_logs(
    api_key: str,
    from_ms: int,
    to_ms: int,
    cursor: int | None,
    page_size: int,
    timeout: int,
) -> dict[str, Any]:
    payload: dict[str, Any] = {
        "from": from_ms,
        "to": to_ms,
        "limit": page_size,
        "cursor": cursor if cursor is not None else 0,
    }

    body = json.dumps(payload).encode("utf-8")
    req = request.Request(
        API_URL,
        data=body,
        method="POST",
        headers={
            "Content-Type": "application/json",
            "Accept": "application/json",
            "User-Agent": (
                "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/124.0.0.0 Safari/537.36"
            ),
            "x-api-key": api_key,
        },
    )

    try:
        with request.urlopen(req, timeout=timeout) as resp:
            raw = resp.read().decode("utf-8")
    except error.HTTPError as http_err:
        err_body = http_err.read().decode("utf-8", errors="replace")
        raise RuntimeError(
            f"HTTP {http_err.code} при запросе логов Composio: {err_body}"
        ) from http_err
    except error.URLError as url_err:
        raise RuntimeError(f"Сетевая ошибка при запросе Composio: {url_err}") from url_err

    try:
        parsed = json.loads(raw)
    except json.JSONDecodeError as decode_err:
        raise RuntimeError(f"Некорректный JSON в ответе Composio: {decode_err}") from decode_err

    if not isinstance(parsed, dict):
        raise RuntimeError("Неожиданный формат ответа Composio: ожидался объект JSON")
    return parsed


def pick_container(payload: dict[str, Any]) -> dict[str, Any]:
    data = payload.get("data")
    if isinstance(data, dict):
        return data
    return payload


def extract_logs_and_cursor(payload: dict[str, Any]) -> tuple[list[dict[str, Any]], int | None]:
    container = pick_container(payload)
    logs_raw: Any = None

    # В некоторых ответах Composio data — это сам список логов.
    if isinstance(payload.get("data"), list):
        logs_raw = payload.get("data")

    for key in (
        "logs",
        "items",
        "results",
        "actionExecutionLogs",
        "action_execution_logs",
        "executions",
    ):
        if key in container:
            logs_raw = container.get(key)
            break

    if logs_raw is None and isinstance(payload.get("logs"), list):
        logs_raw = payload["logs"]

    if not isinstance(logs_raw, list):
        raise RuntimeError(
            "Не удалось найти список логов в ответе Composio (ожидался ключ logs/items/results)"
        )

    logs: list[dict[str, Any]] = []
    for item in logs_raw:
        if isinstance(item, dict):
            logs.append(item)
        else:
            logs.append({"_raw": item})

    next_cursor: int | None = None
    for key in ("nextCursor", "next_cursor", "nextPageCursor", "next_page_cursor"):
        candidate = container.get(key)
        if candidate is None:
            candidate = payload.get(key)

        if isinstance(candidate, str) and candidate.strip():
            try:
                next_cursor = int(candidate.strip())
            except ValueError:
                next_cursor = None
            break
        if isinstance(candidate, (int, float)):
            next_cursor = str(int(candidate))
            # API ожидает number, не string.
            next_cursor = int(candidate)
            break
        if candidate is None:
            continue

    return logs, next_cursor


def read_nested(obj: dict[str, Any], path: tuple[str, ...]) -> Any:
    current: Any = obj
    for part in path:
        if not isinstance(current, dict):
            return None
        current = current.get(part)
    return current


def infer_premium(log: dict[str, Any]) -> bool | None:
    for key in ("isPremium", "is_premium", "premium"):
        val = log.get(key)
        if isinstance(val, bool):
            return val

    string_candidates = [
        log.get("callType"),
        log.get("call_type"),
        log.get("pricingTier"),
        log.get("pricing_tier"),
        log.get("pricingCategory"),
        log.get("pricing_category"),
        read_nested(log, ("pricing", "type")),
        read_nested(log, ("metadata", "callType")),
        read_nested(log, ("metadata", "call_type")),
        read_nested(log, ("usage", "tier")),
    ]

    for val in string_candidates:
        if not isinstance(val, str):
            continue
        norm = val.strip().lower()
        if not norm:
            continue
        if "premium" in norm:
            return True
        if norm in {"standard", "basic", "free", "default", "normal"}:
            return False

    return None


def collect_month_usage(api_key: str, page_size: int, timeout: int) -> dict[str, Any]:
    from_ms, to_ms, start_dt, now_dt = month_bounds_ms()
    used_calls = 0
    used_premium_calls = 0
    premium_states: list[bool | None] = []

    cursor: int | None = None
    seen_cursors: set[int] = set()
    page_num = 0

    while True:
        page_num += 1
        payload = post_logs(api_key, from_ms, to_ms, cursor, page_size, timeout)
        logs, next_cursor = extract_logs_and_cursor(payload)

        used_calls += len(logs)
        for log in logs:
            premium_flag = infer_premium(log)
            premium_states.append(premium_flag)
            if premium_flag is True:
                used_premium_calls += 1

        if not next_cursor:
            break
        if next_cursor == cursor:
            break
        if next_cursor in seen_cursors:
            break
        seen_cursors.add(next_cursor)
        cursor = next_cursor

    has_unknown_premium = any(flag is None for flag in premium_states)
    has_any_premium_signal = any(flag is not None for flag in premium_states)
    premium_exact = has_any_premium_signal and not has_unknown_premium

    result: dict[str, Any] = {
        "period_start_iso": start_dt.isoformat(),
        "period_end_iso": now_dt.isoformat(),
        "from_ms": from_ms,
        "to_ms": to_ms,
        "used_calls": used_calls,
        "remaining_calls": max(MONTHLY_LIMIT - used_calls, 0),
        "monthly_limit": MONTHLY_LIMIT,
        "premium_exact": premium_exact,
    }

    if premium_exact:
        result["used_premium_calls"] = used_premium_calls
        result["remaining_premium_calls"] = max(MONTHLY_LIMIT - used_premium_calls, 0)

    return result


def print_report(report: dict[str, Any]) -> None:
    print(f"period_start: {report['period_start_iso']}")
    print(f"period_end: {report['period_end_iso']}")
    print(f"used_calls: {report['used_calls']}")
    print(f"remaining_calls: {report['remaining_calls']} (of {report['monthly_limit']})")

    if report.get("premium_exact"):
        print(f"used_premium_calls: {report['used_premium_calls']}")
        print(
            f"remaining_premium_calls: {report['remaining_premium_calls']} "
            f"(of {report['monthly_limit']})"
        )
    else:
        print(
            "used_premium_calls: unavailable "
            "(в логах нет надёжного признака premium для всех записей)"
        )


def main() -> int:
    args = parse_args()
    api_key = args.api_key.strip()
    if not api_key:
        print(
            "Ошибка: передайте ключ через --api-key или переменную COMPOSIO_API_KEY",
            file=sys.stderr,
        )
        return 2

    try:
        report = collect_month_usage(api_key, args.page_size, args.timeout)
    except RuntimeError as run_err:
        print(f"Ошибка: {run_err}", file=sys.stderr)
        return 1

    print_report(report)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
