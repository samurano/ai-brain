# AGENTS/CLAUDE Harness v2

## Зачем
`AGENTS/CLAUDE Harness v2` — процессный слой для стабильной работы с агентами в `ai-brain`.

Цель: сократить ошибки процесса за счёт комбинации:
- явных правил в `AGENTS.md` и `CLAUDE.md`,
- machine-checkable проверок,
- синхронизации производных AGENTS,
- регулярного мини-аудита.

## Архитектура (средний уровень)
1. `docs`:
- `agent-harness/README.md`
- `agent-harness/checklist.md`
- `agent-harness/changelog.md`

2. `scripts`:
- `scripts/harness_check.py` — валидация process-инвариантов AGENTS + CLAUDE.
- `scripts/harness_sync_agents.py` — синхронизация производных `.claude/worktrees/*/AGENTS.md`.

3. `optional hook`:
- `.githooks/pre-commit` — opt-in запуск строгой проверки и проверки синхронизации.

## Канон/производные
- Канон AGENTS:
  - `AGENTS.md`
  - проектные `AGENTS.md`
- Канон CLAUDE:
  - `CLAUDE.md`
  - проектные `CLAUDE.md`
- Производные:
  - `.claude/worktrees/*/AGENTS.md`

Политика sync на этом этапе только для AGENTS (AGENTS-only).
`CLAUDE.md` проверяются как канонический набор, без derived-sync.

## Карта локальных AGENTS и CLAUDE
- Root:
  - `AGENTS.md`
  - `CLAUDE.md`

- `darky-dance/smm`:
  - `darky-dance/smm/AGENTS.md`
  - `darky-dance/smm/CLAUDE.md`

- `fitness-online`:
  - `fitness-online/AGENTS.md`
  - `fitness-online/CLAUDE.md`

- `fitness-online/landing`:
  - `fitness-online/landing/AGENTS.md`
  - `fitness-online/landing/CLAUDE.md`
  - `fitness-online/landing/docs/agent-checklist.md`

Лендинг работает в едином git-контуре `ai-brain`.

## Команды
- Быстрая проверка:
```bash
python3 scripts/harness_check.py --mode fast
```
- Строгая проверка:
```bash
python3 scripts/harness_check.py --mode strict
```
- Проверка синхронизации производных AGENTS:
```bash
python3 scripts/harness_sync_agents.py --check
```
- Синхронизация производных AGENTS:
```bash
python3 scripts/harness_sync_agents.py --write
```

Через `Makefile`:
```bash
make harness-check-fast
make harness-check-strict
make harness-check-claude
make harness-check-project-agents
make harness-sync-check
make harness-sync-write
make harness-hook-install
```

## Контракт Task ID (context graph lite)
Для каждой новой задачи фиксируется `Task ID` и связка в:
- `research.md`
- `plan.md`
- `log.md`

Это создаёт лёгкий граф контекста по задаче без отдельной БД.

## Режим эксплуатации
- По умолчанию: ручной запуск проверок.
- Опционально: pre-commit hook.
- Раз в месяц: мини-аудит и запись результата в `agent-harness/changelog.md`.
