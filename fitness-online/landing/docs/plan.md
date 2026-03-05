# Plan — редизайн лендинга по новым референсам

> Legacy note: в исторических секциях могут встречаться ссылки на `fitness-online-landing/*` (путь до миграции в `fitness-online/landing/*`).

## 2026-03-03 · Задача
Подготовить и реализовать редизайн лендинга в стиле новых референсов с сохранением рабочей воронки и бизнес-ограничений.

## Цель
Сделать визуально целостный редизайн страницы предзаписи (`/`) в направлении `ice-blue / soft glass`, сохранив конверсионную иерархию, тексты и функциональность формы/аналитики.

## Критерии готовности (Acceptance Criteria)
- Первый экран `/` визуально соответствует выбранному референс-направлению (цвет, стекло, композиция, карточки доверия, портрет).
- Конверсионная иерархия на hero сохранена:
  - бейдж;
  - заголовок;
  - подзаголовок;
  - главный CTA.
- Все обязательные тексты на `/` соответствуют `fitness-online/landing-texts.md` (или явно согласованным правкам).
- Сохранена рабочая логика:
  - форма отправляется;
  - редирект на `/prechat-instruction`;
  - sticky CTA корректно работает на мобильном;
  - события аналитики не теряются.
- Нет визуальных регрессий на `320px`, `768px`, `1024px+`.
- `/pay` не сломан стилевыми правками.

## Пошаговый план изменений
1. Уточнить scope (только hero `/` или весь `/`; затрагиваем ли `/pay` визуально).
2. Зафиксировать визуальное ядро:
   - палитра;
   - типографика;
   - параметры glass-эффектов;
   - формат trust-модулей справа.
3. Сделать дизайн-слой страницы `/`:
   - при необходимости добавить page-class в `site/index.html`;
   - подготовить скоуп-стили в `styles.css`, чтобы не трогать `/pay`.
4. Обновить верстку `/` под новую композицию (без потери JS-привязок).
5. Проверить и при необходимости адаптировать `home.js` только в местах, где изменились обязательные селекторы.
6. Пройти функциональный и визуальный QA:
   - чек формы/FAQ/sticky CTA/случаев аналитики;
   - проверка контрастов и читаемости.
7. Зафиксировать изменения в `fitness-online-landing/log.md` и при необходимости дополнить `docs/testing-checklist.md`.

## Файлы, которые планируется менять/создавать
- `fitness-online-landing/site/index.html`
- `fitness-online-landing/site/assets/css/styles.css`
- `fitness-online-landing/site/assets/js/pages/home.js` (только если потребуется)
- `fitness-online-landing/docs/testing-checklist.md` (опционально, после редизайна)
- `fitness-online-landing/log.md` (после выполнения)

Уже создано на этапе подготовки:
- `fitness-online-landing/docs/research.md`
- `fitness-online-landing/docs/plan.md`

## TODO-чеклист
- [x] Подтвердить scope и приоритет референса (hero-only vs full page).
- [x] Подтвердить решение по вторичному CTA в hero.
- [x] Подготовить финальную дизайн-схему (tokens + layout rules) для `/`.
- [x] Обновить HTML hero/секции в `site/index.html`.
- [x] Внедрить scoped CSS-редизайн в `styles.css`.
- [x] Проверить/починить JS-привязки `home.js` при необходимости.
- [x] Пройти QA на desktop/mobile и проверить ключевые события.
- [x] Обновить `fitness-online-landing/log.md`.

## Что НЕ делаем (границы scope)
- Не меняем backend (`workers/src/index.js`) и API-контракты.
- Не меняем pricing/таймер и бизнес-логику страницы `/pay` (если отдельно не согласуем).
- Не переписываем тексты оффера и воронки без отдельного согласования.
- Не трогаем интеграции YooKassa/Google Sheets/Telegram в этой задаче.
- Не добавляем новые маркетинговые гипотезы вне редизайна.

## Статус
Выполнено после команды `GO` (2026-03-03).

## 2026-03-03 · Итерация V2 (усиление glass и ритм)
- [x] Добавлены секционные модификаторы в `site/index.html`: `section--hero`, `section--glass-strong`, `section--glass-soft`, `section--plain`, `section--expert`.
- [x] Пересобран scoped-стиль `.page-home` в `site/assets/css/styles.css`:
  - усилены объем, яркость, градиентные волны и стеклянные сферы;
  - введены токены ритма (`--space-section-y`, `--space-panel-pad`, `--space-card-pad`, `--space-stack`);
  - введена depth-иерархия поверхностей (`soft/strong`) для секций и карточек.
- [x] Исправлена структура ритма:
  - уменьшены внешние межсекционные отступы;
  - увеличены внутренние отступы карточек/списков;
  - стабилизирована последовательность `h2 -> list -> disclaimer -> CTA`.
