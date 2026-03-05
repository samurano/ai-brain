# AGENTS Harness — Changelog

## 2026-03-05 | HARNESS-2026-03-05-01
- Внедрён `AGENTS Harness v2` (средний уровень).
- Обновлены канонические `AGENTS.md`:
  - корневой `AGENTS.md`
  - `darky-dance/smm/AGENTS.md`
- Добавлена политика канон/производные для `.claude/worktrees/*/AGENTS.md`.
- Добавлены скрипты:
  - `scripts/harness_check.py`
  - `scripts/harness_sync_agents.py`
- Добавлен optional pre-commit hook `.githooks/pre-commit`.
- Добавлен `Makefile` с командами harness.

### Итог проверки
- Базовые команды запускаются локально.
- Синхронизация производных AGENTS выполняется через script API.

## 2026-03-05 | HARNESS-2026-03-05-02
- Выполнен rollout AGENTS Harness v2 на `fitness-online` и legacy-контур лендинга (до миграции).
- Добавлен локальный `fitness-online/AGENTS.md`.
- Для legacy-контура (до миграции) добавлены:
  - локальный AGENTS для лендинга
  - process-checklist для лендинга
- Обновлён `scripts/harness_check.py`:
  - `fitness-online/AGENTS.md` проверяется как обязательный проектный override;
  - отсутствие AGENTS в legacy-контуре давало предупреждение (warn-only), не hard-fail.
- Обновлён `Makefile`: добавлена цель `harness-check-project-agents`.

### Итог проверки
- `make harness-sync-check` — OK.
- `make harness-check-fast` — OK.
- `make harness-check-strict` — OK.

## 2026-03-05 | HARNESS-2026-03-05-03
### Task ID
- HARNESS-2026-03-05-03

### Что сделано
- Выполнена миграция структуры: `legacy-landing/*` → `fitness-online/landing/*`.
- Корневой harness переведён на новый контракт:
  - `fitness-online/landing/AGENTS.md` и `fitness-online/landing/docs/agent-checklist.md` обязательны;
  - warn-only логика nested repo удалена из `scripts/harness_check.py`.
- Обновлены process-файлы:
  - `AGENTS.md` (карта проектов и приоритет локального AGENTS для лендинга),
  - `fitness-online/AGENTS.md` (явный приоритет `fitness-online/landing/AGENTS.md`),
  - `agent-harness/README.md` (единый git-контур без nested repo),
  - `.gitignore` (новые transient-игноры для `fitness-online/landing`).

### Итог проверки
- Деплой не затрагивался и вынесен в follow-up задачу.
- Валидации `harness_sync_agents --check`, `harness_check --mode fast|strict` должны выполняться из корня `ai-brain`.

### Что проверить
- `python3 scripts/harness_sync_agents.py --check`
- `python3 scripts/harness_check.py --mode fast`
- `python3 scripts/harness_check.py --mode strict`

## 2026-03-05 | HARNESS-2026-03-05-04
### Task ID
- HARNESS-2026-03-05-04

### Что сделано
- Выполнен parity `CLAUDE.md` c текущим AGENTS-контуром по новой структуре.
- Обновлён корневой `CLAUDE.md` до `CLAUDE Harness v2` с контрактами:
  - `Research → Plan → STOP → GO`
  - `Non-mutating vs Mutating`
  - `Task ID`
  - приоритет локальных override.
- Обновлён `darky-dance/smm/CLAUDE.md` и добавлен локальный v2-блок.
- Добавлены новые локальные файлы:
  - `fitness-online/CLAUDE.md`
  - `fitness-online/landing/CLAUDE.md`
- Расширен `scripts/harness_check.py`:
  - валидация обязательных CLAUDE-файлов,
  - проверка ключевых маркеров root/local CLAUDE,
  - проверка AGENTS/CLAUDE в едином fast/strict pipeline.
- Обновлены `Makefile`, `agent-harness/README.md`, `agent-harness/checklist.md` под AGENTS/CLAUDE parity.

### Политика sync
- Sync остаётся AGENTS-only через `scripts/harness_sync_agents.py`.
- Для `CLAUDE.md` derived-sync в `.claude/worktrees/*` не вводился.

### Итог проверки
- `python3 scripts/harness_check.py --mode fast`
- `python3 scripts/harness_check.py --mode strict`
- `python3 scripts/harness_sync_agents.py --check`
