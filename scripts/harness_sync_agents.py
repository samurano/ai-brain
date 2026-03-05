#!/usr/bin/env python3
"""Sync derived AGENTS.md files in .claude/worktrees from canonical AGENTS.md."""

from __future__ import annotations

import argparse
import sys
from pathlib import Path


def build_derived_content(source_text: str, source_rel: str) -> str:
    header = (
        "# AUTO-GENERATED FILE\n"
        f"# Source: {source_rel}\n"
        "# DO NOT EDIT MANUALLY.\n"
        "# Regenerate with: python3 scripts/harness_sync_agents.py --write\n\n"
    )
    return f"{header}{source_text.rstrip()}\n"


def collect_targets(worktrees_dir: Path) -> list[Path]:
    if not worktrees_dir.exists():
        return []
    return sorted(worktrees_dir.glob("*/AGENTS.md"))


def main() -> int:
    parser = argparse.ArgumentParser()
    mode = parser.add_mutually_exclusive_group()
    mode.add_argument("--check", action="store_true", help="Check for drift only")
    mode.add_argument("--write", action="store_true", help="Write derived files")
    args = parser.parse_args()

    root = Path(__file__).resolve().parents[1]
    source = root / "AGENTS.md"
    worktrees_dir = root / ".claude" / "worktrees"

    if not source.exists():
        print(f"[ERROR] Canonical source file not found: {source}")
        return 1

    source_text = source.read_text(encoding="utf-8")
    expected = build_derived_content(source_text, "AGENTS.md")

    targets = collect_targets(worktrees_dir)
    if not targets:
        print("[OK] No worktree AGENTS targets found.")
        return 0

    drifted: list[Path] = []

    for target in targets:
        current = target.read_text(encoding="utf-8") if target.exists() else ""
        if current == expected:
            print(f"[OK] {target.relative_to(root)}")
            continue

        drifted.append(target)
        if args.write:
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_text(expected, encoding="utf-8")
            print(f"[WRITE] {target.relative_to(root)}")
        else:
            print(f"[DRIFT] {target.relative_to(root)}")

    if drifted and not args.write:
        print(f"[FAIL] Found drift in {len(drifted)} derived AGENTS file(s).")
        return 1

    if drifted and args.write:
        print(f"[OK] Synchronized {len(drifted)} derived AGENTS file(s).")
        return 0

    print("[OK] All derived AGENTS files are synchronized.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
