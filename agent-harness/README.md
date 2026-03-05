# AGENTS Harness v2

## Зачем
`AGENTS Harness v2` — это процессный слой для стабильной работы с агентами в `ai-brain`.

Цель: сократить ошибки процесса за счёт комбинации:
- явных правил в `AGENTS.md`,
- machine-checkable проверок,
- синхронизации производных AGENTS,
- регулярного мини-аудита.

## Архитектура (средний уровень)
1. `docs`:
- `agent-harness/README.md`
- `agent-harness/checklist.md`
- `agent-harness/changelog.md`

2. `scripts`:
- `scripts/harness_check.py` — валидация process-инвариантов.
- `scripts/harness_sync_agents.py` — синхронизация производных `.claude/worktrees/*/AGENTS.md`.

3. `optional hook`:
- `.githooks/pre-commit` — opt-in запуск строгой проверки и проверки синхронизации.

## Канон/производные
- Канон:
  - `AGENTS.md`
  - проектные `AGENTS.md` (например, `darky-dance/smm/AGENTS.md`)
- Производные:
  - `.claude/worktrees/*/AGENTS.md`

Производные AGENTS не редактируются вручную.

## Карта локальных AGENTS
- `AGENTS.md` — глобальный стандарт для всего `ai-brain`.
- `darky-dance/smm/AGENTS.md` — локальный override для SMM-задач D'Arky.
- `fitness-online/AGENTS.md` — локальный override для продуктовых/контентных задач фитнес-запуска.
- `fitness-online/landing/AGENTS.md` — локальный override для кодового контура лендинга внутри `fitness-online`.

`fitness-online/landing` проверяется по локальному process-checklist:
- `fitness-online/landing/docs/agent-checklist.md`

Лендинг работает в едином git-контуре `ai-brain` (без отдельного nested repo).

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
