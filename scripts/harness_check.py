#!/usr/bin/env python3
"""Validate AGENTS/CLAUDE Harness v2 invariants."""

from __future__ import annotations

import argparse
import subprocess
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]

REQUIRED_FILES = [
    "AGENTS.md",
    "CLAUDE.md",
    "darky-dance/smm/AGENTS.md",
    "darky-dance/smm/CLAUDE.md",
    "fitness-online/AGENTS.md",
    "fitness-online/CLAUDE.md",
    "fitness-online/landing/AGENTS.md",
    "fitness-online/landing/CLAUDE.md",
    "fitness-online/landing/docs/agent-checklist.md",
    "agent-harness/README.md",
    "agent-harness/checklist.md",
    "agent-harness/changelog.md",
    "scripts/harness_check.py",
    "scripts/harness_sync_agents.py",
    ".githooks/pre-commit",
    "Makefile",
]

ROOT_MARKERS = [
    "AGENTS Harness v2",
    "Non-mutating vs Mutating",
    "Task ID",
    "Канон и производные",
    "python3 scripts/harness_check.py --mode strict",
]

ROOT_CLAUDE_MARKERS = [
    "CLAUDE Harness v2",
    "Non-mutating vs Mutating",
    "Task ID",
    "Канон и локальные CLAUDE",
    "python3 scripts/harness_check.py --mode strict",
]

SMM_MARKERS = [
    "AGENTS Harness v2",
    "локальный override",
    "Non-mutating vs Mutating",
    "Task ID",
]

LOCAL_CLAUDE_MARKERS = [
    "CLAUDE Harness v2",
    "локальный override",
    "Research → Plan → STOP → GO",
    "Task ID",
]

FITNESS_ONLINE_MARKERS = [
    "AGENTS Harness v2",
    "локальный override",
    "Research → Plan → STOP → GO",
    "Task ID",
]

FITNESS_LANDING_MARKERS = [
    "AGENTS Harness v2",
    "локальный override",
    "Research → Plan → STOP → GO",
    "Task ID",
]

RESEARCH_MARKERS = [
    "Task ID",
    "Контекст задачи",
    "Ограничения",
    "Риски",
    "Вопросы/Assumptions",
]

PLAN_MARKERS = [
    "Task ID",
    "Цель",
    "Acceptance criteria",
    "Пошаговый план",
    "Файлы",
    "TODO",
    "Не делаем",
    "Итог проверки",
]

LOG_MARKERS = [
    "Task ID",
    "Что сделано",
    "Что проверить",
]


class CheckResult:
    def __init__(self) -> None:
        self.errors: list[str] = []
        self.warnings: list[str] = []

    def add_error(self, msg: str) -> None:
        self.errors.append(msg)

    def add_warning(self, msg: str) -> None:
        self.warnings.append(msg)

    def ok(self) -> bool:
        return not self.errors


def read_text(rel_path: str) -> str:
    return (ROOT / rel_path).read_text(encoding="utf-8")


def validate_required_files(result: CheckResult) -> None:
    for rel_path in REQUIRED_FILES:
        if not (ROOT / rel_path).exists():
            result.add_error(f"Missing required file: {rel_path}")


def validate_markers(result: CheckResult, rel_path: str, markers: list[str]) -> None:
    path = ROOT / rel_path
    if not path.exists():
        return

    text = path.read_text(encoding="utf-8")
    missing = [m for m in markers if m not in text]
    if missing:
        result.add_error(
            f"Missing markers in {rel_path}: {', '.join(missing)}"
        )


def build_expected_derived(source_text: str) -> str:
    return (
        "# AUTO-GENERATED FILE\n"
        "# Source: AGENTS.md\n"
        "# DO NOT EDIT MANUALLY.\n"
        "# Regenerate with: python3 scripts/harness_sync_agents.py --write\n\n"
        f"{source_text.rstrip()}\n"
    )


def validate_derived_sync(result: CheckResult) -> None:
    source_path = ROOT / "AGENTS.md"
    worktrees_dir = ROOT / ".claude" / "worktrees"

    if not source_path.exists():
        result.add_error("Cannot validate derived AGENTS: missing AGENTS.md")
        return

    if not worktrees_dir.exists():
        result.add_warning("Worktrees directory not found: .claude/worktrees")
        return

    expected = build_expected_derived(source_path.read_text(encoding="utf-8"))
    targets = sorted(worktrees_dir.glob("*/AGENTS.md"))
    if not targets:
        result.add_warning("No derived AGENTS.md targets found under .claude/worktrees")
        return

    for target in targets:
        current = target.read_text(encoding="utf-8") if target.exists() else ""
        rel = target.relative_to(ROOT)
        if current != expected:
            result.add_error(
                f"Derived AGENTS is out of sync: {rel}. Run python3 scripts/harness_sync_agents.py --write"
            )


def git_staged_files() -> list[str]:
    try:
        proc = subprocess.run(
            ["git", "diff", "--cached", "--name-only"],
            cwd=ROOT,
            check=True,
            capture_output=True,
            text=True,
        )
    except subprocess.CalledProcessError:
        return []

    return [line.strip() for line in proc.stdout.splitlines() if line.strip()]


def validate_file_contract(result: CheckResult, rel_path: str, markers: list[str]) -> None:
    path = ROOT / rel_path
    if not path.exists() or not path.is_file():
        return

    text = path.read_text(encoding="utf-8")
    missing = [m for m in markers if m not in text]
    if missing:
        result.add_error(
            f"Contract check failed for {rel_path}: missing {', '.join(missing)}"
        )


def validate_staged_contracts(result: CheckResult) -> None:
    staged = git_staged_files()
    if not staged:
        result.add_warning(
            "Strict mode: no staged files, staged-contract checks skipped."
        )
        return

    for rel_path in staged:
        if rel_path.endswith("research.md"):
            validate_file_contract(result, rel_path, RESEARCH_MARKERS)
        elif rel_path.endswith("plan.md"):
            validate_file_contract(result, rel_path, PLAN_MARKERS)
        elif rel_path.endswith("log.md"):
            validate_file_contract(result, rel_path, LOG_MARKERS)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "--mode",
        choices=["fast", "strict"],
        default="fast",
        help="Validation mode",
    )
    args = parser.parse_args()

    result = CheckResult()

    validate_required_files(result)
    validate_markers(result, "AGENTS.md", ROOT_MARKERS)
    validate_markers(result, "CLAUDE.md", ROOT_CLAUDE_MARKERS)
    validate_markers(result, "darky-dance/smm/AGENTS.md", SMM_MARKERS)
    validate_markers(result, "darky-dance/smm/CLAUDE.md", LOCAL_CLAUDE_MARKERS)
    validate_markers(result, "fitness-online/AGENTS.md", FITNESS_ONLINE_MARKERS)
    validate_markers(result, "fitness-online/CLAUDE.md", LOCAL_CLAUDE_MARKERS)
    validate_markers(result, "fitness-online/landing/AGENTS.md", FITNESS_LANDING_MARKERS)
    validate_markers(result, "fitness-online/landing/CLAUDE.md", LOCAL_CLAUDE_MARKERS)
    validate_derived_sync(result)

    if args.mode == "strict":
        validate_staged_contracts(result)

    for warning in result.warnings:
        print(f"[WARN] {warning}")

    for error in result.errors:
        print(f"[ERROR] {error}")

    if result.ok():
        print(f"[OK] harness_check passed ({args.mode})")
        return 0

    print(f"[FAIL] harness_check failed ({args.mode})")
    return 1


if __name__ == "__main__":
    sys.exit(main())
