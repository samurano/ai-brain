# AGENTS.md — fitness-online/landing

## Контекст
`fitness-online/landing` — кодовый контур лендинга запуска внутри проекта `fitness-online`:
- фронтенд: `site/` (статический сайт),
- backend: `workers/` (Cloudflare Worker),
- процессная документация: `docs/`.

## AGENTS Harness v2 (локальный override)

> Этот файл — локальный override для `fitness-online/landing/` и имеет приоритет над `fitness-online/AGENTS.md` в пределах этой папки.

### Источники истины (читать перед задачей)
1. `fitness-online/brief.md`
2. `fitness-online/decisions.md`
3. `fitness-online/landing/README.md`
4. `fitness-online/landing/log.md`
5. `fitness-online/landing/docs/research.md`
6. `fitness-online/landing/docs/plan.md`
7. Профильные чеклисты:
- `fitness-online/landing/docs/testing-checklist.md`
- `fitness-online/landing/docs/integration-checklist.md`

### Базовый процесс
Всегда: **Research → Plan → STOP → GO**

### Non-mutating vs Mutating (до GO)
До `GO` разрешены только non-mutating действия:
- чтение кода и документации,
- анализ архитектуры и подготовка `research/plan`,
- проверки без правок tracked-файлов.

До `GO` запрещены mutating действия:
- изменения `site/*`, `workers/*`, `docs/*` (кроме `research.md` и `plan.md`),
- изменение интеграционных контрактов,
- массовые рефакторы без утверждённого плана.

### Контракт Task ID
Каждая новая задача должна иметь `Task ID` с одинаковым значением в:
- `fitness-online/landing/docs/research.md`
- `fitness-online/landing/docs/plan.md`
- `fitness-online/landing/log.md`

Минимум в записях:
- `Task ID`
- `Что сделано`
- `Что проверить`
- `[РЕШЕНИЕ ТРЕБУЕТСЯ]` при необходимости

### Технические инварианты
- Не ломать ключевые селекторы/ID, от которых зависит JS-логика.
- Не ломать UTM/lead/payment flow.
- Не ломать ценовую логику и таймер по МСК на `/pay`.
- Не менять backend contracts и интеграции без отдельной задачи.

### Границы
- Деплой и CI/CD меняются только отдельной задачей.
- Не изменять `fitness-online/decisions.md` и `fitness-online/brief.md` без явной команды.
- Для финальной проверки использовать `fitness-online/landing/docs/agent-checklist.md`.
