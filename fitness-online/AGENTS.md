# AGENTS.md — fitness-online

## Контекст
`fitness-online` — проект запуска онлайн-продукта Ирины Денисовой.

Роли:
- Эксперт: Ирина Денисова.
- Продюсер/маркетинг: Виталий Семьянов.

## AGENTS Harness v2 (локальный override)

> Этот файл — локальный override для папки `fitness-online/` и имеет приоритет над корневым `AGENTS.md` внутри проекта.

### Источники истины (читать перед задачей)
1. `fitness-online/brief.md`
2. `fitness-online/decisions.md`
3. `fitness-online/log.md`
4. Профильные файлы по задаче:
- оффер/воронка: `offer.md`, `funnel.md`, `marketing-strategy.md`
- лендинг: `landing-structure.md`, `landing-texts.md`
- экономика: `financial-model.md`, `metrics.md`, `timeline.md`

### Базовый процесс
Всегда: **Research → Plan → STOP → GO**

### Приоритет локальных AGENTS внутри проекта
- Для задач в `fitness-online/landing/` приоритет у `fitness-online/landing/AGENTS.md`.
- Для остальных задач в `fitness-online/` действует этот файл.

### Non-mutating vs Mutating (до GO)
До `GO` разрешены только non-mutating действия:
- чтение файлов проекта,
- анализ и подготовка research/plan,
- проверки без изменения tracked-файлов.

До `GO` запрещены mutating действия:
- редактирование бизнес-файлов,
- создание новых рабочих артефактов вне research/plan,
- любые правки tracked-файлов, не согласованные командой `GO`.

### Контракт Task ID
Для каждой новой задачи обязателен `Task ID` (например `HARNESS-YYYY-MM-DD-XX`).

#### Минимум в `fitness-online/research.md`
- `Task ID`
- `Контекст задачи`
- `Ограничения`
- `Риски`
- `Вопросы/Assumptions`
- `Источники (если были внешние)`

#### Минимум в `fitness-online/plan.md`
- `Task ID`
- `Цель`
- `Acceptance criteria`
- `Пошаговый план`
- `Файлы`
- `TODO`
- `Не делаем`
- `Итог проверки`

#### Минимум в `fitness-online/log.md`
- `Task ID`
- `Что сделано`
- `Что проверить`
- `[РЕШЕНИЕ ТРЕБУЕТСЯ]` при необходимости

`Task ID` в `research.md`, `plan.md` и `log.md` должен совпадать для одной задачи.

### Локальные инварианты качества
- Не обещать медицинские результаты, которые не подтверждены в проектных файлах.
- Не противоречить ценам, датам и продуктовым решениям из `decisions.md`.
- Не менять согласованные product constraints без явного решения пользователя.
- Не добавлять новые гипотезы как «факты» без маркировки `[ГИПОТЕЗА]`.

### Границы изменений
- `brief.md` и `decisions.md` не менять без явной команды пользователя.
- Не удалять исторические записи из `log.md`.
- В рабочих файлах не создавать дубликаты «v2/v3», если не запрошено явно.

### Проверка перед завершением
- `python3 scripts/harness_check.py --mode fast`
- `python3 scripts/harness_check.py --mode strict`