- [x] Исправлены риски налезания в expert-блоке:
  - на `768+` задана строгая 2-колоночная сетка `minmax(280px, 42%) / minmax(0, 1fr)`;
  - для текстовой колонки добавлены ограничения `min-width: 0` и `max-width` у абзацев.
- [x] Проверены JS-привязки: все критичные `id` и классы сохранены.
- [x] `/pay` не изменялся.

Примечание по QA:
- Полноценный браузерный прогон (320/768/1024/1440) в этой итерации недоступен локально из-за отсутствия `node/npx` для Playwright CLI; выполнен static/smoke-check по разметке, селекторам и оффер-ограничениям.

## 2026-03-05 | AGENTS Harness v2 rollout (локальный слой для fitness-online-landing)

### Task ID
- HARNESS-2026-03-05-02

### Цель
Добавить локальный процессный слой (`AGENTS.md` + `docs/agent-checklist.md`) для безопасной работы с кодовыми задачами в nested repo `fitness-online-landing`.

### Acceptance criteria
- Добавлен `fitness-online-landing/AGENTS.md` с локальными инвариантами.
- Добавлен `fitness-online-landing/docs/agent-checklist.md` с pre-flight и post-check шагами.
- Локальный AGENTS отражает `Research → Plan → STOP → GO` и `Task ID` контракт.
- Изменения не затрагивают `site/*` и `workers/*`.

### Пошаговый план
1. Сформировать структуру локального AGENTS по контексту лендинга.
2. Добавить технические guardrails (селекторы, UTM/lead/payment flow, pricing logic, backend contracts).
3. Добавить process-checklist в `docs/agent-checklist.md`.
4. Зафиксировать внедрение в `log.md`.

### Файлы
- `fitness-online-landing/AGENTS.md` (новый)
- `fitness-online-landing/docs/agent-checklist.md` (новый)
- `fitness-online-landing/log.md` (дополнение)

### TODO
- [x] Добавить `fitness-online-landing/AGENTS.md`
- [x] Добавить `fitness-online-landing/docs/agent-checklist.md`
- [x] Обновить `fitness-online-landing/log.md`

### Не делаем
- Не меняем код страниц и worker.
- Не добавляем локальные scripts/hooks/Makefile.

### Итог проверки
- Добавлен локальный `AGENTS.md` для nested repo.
- Добавлен `docs/agent-checklist.md` с pre-flight/post-check шагами.
- Изменения не затронули `site/*` и `workers/*`.

### Как проверить результат
1. Проверить наличие файлов:
   - `fitness-online-landing/AGENTS.md`
   - `fitness-online-landing/docs/agent-checklist.md`
2. Проверить, что checklist покрывает форму, UTM/lead flow, sticky CTA, pricing/timer и интеграционные инварианты.

## 2026-03-05 | Rollout migration в `fitness-online/landing`

### Task ID
- HARNESS-2026-03-05-03

### Цель
Завершить миграцию лендинга в единый git-контур `ai-brain` и синхронизировать process/harness контракты с новым путём.

### Acceptance criteria
- Контур лендинга живёт в `fitness-online/landing/*`.
- Локальные AGENTS/checklist и README обновлены на новый путь.
- Root harness валидирует `fitness-online/landing/AGENTS.md` как обязательный override.
- Legacy `fitness-online-landing` удалён из рабочей директории.

### Пошаговый план
1. Перенести файлы лендинга в `fitness-online/landing` без `.git` и transient-артефактов.
2. Обновить process-файлы (`AGENTS`, `README`, `checklist`, `harness_check.py`, `.gitignore`).
3. Добавить записи трассировки в `log.md`/`changelog.md`.
4. Прогнать проверки `sync/fast/strict`.

### Файлы
- `fitness-online/landing/AGENTS.md`
- `fitness-online/landing/docs/agent-checklist.md`
- `fitness-online/landing/README.md`
- `fitness-online/landing/docs/research.md`
- `fitness-online/landing/docs/plan.md`
- `fitness-online/landing/log.md`
- `AGENTS.md`
- `agent-harness/README.md`
- `agent-harness/changelog.md`
- `scripts/harness_check.py`
- `.gitignore`

### TODO
- [x] Перенести лендинг в `fitness-online/landing`
- [x] Удалить legacy-папку `fitness-online-landing`
- [x] Обновить AGENTS/checklist/README под новый путь
- [x] Обновить root harness-контракты
- [x] Прогнать и зафиксировать итог проверок

### Не делаем
- Не пересобираем деплой.
- Не правим бизнес-контент лендинга.

### Итог проверки
- `python3 scripts/harness_sync_agents.py --check` — OK (после синхронизации `--write`).
- `python3 scripts/harness_check.py --mode fast` — OK.
- `python3 scripts/harness_check.py --mode strict` — OK (warning: staged-contract checks skipped, т.к. нет staged-файлов).
