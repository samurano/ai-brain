# D'Arky Dance — Plan

## 2026-03-03 | Пост ТГ: нужны девушки на парный набор (Андрей + Оля)

### Цель
Написать короткий ТГ-пост, который привлечёт новых девушек на парное занятие завтра (4 марта, ср, 21:00).

### Критерии готовности
- Пост в стиле D'Arky (тёплый, без давления, конкретный)
- Длина: 15–20 строк (короткий, срочный формат)
- Один CTA: написать @darkystudio
- Снят главный барьер: «пара не нужна — парни уже есть, не хватает именно вас»
- Без фейковой срочности, но с ощущением «приходи завтра»

### Структура поста
1. **Хук + 🖤** — обращение к девушкам, лёгкое, с характером
2. **Суть** — 2–3 строки: парная группа идёт, парни есть, девушек не хватает
3. **Снятие барьеров** — опыт не нужен, пара не нужна (парни ждут)
4. **Инфоблок** — дата, время, место, тренеры
5. **CTA** — @darkystudio

### Варианты хуков (выберу лучший)
1. «Девушки, вы нам нужны 🖤»
2. «Парни есть. Девушек не хватает 🖤»
3. «Девушки, тут парни без пары скучают 🖤»

### TODO
- [ ] Написать пост
- [ ] Сохранить в smm/ (черновик или content-plan)

### Не делаем
- Не переписываем существующие посты
- Не меняем brief/decisions
- Не делаем длинный анонс — это короткий оперативный пост

## 2026-03-04 | Внедрение библиотеки raw-промтов Nano Banana в D'Arky SMM

### Цель
Встроить в `darky-dance/smm` устойчивый процесс работы с image-промтами: хранить проверенные raw-референсы, использовать их как базу для новых задач и генерировать 3 варианта только по явному запросу.

### Критерии готовности (acceptance criteria)
- В `darky-dance/smm` создана рабочая библиотека промтов.
- Карточка `NBP-001` с первым raw-референсом сохранена без потерь.
- В `darky-dance/smm/AGENTS.md` зафиксирован обязательный процесс работы с библиотекой.
- Зафиксировано правило: без явного запроса на визуал промты не генерируются.
- `brief.md` и `decisions.md` не изменялись.

### Пошаговый план (что и где меняем)
1. Добавить секцию исследования в `darky-dance/research.md`.
2. Добавить секцию плана в `darky-dance/plan.md`.
3. Создать `darky-dance/smm/image-prompts-reference.md` с правилами, шаблоном карточки и разделом карточек.
4. Добавить карточку `NBP-001` с raw-промтом для постера расписания.
5. Дополнить `darky-dance/smm/AGENTS.md` правилами использования библиотеки и выдачи 3 вариантов.
6. Обновить `darky-dance/log.md` по факту выполненных изменений.

### Список файлов, которые меняем/создаём
- `darky-dance/research.md` (дополнение)
- `darky-dance/plan.md` (дополнение)
- `darky-dance/smm/image-prompts-reference.md` (новый файл)
- `darky-dance/smm/AGENTS.md` (дополнение)
- `darky-dance/log.md` (дополнение)

### TODO-чеклист
- [x] Добавить секцию в `research.md`
- [x] Добавить секцию в `plan.md`
- [x] Создать `smm/image-prompts-reference.md`
- [x] Добавить карточку `NBP-001` с полным raw-промтом
- [x] Дополнить `smm/AGENTS.md` правилами работы с image-промтами
- [x] Обновить `darky-dance/log.md`

### Не делаем
- Не редактируем `brief.md` и `decisions.md`.
- Не генерируем короткие версии промтов (храним только Raw).
- Не включаем авто-генерацию промтов к каждому посту без явного запроса.
- Не делаем реорганизацию других SMM-файлов вне scope задачи.

### Итог
Библиотека raw-промтов внедрена в SMM-контур `darky-dance`, добавлена первая карточка `NBP-001`, а процесс её использования закреплён в `smm/AGENTS.md`.

### Как проверить результат
1. Открыть `darky-dance/smm/image-prompts-reference.md` и убедиться, что карточка `NBP-001` содержит полный raw-промт.
2. Открыть `darky-dance/smm/AGENTS.md` и проверить секцию про image-промты (источник, 3 варианта, append-only).
3. Убедиться, что в `darky-dance/log.md` есть запись о внедрении библиотеки.
4. Проверить, что `darky-dance/brief.md` и `darky-dance/decisions.md` не менялись.

## 2026-03-04 | Импорт файла «Промты несортированные» в библиотеку SMM

### Цель
Перенести накопленные проверенные raw-промты из `temp/Промты несортированные.md` в `darky-dance/smm/image-prompts-reference.md` как структурированные карточки для дальнейшего переиспользования.

### Критерии готовности (acceptance criteria)
- Все промты из переданного файла импортированы в библиотеку.
- Каждая версия/вариант сохранены отдельной карточкой с уникальным ID.
- Сохранён формат библиотеки: metadata + `RAW Prompt (EN)` + техпараметры/ограничения/комментарий.
- Импорт выполнен append-only, без удаления существующих карточек.

### Пошаговый план (что и где меняем)
1. Прочитать `temp/Промты несортированные.md` и выделить отдельные промты.
2. Добавить карточки в `darky-dance/smm/image-prompts-reference.md` с новыми ID.
3. Зафиксировать импорт в `darky-dance/log.md`.
4. Обновить секции `research.md` и `plan.md` по факту выполнения.

### Список файлов, которые меняем/создаём
- `darky-dance/research.md` (дополнение)
- `darky-dance/plan.md` (дополнение)
- `darky-dance/smm/image-prompts-reference.md` (дополнение)
- `darky-dance/log.md` (дополнение)

### TODO-чеклист
- [x] Разобрать файл `temp/Промты несортированные.md`
- [x] Импортировать промты в `smm/image-prompts-reference.md`
- [x] Зафиксировать изменения в `darky-dance/log.md`

### Не делаем
- Не меняем `brief.md` и `decisions.md`.
- Не сокращаем и не упрощаем raw-промты.
- Не объединяем разные версии в одну карточку.

### Итог
Библиотека промтов пополнена карточками из несортированного файла, включая альтернативные версии для A/B тестов.

### Как проверить результат
1. Открыть `darky-dance/smm/image-prompts-reference.md` и проверить наличие карточек `NBP-002` и далее.
2. Сверить, что текст каждого `RAW Prompt (EN)` соответствует исходнику.
3. Проверить запись об импорте в `darky-dance/log.md`.

## 2026-03-04 | D'Arky Visual DNA v1: фиксация стилевого ядра и креативной вариативности

### Цель
Выделить ДНК визуального стиля из карточек `NBP-001`…`NBP-016` и закрепить её в отдельной спецификации, чтобы новые промты оставались узнаваемыми, но не повторяли один и тот же визуальный шаблон.

### Критерии готовности (acceptance criteria)
- Создан `darky-dance/smm/visual-style-dna.md` со всеми целевыми разделами.
- В документе чётко разделены ветки `Core` и `Experimental`.
- Зафиксированы `Hard Rules`, `Flex Matrix`, `Rotation Protocol`, `Prompt Constructor (EN)`, `Quality Checklist`.
- `image-prompts-reference.md` и `smm/AGENTS.md` дополнены ссылкой/правилом обязательного использования Visual DNA.
- Изменения отражены в `research.md`, `plan.md`, `log.md` append-only.
- `brief.md` и `decisions.md` не изменялись.

### Пошаговый план (что и где меняем)
1. Добавить секцию исследования в `darky-dance/research.md`.
2. Добавить секцию плана в `darky-dance/plan.md`.
3. Создать `darky-dance/smm/visual-style-dna.md` (Core/Experimental, Hard/Flex, Rotation, Constructor, Checklist, примеры).
4. Дополнить верх `darky-dance/smm/image-prompts-reference.md` навигацией на Visual DNA.
5. Дополнить `darky-dance/smm/AGENTS.md` правилами выбора ветки и проверки ротации.
6. Зафиксировать результат в `darky-dance/log.md`.

### Список файлов, которые меняем/создаём
- `darky-dance/research.md` (дополнение)
- `darky-dance/plan.md` (дополнение)
- `darky-dance/smm/visual-style-dna.md` (новый файл)
- `darky-dance/smm/image-prompts-reference.md` (дополнение)
- `darky-dance/smm/AGENTS.md` (дополнение)
- `darky-dance/log.md` (дополнение)

### TODO-чеклист
- [x] Добавить секцию в `research.md`
- [x] Добавить секцию в `plan.md`
- [x] Создать `smm/visual-style-dna.md`
- [x] Дополнить `smm/image-prompts-reference.md` блоком-навигацией
- [x] Дополнить `smm/AGENTS.md` правилами Visual DNA
- [x] Обновить `darky-dance/log.md`

### Не делаем
- Не переписываем существующие `RAW Prompt (EN)` в карточках NBP.
- Не генерируем новые изображения в рамках этой задачи.
- Не меняем `brief.md` и `decisions.md`.

### Итог
Visual DNA v1 зафиксирован отдельным документом и встроен в SMM-процесс генерации промтов через выбор ветки стиля и протокол ротации.

### Как проверить результат
1. Открыть `darky-dance/smm/visual-style-dna.md` и проверить наличие всех 10 разделов из ТЗ.
2. Убедиться, что в документе есть интерфейс `VisualStyleSpec v1` и обязательные поля.
3. Открыть `darky-dance/smm/image-prompts-reference.md` и проверить навигационный блок на Visual DNA.
4. Открыть `darky-dance/smm/AGENTS.md` и проверить правила: выбор `core/experimental` + ротация `rotation_tags`.
5. Проверить запись о внедрении в `darky-dance/log.md`.

## 2026-03-04 | Обновление `darky-dance/smm/CLAUDE.md` (аналог AGENTS для Claude Code)

### Цель
Синхронизировать `darky-dance/smm/CLAUDE.md` с актуальными правилами `smm/AGENTS.md`, чтобы в Claude Code действовал тот же процесс: библиотека промтов + Visual DNA + ротация.

### Критерии готовности (acceptance criteria)
- `darky-dance/smm/CLAUDE.md` содержит все актуальные секции из `smm/AGENTS.md`.
- В `CLAUDE.md` есть блоки по image-промтам и Visual DNA.
- В `CLAUDE.md` явно зафиксированы: выбор `core/experimental`, проверка `rotation_tags`, соблюдение Hard Rules.
- Изменение зафиксировано в `darky-dance/log.md`.
- `brief.md` и `decisions.md` не изменялись.

### Пошаговый план (что и где меняем)
1. Добавить секцию исследования в `darky-dance/research.md`.
2. Добавить секцию плана в `darky-dance/plan.md`.
3. Синхронизировать `darky-dance/smm/CLAUDE.md` по структуре и содержанию с `darky-dance/smm/AGENTS.md`.
4. Проверить, что в `CLAUDE.md` присутствуют Visual DNA-правила.
5. Зафиксировать обновление в `darky-dance/log.md`.

### Список файлов, которые меняем/создаём
- `darky-dance/research.md` (дополнение)
- `darky-dance/plan.md` (дополнение)
- `darky-dance/smm/CLAUDE.md` (обновление)
- `darky-dance/log.md` (дополнение)

### TODO-чеклист
- [x] Добавить секцию в `research.md`
- [x] Добавить секцию в `plan.md`
- [x] Обновить `smm/CLAUDE.md` под текущие правила
- [x] Проверить наличие блока Visual DNA в `smm/CLAUDE.md`
- [x] Обновить `darky-dance/log.md`

### Не делаем
- Не меняем правила в `AGENTS.md` в рамках этой задачи.
- Не меняем `brief.md` и `decisions.md`.
- Не редактируем карточки `RAW Prompt (EN)` в библиотеке.

### Итог
`darky-dance/smm/CLAUDE.md` синхронизирован с текущим процессом и теперь является полноценным аналогом `AGENTS.md` для Claude Code.

### Как проверить результат
1. Открыть `darky-dance/smm/CLAUDE.md`.
2. Проверить наличие разделов: image-промты и Visual DNA.
3. Убедиться, что есть правила `core/experimental`, `rotation_tags`, Hard Rules.
4. Проверить запись об обновлении в `darky-dance/log.md`.

## 2026-03-04 | Гипотезы ЦА для D'Arky Dance (Новосибирск) + фиксация в проекте

### Цель
Подготовить и сохранить в `darky-dance/marketing/target-audience.md` обоснованные гипотезы ЦА (4 сегмента) под первый цикл привлечения с приоритетом минимального CAC, а также зафиксировать работу в логах проекта.

### Критерии готовности (acceptance criteria)
- Создан `darky-dance/marketing/target-audience.md` со всеми 6 разделами из ТЗ.
- Для каждого сегмента заполнены: портрет, триггеры, мотивации, барьеры/снятие, онлайн-поведение, логика решения, уровень достоверности.
- Для ключевых тезисов в документе проставлены метки обоснования: `[ДАННЫЕ ПРОЕКТА]`, `[РЫНОК/ГОРОД]`, `[ПОВЕДЕНЧЕСКИЙ ПАТТЕРН]`, `[ГИПОТЕЗА ДЛЯ ТЕСТА]`.
- Валидация гипотез содержит: тест, подтверждение/опровержение, бюджет, срок, порядок запуска и критерий достаточности данных.
- Обновлены `darky-dance/marketing/log.md` и `darky-dance/log.md`.

### Пошаговый план (что и где меняем)
1. Создать `darky-dance/marketing/target-audience.md` по согласованной структуре и приоритетам первого цикла.
2. Добавить секцию исследования в `darky-dance/research.md` (ограничения, риски, вопросы).
3. Добавить секцию плана в `darky-dance/plan.md`.
4. Зафиксировать результат в `darky-dance/marketing/log.md`.
5. Зафиксировать результат на уровне проекта в `darky-dance/log.md`.

### Список файлов, которые меняем/создаём
- `darky-dance/marketing/target-audience.md` (новый файл)
- `darky-dance/research.md` (дополнение)
- `darky-dance/plan.md` (дополнение)
- `darky-dance/marketing/log.md` (дополнение)
- `darky-dance/log.md` (дополнение)

### TODO-чеклист
- [x] Создать `marketing/target-audience.md` с 6 разделами по ТЗ
- [x] Добавить секцию в `research.md`
- [x] Добавить секцию в `plan.md`
- [x] Обновить `marketing/log.md`
- [x] Обновить `darky-dance/log.md`

### Не делаем
- Не меняем `brief.md` и `decisions.md`.
- Не подменяем гипотезы «точными цифрами» там, где данных нет.
- Не расширяем scope в сторону запуска рекламных кампаний в этом задании.

### Итог
Сформирован единый документ по гипотезам ЦА для первого цикла маркетинга (`minimum CAC`) с приоритетным сегментом, антиаудиторией, CJM-гипотезой и планом валидации на 4–6 недель.

### Как проверить результат
1. Открыть `darky-dance/marketing/target-audience.md` и проверить наличие всех 6 разделов ТЗ.
2. Проверить, что для ключевых тезисов в документе есть метки обоснования.
3. Проверить, что в разделе валидации есть критерии подтверждения/опровержения, бюджет и сроки по каждому сегменту.
4. Проверить наличие новых записей в `darky-dance/marketing/log.md` и `darky-dance/log.md`.

## 2026-03-04 | 2 оффера для новичков: парная бачата и Lady Style

### Цель
Собрать и сохранить два цельных оффера для новичков без танцевального опыта на основе подтверждённых данных проекта:
- `offer-pair-bachata.md`
- `offer-lady-style.md`

### Критерии готовности (acceptance criteria)
- Созданы 2 отдельных файла оффера в `darky-dance/` с одинаковой структурой из ТЗ (10 разделов + блок оценки силы оффера).
- В каждом оффере отражены реальные данные проекта: формат, цены/пакеты, механика входа, CTA-каналы, возражения.
- Все неполные/неподтверждённые места помечены как пробелы; варианты — с явной меткой `ГИПОТЕЗА:`.
- Учтена специфика новичков и различия между парной и Lady Style.
- Обновлён `darky-dance/log.md` записью за текущую дату.

### Пошаговый план
1. Сконсолидировать факты из `brief.md`, `brand-voice.md`, маркетинга, pricing/finances и SMM-правил в опорную матрицу для двух офферов.
2. Создать `darky-dance/offer-pair-bachata.md` по структуре из ТЗ с акцентом на барьеры парного формата.
3. Создать `darky-dance/offer-lady-style.md` по структуре из ТЗ с акцентом на телесную уверенность и безопасный вход.
4. Добавить в каждый оффер: блок силы оффера, точки усиления (факт vs `ГИПОТЕЗА:`), вопросы владельцу.
5. Обновить `darky-dance/log.md`: что сделано, источники, пробелы, гипотезы, вопросы.
6. Завершить задачу: отметить TODO как выполненные и дописать короткий итог + шаги проверки.

### Список файлов, которые меняем/создаём
- `darky-dance/research.md` (дополнение)
- `darky-dance/plan.md` (дополнение)
- `darky-dance/offer-pair-bachata.md` (новый файл)
- `darky-dance/offer-lady-style.md` (новый файл)
- `darky-dance/log.md` (дополнение)

### TODO-чеклист
- [x] Зафиксировать исследование в `research.md`
- [x] Зафиксировать план в `plan.md`
- [x] Подготовить и сохранить `offer-pair-bachata.md`
- [x] Подготовить и сохранить `offer-lady-style.md`
- [x] Обновить `darky-dance/log.md`
- [x] Обновить текущую секцию `plan.md`: проставить [x], добавить итог и проверку

### Assumptions
- Для парной бачаты и Lady Style действует единая тарифная линейка абонементов, если не указано иное.
- Базовый входной оффер для новичка: пробное 800₽ / 400₽ при предоплате / бесплатно при покупке абонемента в день занятия.
- Основные каналы CTA в оффере: `@darkystudio`, `vk.me/darkydance`, телефон школы.

### Не делаем
- Не меняем `brief.md`, `decisions.md` и файлы маркетинга/управления.
- Не придумываем новые цены, сроки, гарантии и ограничения как факты.
- Не расширяем задачу в сторону настройки рекламы, CRM или редизайна лендинга.

### Итог
Подготовлены два полноценных оффера для новичков в отдельных файлах (`offer-pair-bachata.md` и `offer-lady-style.md`) с единым каркасом из ТЗ, опорой на проектные данные, пометками пробелов и блоками `ГИПОТЕЗА:`. Обновлён `darky-dance/log.md` с перечнем использованных источников, найденных пробелов и вопросов владельцу.

### Как проверить результат
1. Открыть `darky-dance/offer-pair-bachata.md` и проверить наличие всех разделов: 1–10 + блок оценки силы оффера.
2. Открыть `darky-dance/offer-lady-style.md` и проверить наличие всех разделов: 1–10 + блок оценки силы оффера.
3. Убедиться, что в обоих файлах неизвестные данные отмечены как пробелы, а варианты отмечены как `ГИПОТЕЗА:`.
4. Открыть `darky-dance/log.md` и проверить новую запись за 2026-03-04 по офферам.

## 2026-03-04 | Лендинг D’Arky — Этап 1 (исследование + интернет-бенчмарк)

### Цель
Закрыть исследовательский этап для лендинга под холодный трафик VK и Яндекс.Директа и зафиксировать рабочие решения для перехода к этапу 2.

### Критерии готовности (acceptance criteria)
- В `marketing/landing-research.md` есть все 9 разделов и они заполнены.
- Нет конфликтов с зафиксированными решениями (оффер/форма/архитектура/расписание).
- Зафиксированы 3–5 проверяемых гипотез с метриками.
- Обновлены `marketing/log.md` и корневой `log.md`.
- Этап 2 (структура) явно не начат.

### Пошаговый план (что и где меняем)
1. Добавить секцию в `darky-dance/research.md` (append-only).
2. Добавить секцию в `darky-dance/plan.md` (append-only).
3. Создать `darky-dance/marketing/landing-research.md` с полным исследованием и интернет-бенчмарком.
4. Обновить `darky-dance/marketing/log.md`.
5. Обновить `darky-dance/log.md`.

### Список файлов, которые меняем/создаём
- `darky-dance/research.md` (дополнение)
- `darky-dance/plan.md` (дополнение)
- `darky-dance/marketing/landing-research.md` (новый файл)
- `darky-dance/marketing/log.md` (дополнение)
- `darky-dance/log.md` (дополнение)

### TODO-чеклист
- [x] Добавить новую секцию в `darky-dance/research.md`
- [x] Добавить новую секцию в `darky-dance/plan.md`
- [x] Сформировать `darky-dance/marketing/landing-research.md`
- [x] Обновить `darky-dance/marketing/log.md`
- [x] Обновить `darky-dance/log.md`

### Не делаем
- Не переходим к этапу 2 (структура лендинга).
- Не пишем тексты для блоков лендинга (этап 3).
- Не делаем прототип в коде и дизайн (этапы 4–5).
- Не меняем `brief.md` и `decisions.md`.

### Итог
Этап 1 завершён: сформирован полный исследовательский документ `marketing/landing-research.md` с локальным и внешним бенчмарком, гипотезами и рекомендацией по архитектуре/форме.

### Как проверить результат
1. Открыть `darky-dance/marketing/landing-research.md` и проверить наличие 9 секций по ТЗ.
2. Проверить, что есть отдельные блоки «лучшие практики» и «антипаттерны».
3. Проверить, что раздел VK vs Direct содержит конкретные различия в подаче.
4. Проверить, что раздел формы фиксирует поля и сценарий «контакт -> перезвон».
5. Проверить записи от 2026-03-04 в `darky-dance/marketing/log.md` и `darky-dance/log.md`.

## 2026-03-04 | Актуализация офферов по ответам владельца

### Цель
Уточнить оба оффера (`offer-pair-bachata.md`, `offer-lady-style.md`) на основе новых фактов от владельца и снять ранее отмеченные пробелы по расписанию, цене, ограничениям и CTA.

### Критерии готовности (acceptance criteria)
- В оба файла офферов добавлена приоритетная актуализация с подтверждёнными данными владельца.
- Уточнены: расписание, количество наборов, единая цена, лимит группы, ориентиры результата, возражения, CTA.
- Обновлены проектные артефакты процесса: `research.md`, `plan.md`, `log.md`.

### Пошаговый план
1. Зафиксировать факты из ответов владельца в `research.md`.
2. Обновить оба оффера отдельным приоритетным блоком актуализации.
3. Обновить `log.md` с перечнем уточнений и влияния на оффер.
4. Закрыть секцию плана: проставить [x], добавить итог и проверку.

### Список файлов, которые меняем
- `darky-dance/research.md`
- `darky-dance/plan.md`
- `darky-dance/offer-pair-bachata.md`
- `darky-dance/offer-lady-style.md`
- `darky-dance/log.md`

### TODO-чеклист
- [x] Добавить секцию актуализации в `research.md`
- [x] Обновить `offer-pair-bachata.md`
- [x] Обновить `offer-lady-style.md`
- [x] Обновить `darky-dance/log.md`
- [x] Добавить итог и шаги проверки в текущей секции `plan.md`

### Не делаем
- Не меняем `brief.md` и `decisions.md`.
- Не придумываем дополнительные акции и не рисуем несуществующие кейсы новичков.
- Не раскрываем публично внутренние операционные ограничения по дисбалансу ролей.

### Итог
Оба оффера актуализированы под фактическую операционную реальность: конкретные слоты наборов, единая цена, размер группы 10–12, реальные возражения и корректный фокус на Telegram/VK.

### Как проверить результат
1. Открыть `offer-pair-bachata.md` и проверить блок «Актуализация 2026-03-04».
2. Открыть `offer-lady-style.md` и проверить блок «Актуализация 2026-03-04».
3. Проверить запись в `log.md` о второй итерации офферов.

## 2026-03-04 | Лендинг D’Arky — Этап 2 (структура, парная бачата, 1 LP)

### Цель
Зафиксировать финальную структуру лендинга для парной бачаты (новички) и подготовить основу для этапа 3 (копирайт).

### Критерии готовности (acceptance criteria)
- `marketing/landing.md` содержит структуру из 10 блоков в едином шаблоне: `ID`, `Название`, `Цель`, `Ключевая мысль`, `Контент`, `CTA`, `Mobile-priority`, `Примечание для этапа 3`.
- В `marketing/landing.md` есть отдельный раздел `UTM Hero Mapping` для `VK` и `Direct`.
- Форма в структуре соответствует контракту полей (`name`, `phone`, `telegram`, `consent_personal_data`, hidden `utm_*`, `landing_variant`, `direction=pair`).
- Прайс-блок ограничен входом `800/400`.
- В `marketing/log.md` и `log.md` добавлены записи о завершении этапа 2.
- Этап 3 не начат.

### Пошаговый план
1. Добавить секцию в `darky-dance/research.md` (append-only).
2. Добавить секцию в `darky-dance/plan.md` (append-only).
3. Полностью обновить `darky-dance/marketing/landing.md` по канонической структуре этапа 2.
4. Добавить запись в `darky-dance/marketing/log.md`.
5. Добавить запись в `darky-dance/log.md`.
6. Закрыть TODO-чеклист и добавить итог + проверку.

### Список файлов, которые меняем
- `darky-dance/research.md` (дополнение)
- `darky-dance/plan.md` (дополнение)
- `darky-dance/marketing/landing.md` (полное обновление)
- `darky-dance/marketing/log.md` (дополнение)
- `darky-dance/log.md` (дополнение)

### TODO-чеклист
- [x] Добавить секцию в `darky-dance/research.md`
- [x] Добавить секцию в `darky-dance/plan.md`
- [x] Обновить `darky-dance/marketing/landing.md`
- [x] Обновить `darky-dance/marketing/log.md`
- [x] Обновить `darky-dance/log.md`

### Не делаем
- Не переходим к этапу 3 (копирайт).
- Не делаем прототип в коде (этап 4).
- Не делаем визуальный дизайн (этап 5).
- Не меняем `brief.md` и `decisions.md`.

### Итог
Структура лендинга этапа 2 зафиксирована как один LP под парную бачату с UTM-вариативным hero, единым контрактом формы и mobile-priority правилами по каждому блоку.

### Как проверить результат
1. Открыть `darky-dance/marketing/landing.md` и проверить 10 блоков по шаблону.
2. Убедиться, что есть таблица `UTM Hero Mapping` с двумя строками (`VK`, `Direct`).
3. Проверить блок формы: наличие пользовательских и hidden-полей, включая `direction=pair`.
4. Проверить, что в блоке цены указано только `800/400`.
5. Проверить новые записи в `darky-dance/marketing/log.md` и `darky-dance/log.md`.

## 2026-03-04 | Лендинг D’Arky — Этап 3 (тексты, парная бачата, 1 LP)

### Цель
Подготовить полный copy deck для лендинга под парную бачату для новичков в рамках существующей структуры этапа 2 и зафиксировать завершение этапа в логах проекта.

### Критерии готовности (acceptance criteria)
- `marketing/landing.md` содержит готовые тексты для всех 10 блоков.
- `BLK-01` содержит две полноценные hero-версии (`VK` и `Direct`) по схеме `H1 + Subhead + Bullets`.
- В `BLK-09` зафиксированы тексты required/optional/hidden полей, включая `direction=pair`.
- Ценовой блок ограничен только входом `800/400`.
- В тексте про ограничения группы нет числовой срочности; акцент на персональном внимании.
- В форме есть согласие на ПД и placeholder-ссылка на политику.
- Обновлены `marketing/log.md` и `log.md`, этап 4 не начат.

### Пошаговый план
1. Добавить append-only секцию по этапу 3 в `darky-dance/research.md`.
2. Добавить append-only секцию по этапу 3 в `darky-dance/plan.md`.
3. Проверить и довести `darky-dance/marketing/landing.md` до полного copy deck по BLK-01...BLK-10.
4. Обновить `darky-dance/marketing/log.md` записью о завершении этапа 3.
5. Обновить `darky-dance/log.md` записью о завершении этапа 3 на уровне проекта.
6. Закрыть TODO в секции и добавить итог + шаги проверки.

### Список файлов, которые меняем
- `darky-dance/research.md` (дополнение)
- `darky-dance/plan.md` (дополнение)
- `darky-dance/marketing/landing.md` (проверка и актуализация copy deck)
- `darky-dance/marketing/log.md` (дополнение)
- `darky-dance/log.md` (дополнение)

### TODO-чеклист
- [x] Добавить append-only секцию Этапа 3 в `darky-dance/research.md`
- [x] Добавить append-only секцию Этапа 3 в `darky-dance/plan.md`
- [x] Сформировать полный copy deck в `darky-dance/marketing/landing.md` для BLK-01...BLK-10
- [x] Обновить `darky-dance/marketing/log.md`
- [x] Обновить `darky-dance/log.md`
- [x] Добавить в секцию `Итог` и `Как проверить`

### Не делаем
- Не меняем структуру этапа 2 (порядок и назначение блоков).
- Не переходим к этапу 4 (код) и этапу 5 (дизайн).
- Не пишем HTML/CSS/прототип в рамках этапа 3.
- Не меняем `brief.md` и `decisions.md`.

### Итог
Этап 3 закрыт: в `marketing/landing.md` зафиксирован полный copy deck для одного лендинга парной бачаты с двумя UTM-версиями hero (`VK`/`Direct`), единым CTA-путём к форме, Telegram fallback и юридическим блоком согласия на ПД.

### Как проверить результат
1. Открыть `darky-dance/marketing/landing.md` и убедиться, что в каждом `BLK-01...BLK-10` есть секция `Этап 3 — Copy Deck`.
2. Проверить `BLK-01`: версии `VK` и `Direct` различаются по `H1/Subhead/Bullets`, при этом `CTA_Main` одинаков.
3. Проверить `BLK-05`: используются `[дата-1]`, `[дата-2]`, а также фикс `пн/ср 21:00`.
4. Проверить `BLK-06`: указано только `800/400`, без полной тарифной линейки.
5. Проверить `BLK-09`: есть `Consent_Text`, `Policy_Link_Placeholder` и hidden-контракт с `direction=pair`.
6. Проверить новые записи от 2026-03-04 в `darky-dance/marketing/log.md` и `darky-dance/log.md`; этап 4 явно не начат.

## 2026-03-04 | Этап 4 — Тех-основа сайта D’Arky (Framework + Component Architecture)

### Цель
Реализовать рабочую кодовую основу сайта D’Arky в `darky-dance/site` на стеке Astro-first + React islands + Tailwind v4 + Storybook 9, с контрактом компонентов, формы и аналитики, пригодным для бесшовного этапа 5 (дизайн).

### Критерии готовности (acceptance criteria)
- Создан проект `darky-dance/site` со структурой каталогов по архитектурному контракту.
- Подключены Astro, React integration, Tailwind v4, Storybook 9.
- Созданы базовые UI-примитивы, секционные компоненты и страницы `/`, `/thanks`, `/privacy`.
- Реализованы `zod`-контракт формы, UTM resolver, mock submit adapter, Metrika-ready analytics hooks.
- Контент вынесен в Git-content (`src/content`) и используется страницами.
- Добавлен baseline под Cloudflare Pages/Workers.
- Обновлены `darky-dance/marketing/log.md` и `darky-dance/log.md`.
- Этап 5 (финальный дизайн) не начат.

### Пошаговый план
1. Создать каркас проекта `darky-dance/site` и настроить зависимости/скрипты.
2. Реализовать архитектурные слои: `ui`, `sections`, `layouts`, `content`, `lib`, `styles`.
3. Добавить дизайн-токены и базовые стили на Tailwind v4.
4. Собрать страницы `/`, `/thanks`, `/privacy` на базе BLK-01...BLK-10.
5. Реализовать контракт формы, submit flow и UTM/analytics слой.
6. Настроить Storybook 9 и stories для ключевых примитивов.
7. Добавить baseline для Cloudflare Pages/Workers и README по запуску.
8. Обновить логи и закрыть TODO в секции.

### Список файлов/папок, которые меняем
- `darky-dance/research.md` (append-only)
- `darky-dance/plan.md` (append-only + закрытие TODO этой секции)
- `darky-dance/site/*` (новая кодовая база)
- `darky-dance/marketing/log.md` (append-only)
- `darky-dance/log.md` (append-only)

### TODO-чеклист
- [x] Добавить секции Этапа 4 в `research.md` и `plan.md`
- [x] Создать `darky-dance/site` и базовый bootstrap (Astro/React/Tailwind)
- [x] Реализовать дизайн-токены и базовые UI-примитивы
- [x] Реализовать секции лендинга и страницы `/`, `/thanks`, `/privacy`
- [x] Реализовать форму (zod), UTM resolver, mock submit и analytics hooks
- [x] Настроить Storybook 9 и stories для ключевых компонентов
- [x] Добавить baseline под Cloudflare Pages/Workers и README
- [x] Обновить `marketing/log.md` и `darky-dance/log.md`
- [x] Закрыть TODO + добавить `Итог` и `Как проверить`

### Не делаем
- Не подключаем боевую CRM-интеграцию на этом этапе.
- Не делаем финальный визуальный дизайн (этап 5).
- Не добавляем CMS (контент только Git-content).
- Не меняем `brief.md` и `decisions.md`.

### Итог
Этап 4 реализован: создана новая кодовая база `darky-dance/site` на стеке Astro-first + React islands + Tailwind v4 + Storybook 9 с разделением на `ui/sections/layouts/content/lib`, рабочим прототипом маршрутов (`/`, `/thanks`, `/privacy`, `/pair-bachata`, `/lady-style`), контрактной формой лида (`zod`), UTM-резолвером, mock-submit и Metrika-ready событиями.

### Как проверить результат
1. Открыть `darky-dance/site/package.json` и проверить стек/скрипты (`astro`, `@astrojs/react`, `@tailwindcss/vite`, `storybook`).
2. Открыть `darky-dance/site/src/pages/index.astro` и убедиться, что страница собрана из BLK-01...BLK-10 через секционные компоненты.
3. Проверить контракт формы в `darky-dance/site/src/components/sections/LeadForm.tsx` и `darky-dance/site/src/lib/types.ts`.
4. Проверить UTM и variant слой в `darky-dance/site/src/lib/utm.ts` и `darky-dance/site/src/lib/variant.ts`.
5. Проверить analytics hooks в `darky-dance/site/src/lib/analytics.ts` и использование событий в `HeroVariant.tsx`, `LeadForm.tsx`, `index.astro`, `thanks.astro`.
6. Проверить baseline под Cloudflare в `darky-dance/site/workers/`.
7. Проверить запись о завершении этапа 4 в `darky-dance/marketing/log.md` и `darky-dance/log.md`; этап 5 должен оставаться не начатым.

## 2026-03-04 | Этап 5 — Дизайн: Prompt Pack первого экрана (Nano Banana Pro, 16:9)

### Цель
Подготовить и зафиксировать в проекте 3 детальных raw-промта для генерации первого экрана лендинга D’Arky (desktop 16:9), чтобы использовать сгенерированные варианты как визуальный ориентир для следующей кодовой реализации.

### Критерии готовности (acceptance criteria)
- Создан единый документ prompt pack с 3 вариантами hero:
  - `Core A` (split conversion)
  - `Core B` (cinematic + floating form)
  - `Experimental C` (quiet luxury editorial).
- В каждом промте есть:
  - логотип как reference image (без перерисовки)
  - H1 + subhead
  - 3 буллета
  - primary CTA
  - mini-form с полями и consent
  - microtrust/SLA.
- Формат фиксирован как `desktop 16:9`, `single master frame`.
- Обновлены `darky-dance/marketing/log.md` и `darky-dance/log.md`.
- К этапу кодовой реализации hero не переходим.

### Пошаговый план
1. Добавить append-only секцию в `darky-dance/research.md` по этапу 5.
2. Добавить append-only секцию в `darky-dance/plan.md` по этапу 5.
3. Создать документ `darky-dance/marketing/landing-hero-prompts.md` с полным prompt pack.
4. Обновить `darky-dance/marketing/log.md`.
5. Обновить `darky-dance/log.md`.
6. Закрыть TODO и добавить итог + шаги проверки.

### Список файлов, которые меняем/создаём
- `darky-dance/research.md` (дополнение)
- `darky-dance/plan.md` (дополнение)
- `darky-dance/marketing/landing-hero-prompts.md` (новый файл)
- `darky-dance/marketing/log.md` (дополнение)
- `darky-dance/log.md` (дополнение)

### TODO-чеклист
- [x] Добавить секцию этапа 5 в `darky-dance/research.md`
- [x] Добавить секцию этапа 5 в `darky-dance/plan.md`
- [x] Сформировать `darky-dance/marketing/landing-hero-prompts.md` (3 raw-промта)
- [x] Обновить `darky-dance/marketing/log.md`
- [x] Обновить `darky-dance/log.md`
- [x] Добавить `Итог` и `Как проверить`

### Не делаем
- Не создаём код hero и не вносим изменения в `darky-dance/site/*`.
- Не начинаем UTM-варианты визуалов (`VK/Direct`) как отдельные кадры на этом шаге.
- Не меняем `brief.md` и `decisions.md`.
- Не переходим к следующей реализации до получения сгенерированных изображений от пользователя.

### Итог
Этап 5 в части дизайна-подготовки закрыт: сформирован и сохранён prompt pack для Nano Banana Pro с тремя разными концепциями первого экрана (2 core + 1 experimental) под desktop 16:9 и конверсионный каркас BLK-01.

### Как проверить результат
1. Открыть `darky-dance/marketing/landing-hero-prompts.md`.
2. Проверить наличие 3 секций промтов (`Core A`, `Core B`, `Experimental C`) с полными raw-блоками.
3. Убедиться, что в каждом промте есть логотип-reference, H1/subhead, 3 буллета, CTA и mini-form.
4. Проверить, что формат фиксирован как `desktop 16:9` и `single master frame`.
5. Проверить новые записи в `darky-dance/marketing/log.md` и `darky-dance/log.md`.

## 2026-03-04 | Этап 5 — Итерация: 2 дополнительных варианта на базе Core B

### Цель
Сформировать 2 новых raw-промта как эволюции `Prompt 2 — Core B`, чтобы получить более точные визуальные альтернативы в пределах уже подтверждённого направления.

### Критерии готовности (acceptance criteria)
- В `marketing/landing-hero-prompts.md` добавлены 2 новых промта:
  - оба в логике `Core B`
  - с сохранением обязательного конверсионного каркаса.
- Оба варианта остаются в формате `desktop 16:9`, `single master frame`.
- Обновлены `darky-dance/marketing/log.md` и `darky-dance/log.md`.
- Не начата кодовая реализация hero.

### Пошаговый план
1. Добавить append-only секцию в `darky-dance/research.md` по итерации.
2. Добавить append-only секцию в `darky-dance/plan.md` по итерации.
3. Обновить `darky-dance/marketing/landing-hero-prompts.md` и добавить 2 новых промта на базе `Core B`.
4. Обновить `darky-dance/marketing/log.md`.
5. Обновить `darky-dance/log.md`.
6. Закрыть TODO и добавить итог + проверку.

### Список файлов, которые меняем
- `darky-dance/research.md` (дополнение)
- `darky-dance/plan.md` (дополнение)
- `darky-dance/marketing/landing-hero-prompts.md` (дополнение)
- `darky-dance/marketing/log.md` (дополнение)
- `darky-dance/log.md` (дополнение)

### TODO-чеклист
- [x] Добавить секцию итерации в `darky-dance/research.md`
- [x] Добавить секцию итерации в `darky-dance/plan.md`
- [x] Добавить 2 новых варианта промтов на базе `Core B` в `landing-hero-prompts.md`
- [x] Обновить `darky-dance/marketing/log.md`
- [x] Обновить `darky-dance/log.md`
- [x] Добавить `Итог` и `Как проверить`

### Не делаем
- Не меняем состав исходных 3 промтов.
- Не запускаем верстку/код hero.
- Не меняем `brief.md` и `decisions.md`.

### Итог
В prompt pack добавлены 2 дополнительных варианта, стилистически и композиционно развивающие `Core B`, чтобы получить более точное попадание в ожидаемый визуальный результат перед этапом кодовой реализации.

### Как проверить результат
1. Открыть `darky-dance/marketing/landing-hero-prompts.md`.
2. Найти секцию итерации с двумя новыми промтами на базе `Core B`.
3. Проверить, что в каждом варианте сохранены logo reference, H1/subhead, 3 буллета, CTA и mini-form.
4. Проверить записи этой итерации в `darky-dance/marketing/log.md` и `darky-dance/log.md`.

## 2026-03-04 | Этап 5.1 — Реализация hero в коде по выбранному рендеру (`hero_promt_2_v1`)

### Цель
Перенести выбранный визуальный референс первого экрана (`hero_promt_2_v1`) в кодовую реализацию в `darky-dance/site` с сохранением текущего тех-стека, UTM-вариативности и конверсионного контракта формы.

### Критерии готовности (acceptance criteria)
- `BLK-01` визуально соответствует выбранному референсу по композиции:
  - левый контентный блок (badge, H1/subhead, буллеты, CTA)
  - floating mini-form
  - правый visual block с парой и неоновым halo.
- UTM-логика hero (`pair_vk_cold` / `pair_direct_intent`) сохранена.
- Mini-form в hero использует тот же контракт данных и submit layer, что и существующая форма.
- BLK-09 остаётся рабочим повторным CTA-блоком формы.
- События аналитики на hero CTA/form/telegram не теряются.
- Проходят `npm run check`, `npm run build`, `npm run build-storybook`.
- Mobile не ломается: hero корректно перестраивается в 1 колонку.

### Подход к реализации (с учётом стека)
1. **Архитектура слоя hero**
   - Astro-оболочка (`BLK01Hero.astro`) для layout/декора и минимума JS.
   - React island для UTM-текста и интерактивных частей (CTA/form analytics).
2. **Форма**
   - Выделить presentation mode для формы (`hero-compact` и `full`), не дублируя бизнес-логику.
   - Hero mini-form подключить к существующим `zod`/submit/analytics.
3. **Стили**
   - Добавить hero-специфичные классы и токены для:
     - neon halo
     - glass-карты формы
     - overlap-композиции
     - desktop/mobile брейкпоинтов.
4. **Ассеты**
   - Подготовить hero-image для правой части (web-оптимизированный формат).
   - Логотип подключить как отдельный asset, не «впечатывать» в фоновую картинку.
5. **QA**
   - Визуальная сверка с референсом на desktop.
   - Проверка интерактивности формы и аналитики.
   - Проверка адаптива и сборок.

### Ожидаемые ограничения и как обходим
- Flat-render вместо слойного макета:
  - собираем сцену слоями через CSS + отдельное изображение, не вставляем full screenshot как финал.
- Два форм-блока на странице (hero и BLK-09):
  - единый submit слой + явная семантика источника события (`hero` vs `blk09`) в аналитике.
- Ограничение перформанса hero:
  - формат webp/avif, явные размеры, контроль blur/shadow.
- Риск рассинхрона дизайна между desktop и mobile:
  - desktop-first реализация + отдельные mobile-правила для плотности и порядка блоков.

### Пошаговый план
1. Обновить `BLK01Hero.astro` под новую композицию (layout + visual layers).
2. Рефакторнуть hero-компонент React:
   - сохранить UTM-тексты
   - интегрировать compact mini-form.
3. Вынести/переиспользовать form logic так, чтобы не дублировать submit/validation код.
4. Добавить/скорректировать hero-специфичные стили в `global.css` (или выделенный css-файл hero).
5. Подключить и оптимизировать hero assets в `site/public` или `src/assets`.
6. Проверить и при необходимости скорректировать analytics-события.
7. Прогнать check/build/storybook, зафиксировать результат в логах.

### Список файлов, которые предполагается менять
- `darky-dance/site/src/components/sections/BLK01Hero.astro`
- `darky-dance/site/src/components/sections/HeroVariant.tsx`
- `darky-dance/site/src/components/sections/LeadForm.tsx`
- `darky-dance/site/src/styles/global.css` (возможен выделенный hero css)
- `darky-dance/site/src/content/landing.ts` (если потребуется микрокорректировка текста/чипов)
- `darky-dance/site/public/*` или `darky-dance/site/src/assets/*` (hero media assets)
- `darky-dance/marketing/log.md`
- `darky-dance/log.md`

### TODO-чеклист
- [x] Пересобрать структуру `BLK-01` под выбранный визуальный референс
- [x] Интегрировать mini-form в hero без дублирования бизнес-логики формы
- [x] Сохранить UTM-вариативность текста hero и текущие analytics события
- [x] Добавить hero-специфичные стили (desktop + mobile)
- [x] Подготовить и подключить оптимизированные hero assets
- [x] Прогнать `check/build/build-storybook`
- [x] Обновить `marketing/log.md` и `log.md` по факту выполнения

### Не делаем
- Не меняем структуру остальных блоков BLK-02...BLK-10.
- Не начинаем редизайн всей страницы, только hero.
- Не меняем продуктовые офферы/цены/юридические тексты.
- Не меняем `brief.md` и `decisions.md`.

### Итог
Реализация hero выполнена по референсу `hero_promt_2_v1`: в `BLK-01` собрана композиция с левым UTM-вариативным контентом, central floating mini-form и правым визуальным блоком, при этом сохранены единый submit-layer формы, аналитика и повторный конверсионный блок BLK-09.

### Как проверить
1. Запустить `cd darky-dance/site && npm run dev` и открыть `/`.
2. Проверить `BLK-01`: логотип, H1/subhead, 3 буллета, CTA, mini-form, правый визуал пары.
3. Нажать CTA в hero и убедиться, что якорь ведёт к mini-form (`#lead-form`).
4. Проверить отправку формы в hero и в BLK-09 (обе должны работать через один submit flow).
5. Прогнать `npm run check`, `npm run build`, `npm run build-storybook`.

## 2026-03-05 | VK Ads: полная система управления кампаниями (`marketing/vk-ads`)

### Цель
Создать рабочий контур управления рекламой VK Ads в отдельной папке `marketing/vk-ads`: стратегия, аудитории, креативы, журнал тестов, шаблон аналитики, текущие рекомендации и регламент загрузки данных.

### Критерии готовности (acceptance criteria)
- Создана структура `darky-dance/marketing/vk-ads/` с файлами:
  - `strategy.md`
  - `audiences.md`
  - `creatives.md`
  - `tests-log.md`
  - `analysis.md`
  - `recommendations.md`
  - `log.md`
  - `data/README.md`
- `strategy.md` содержит: цели, формулы, бюджетную модель, пороги тестов, плейсменты, ставки и weekly cadence.
- `audiences.md` покрывает обязательные группы (`A01`, `A03`, `A04`, `A06`, `A07`, `A09-A10`, `A11-A12`) и порядок волн тестирования.
- `creatives.md` содержит 3 подхода текстов для каждой приоритетной аудитории первой/второй волны + ТЗ на визуал по каждому тексту.
- `tests-log.md` готов к immediate use по заданному шаблону.
- `analysis.md` и `recommendations.md` готовы к циклу после первой выгрузки.
- Обновлены `darky-dance/marketing/log.md` и `darky-dance/log.md`.
- `brief.md` и `decisions.md` не изменены.

### Пошаговый план
1. Добавить исследовательскую секцию в `darky-dance/research.md`.
2. Добавить плановую секцию в `darky-dance/plan.md`.
3. Создать структуру `darky-dance/marketing/vk-ads/` и `data/`.
4. Заполнить `strategy.md` как операционный документ.
5. Заполнить `audiences.md` как каталог таргет-аудиторий с ID и приоритетами.
6. Заполнить `creatives.md` (тексты + ТЗ визуала + стоп-лист).
7. Подготовить `tests-log.md` (шаблон + регламент).
8. Подготовить `analysis.md` (шаблон еженедельной аналитики).
9. Подготовить `recommendations.md` (сейчас/следующий спринт/бэклог).
10. Заполнить `data/README.md` как инструкцию выгрузки из VK Ads.
11. Обновить `marketing/log.md`, `darky-dance/log.md`, `marketing/vk-ads/log.md`.

### Список файлов, которые меняем/создаём
- `darky-dance/research.md` (дополнение)
- `darky-dance/plan.md` (дополнение)
- `darky-dance/marketing/vk-ads/strategy.md` (новый файл)
- `darky-dance/marketing/vk-ads/audiences.md` (новый файл)
- `darky-dance/marketing/vk-ads/creatives.md` (новый файл)
- `darky-dance/marketing/vk-ads/tests-log.md` (новый файл)
- `darky-dance/marketing/vk-ads/analysis.md` (новый файл)
- `darky-dance/marketing/vk-ads/recommendations.md` (новый файл)
- `darky-dance/marketing/vk-ads/log.md` (новый файл)
- `darky-dance/marketing/vk-ads/data/README.md` (новый файл)
- `darky-dance/marketing/log.md` (дополнение)
- `darky-dance/log.md` (дополнение)

### TODO-чеклист
- [x] Добавить секцию в `research.md`
- [x] Добавить секцию в `plan.md`
- [x] Создать структуру `marketing/vk-ads` и `data`
- [x] Заполнить `strategy.md`
- [x] Заполнить `audiences.md`
- [x] Заполнить `creatives.md`
- [x] Подготовить `tests-log.md`
- [x] Подготовить `analysis.md`
- [x] Подготовить `recommendations.md`
- [x] Подготовить `data/README.md`
- [x] Обновить `marketing/log.md`
- [x] Обновить `darky-dance/log.md`
- [x] Добавить запись в `marketing/vk-ads/log.md`

### Не делаем
- Не редактируем `brief.md` и `decisions.md`.
- Не запускаем рекламные кампании и не меняем настройки кабинета в рамках этой задачи.
- Не подменяем фактические данные гипотезами там, где ещё нет выгрузок.

### Итог
Полный контур управления VK Ads создан в `darky-dance/marketing/vk-ads`: стратегия, сегменты, креативы, шаблоны тестирования и аналитики, action-list рекомендаций, регламент загрузки данных и локальный лог. Также обновлены процессные и проектные логи.

### Как проверить результат
1. Открыть `darky-dance/marketing/vk-ads/` и проверить наличие файлов:
   - `strategy.md`
   - `audiences.md`
   - `creatives.md`
   - `tests-log.md`
   - `analysis.md`
   - `recommendations.md`
   - `log.md`
   - `data/README.md`
2. Проверить, что в `strategy.md` есть числовые цели, unit-экономика, пороги по тестам, плейсменты и правила ставок.
3. Проверить, что в `audiences.md` есть обязательные ID (`A01`, `A03`, `A04`, `A06`, `A07`, `A09-A10`, `A11-A12`) и разбивка по волнам.
4. Проверить, что в `creatives.md` есть 3 подхода текста на каждую приоритетную аудиторию и ТЗ на визуал по каждому креативу.
5. Проверить, что `tests-log.md`, `analysis.md` и `recommendations.md` готовы к рабочему циклу без дополнительных доработок.
6. Проверить новые записи в:
   - `darky-dance/marketing/log.md`
   - `darky-dance/log.md`
   - `darky-dance/marketing/vk-ads/log.md`

## 2026-03-05 | VK Ads Dashboard в Google Sheets + автозагрузка через Composio

### Цель
Создать рабочий Google Sheets-дашборд по VK Ads для двух ролей (руководитель и маркетолог), настроить формулы/светофор/группировки и зафиксировать операционный регламент загрузки данных из `marketing/vk-ads/data/` через Composio.

### Критерии готовности (acceptance criteria)
- Создана таблица `D'Arky Dance — Реклама ВК` с листами:
  - `Сводка`
  - `Кампании`
  - `Данные`
  - `Пробные → Абонементы`
- На `Сводка` работают KPI-формулы: расход, заявки, CPL, пробные, стоимость пришедшего, конверсия в пробный, купившие, CAC, светофор.
- На `Кампании` работает автоагрегация из `Данные` по уровню `adset` + подсветка лучших/худших связок.
- На `Данные` задана каноническая шапка под нормализацию выгрузок.
- На `Пробные → Абонементы` есть валидируемый ручной ввод `да/нет`.
- Созданы файлы:
  - `darky-dance/marketing/vk-ads/dashboard-config.md`
  - `darky-dance/marketing/vk-ads/dashboard-manual.md`
- Обновлены логи:
  - `darky-dance/marketing/vk-ads/log.md`
  - `darky-dance/log.md`
- `brief.md` и `decisions.md` не изменялись.

### Пошаговый план
1. Проверить активное подключение Composio `googlesheets`.
2. Создать таблицу и 4 целевых листа.
3. Настроить шапки, формулы и ручные поля.
4. Настроить data validation и условное форматирование.
5. Зафиксировать `spreadsheetId`, `sheetId`, маппинг столбцов и пороги светофора в `dashboard-config.md`.
6. Подготовить рабочую инструкцию для руководителя и маркетолога в `dashboard-manual.md`.
7. Обновить проектные логи.

### Список файлов, которые меняем/создаём
- `darky-dance/research.md` (дополнение)
- `darky-dance/plan.md` (дополнение)
- `darky-dance/marketing/vk-ads/dashboard-config.md` (новый файл)
- `darky-dance/marketing/vk-ads/dashboard-manual.md` (новый файл)
- `darky-dance/marketing/vk-ads/log.md` (дополнение)
- `darky-dance/log.md` (дополнение)

### TODO-чеклист
- [x] Проверить Composio-подключение `googlesheets`
- [x] Создать Google Sheet и 4 рабочих листа
- [x] Настроить шапки, формулы и KPI-блоки
- [x] Настроить условное форматирование и data validation
- [x] Создать `dashboard-config.md`
- [x] Создать `dashboard-manual.md`
- [x] Обновить `marketing/vk-ads/log.md`
- [x] Обновить `darky-dance/log.md`

### Не делаем
- Не меняем `brief.md` и `decisions.md`.
- Не запускаем боевые рекламные кампании и не меняем настройки в кабинете VK Ads.
- Не подменяем фактические выгрузки тестовыми «боевыми» данными в постоянном контуре.

### Итог
Создан рабочий дашборд в Google Sheets и зафиксирован полный регламент загрузки/поддержки через Composio, включая структуру листов, формулы KPI, светофор, правила по данным и инструкции для двух ролей.

### Как проверить результат
1. Открыть таблицу по ссылке из `dashboard-config.md`.
2. Проверить 4 листа и их названия.
3. Убедиться, что на `Сводка` формулы заполнены и не дают ошибок.
4. Убедиться, что на `Кампании` стоит формула агрегации и есть подсветка связок.
5. На `Пробные → Абонементы` проверить выпадающий список `да/нет` в двух колонках.
6. Проверить новые записи в `marketing/vk-ads/log.md` и `darky-dance/log.md`.

## 2026-03-05 | VK Ads: адаптация загрузки под расширенную raw-выгрузку + НДС в дашборде

### Цель
Синхронизировать процесс загрузки с фактическими raw-выгрузками VK Ads (без переименования) и перевести все рублёвые KPI в дашборде на gross-логику (`+20% НДС`) при хранении source-данных в net.

### Критерии готовности (acceptance criteria)
- Обновлены инструкции:
  - `marketing/vk-ads/data/README.md`
  - `marketing/vk-ads/dashboard-config.md`
  - `marketing/vk-ads/dashboard-manual.md`
- В инструкциях явно разрешены raw-имена VK (`ads/groups/banners_daily_report...`) и формат `XLSX`.
- В `dashboard-config.md` зафиксированы:
  - расширенный маппинг под текущие названия колонок,
  - правила определения `level`,
  - VAT-параметры (`1.2`),
  - gross-пороги светофора (`1320` / `1584`).
- В Google Sheet обновлены формулы:
  - `Сводка`: расход и производные рублёвые KPI считаются в gross,
  - `Кампании`: расход/CPC/CPL считаются в gross,
  - светофор использует gross-цель.
- На листе `Кампании` условное форматирование обновлено:
  - зелёный `CPL <= 1320` и `лиды >= 3`
  - красный `CPL > 1800` и `лиды >= 1`
- Обновлены логи:
  - `marketing/vk-ads/log.md`
  - `darky-dance/log.md`

### Пошаговый план
1. Проверить новые raw-файлы в `marketing/vk-ads/data/` и зафиксировать покрытие колонок.
2. Обновить формулы в Google Sheet на gross-метрики (`*1.2`).
3. Обновить условное форматирование `Кампании` под gross-пороги.
4. Переписать инструкции по данным/конфиг/manual под фактический формат выгрузки.
5. Добавить append-only записи в `research.md`, `plan.md`, `log.md`.

### Список файлов, которые меняем
- `darky-dance/research.md` (дополнение)
- `darky-dance/plan.md` (дополнение)
- `darky-dance/marketing/vk-ads/data/README.md` (обновление)
- `darky-dance/marketing/vk-ads/dashboard-config.md` (обновление)
- `darky-dance/marketing/vk-ads/dashboard-manual.md` (обновление)
- `darky-dance/marketing/vk-ads/log.md` (дополнение)
- `darky-dance/log.md` (дополнение)

### TODO-чеклист
- [x] Проверить состав и структуру новых raw-файлов VK Ads
- [x] Обновить формулы `Сводка` под gross-логику
- [x] Обновить формулы `Кампании` под gross-логику
- [x] Обновить пороги условного форматирования `Кампании`
- [x] Обновить `data/README.md`
- [x] Обновить `dashboard-config.md`
- [x] Обновить `dashboard-manual.md`
- [x] Обновить `marketing/vk-ads/log.md`
- [x] Обновить `darky-dance/log.md`

### Не делаем
- Не меняем `brief.md` и `decisions.md`.
- Не меняем продуктовые целевые метрики в `strategy.md` (сохраняем исходные net-ориентиры как стратегическую базу).
- Не запускаем импорт самих новых файлов в `Данные` в рамках этой правки инструкций.

### Итог
Контур подготовки данных и дашборд синхронизированы с реальным форматом выгрузок VK Ads. Денежные метрики в интерфейсе управления приведены к gross-представлению с НДС, а инструкции обновлены под рабочий процесс без ручного переименования файлов.

### Как проверить результат
1. Открыть `data/README.md` и проверить допуск raw-имен + XLSX.
2. Открыть `dashboard-config.md` и проверить VAT-блок + gross-пороги светофора.
3. Открыть `dashboard-manual.md` и проверить пояснение про НДС для руководителя и маркетолога.
4. Открыть Google Sheet и проверить:
   - `Сводка!B4 = 1320`
   - `Сводка!B6` и недельная сводка считают `*1,2`
   - `Кампании!A2` считает расход/CPC/CPL из gross
   - условное форматирование `Кампании` использует `1320/1800`.

## 2026-03-05 | VK Ads Dashboard: визуальный апгрейд + недельный CPL + месячные итоги

### Цель
Сделать `Сводка` более управленческой и читаемой: добавить недельный CPL, месячный блок по всей истории, WoW/KPI-блок, обновить визуальный стиль и сохранить gross-модель с фильтром `level='adset'`.

### Критерии готовности (acceptance criteria)
- На `Сводка` недельный блок расширен до `D:G` и считает CPL по неделям.
- На `Сводка` добавлен месячный блок `I:L` по всей истории (`YYYY-MM`, расход, заявки, CPL).
- Добавлены доп. KPI:
  - WoW расход
  - WoW заявки
  - WoW CPL
  - доля лидов из A06
  - доля бюджета в zero-lead сегментах
- На `Кампании` восстановлена корректная агрегация (без `#VALUE!`) и округление рублёвых полей.
- Обновлены `dashboard-config.md`, `dashboard-manual.md`, `marketing/vk-ads/log.md`, `darky-dance/log.md`.

### Пошаговый план
1. Исправить формулы `QUERY` (убрать неподдерживаемый `round()` внутри query-строки).
2. Добавить/проверить недельный CPL и месячный блок на `Сводка`.
3. Проверить и стабилизировать формулу `Кампании!A2`.
4. Подтянуть визуальные улучшения (цветовые блоки, подсветка KPI/светофора).
5. Обновить документацию и логи.

### Список файлов, которые меняем
- `darky-dance/research.md` (дополнение)
- `darky-dance/plan.md` (дополнение)
- `darky-dance/marketing/vk-ads/dashboard-config.md` (обновление)
- `darky-dance/marketing/vk-ads/dashboard-manual.md` (обновление)
- `darky-dance/marketing/vk-ads/log.md` (дополнение)
- `darky-dance/log.md` (дополнение)

### TODO-чеклист
- [x] Исправить формулы недельного/месячного блоков `Сводка`
- [x] Добавить и проверить недельный `CPL` в `D:G`
- [x] Добавить и проверить месячный блок `I:L`
- [x] Добавить и проверить WoW + долевые KPI
- [x] Исправить формулу `Кампании!A2` и сортировку по расходу
- [x] Обновить визуальные правила подсветки
- [x] Обновить `dashboard-config.md`
- [x] Обновить `dashboard-manual.md`
- [x] Обновить `marketing/vk-ads/log.md`
- [x] Обновить `darky-dance/log.md`

### Не делаем
- Не меняем `brief.md` и `decisions.md`.
- Не расширяем витрину плейсмент-аналитикой до появления стабильного `placement` в выгрузках.
- Не меняем процесс ручного ввода на листе `Пробные → Абонементы`.

### Итог
В `Сводка` добавлены недельный CPL, месячный блок по всей истории и блок управленческих KPI (WoW + долевые метрики). Формулы `QUERY` стабилизированы через `LET` и пост-округление, чтобы исключить скрытые `#VALUE!`. `Кампании` снова корректно агрегируются по adset и сортируются по расходу.

### Как проверить результат
1. Открыть `Сводка` и убедиться, что заполнены:
   - `D6:G` (недели + CPL)
   - `I6:L` (месяцы + CPL)
2. Сверить контрольные значения:
   - `2026-W07`: расход `7469`, заявки `4`, CPL `1867`
   - `2026-W08`: расход `4918`, заявки `2`, CPL `2459`
   - `2026-W09`: расход `14754`, заявки `7`, CPL `2108`
   - `2026-02`: расход `29508`, заявки `13`, CPL `2270`
3. Открыть `Кампании` и проверить, что таблица заполнена, отсортирована по расходу и рублёвые столбцы округлены.

## 2026-03-05 | Composio: скрипт расчёта usage за текущий месяц

### Цель
Добавить CLI-скрипт, который считает расход Composio tool calls за текущий календарный месяц через endpoint логов, включая пагинацию, и выводит `used_calls`/`remaining_calls` (и premium-метрики только при надёжном определении premium).

### Критерии готовности (acceptance criteria)
- Есть исполняемый скрипт в проекте `darky-dance`.
- Скрипт принимает `COMPOSIO_API_KEY` (или `--api-key`).
- Скрипт запрашивает логи с `from/to` в epoch ms от 1-го числа месяца до текущего времени.
- Скрипт проходит по всем страницам через `cursor/nextCursor`.
- Скрипт выводит:
  - `used_calls`
  - `remaining_calls` из лимита `20000`
- Если premium неотличим из логов, скрипт честно пишет `unavailable` вместо fake premium totals.

### Пошаговый план
1. Создать Python-скрипт в `marketing/vk-ads/scripts/`.
2. Реализовать HTTP POST к Composio с `x-api-key`.
3. Реализовать устойчивый парсинг ленты логов и `nextCursor`.
4. Посчитать usage и premium (с fallback при недоступности признака).
5. Проверить `--help` и синтаксис.
6. Обновить логи проекта.

### Список файлов, которые меняем/создаём
- `darky-dance/research.md` (дополнение)
- `darky-dance/plan.md` (дополнение)
- `darky-dance/marketing/vk-ads/scripts/composio_month_usage.py` (новый файл)
- `darky-dance/marketing/vk-ads/log.md` (дополнение)
- `darky-dance/log.md` (дополнение)

### TODO-чеклист
- [x] Создать скрипт `composio_month_usage.py`
- [x] Добавить расчёт from/to за текущий календарный месяц
- [x] Добавить пагинацию через `cursor/nextCursor`
- [x] Добавить итоги `used_calls/remaining_calls`
- [x] Добавить premium-логику с честным fallback `unavailable`
- [x] Проверить `--help`
- [x] Проверить синтаксис (`py_compile`)
- [x] Обновить `marketing/vk-ads/log.md`
- [x] Обновить `darky-dance/log.md`

### Не делаем
- Не выполняем боевой запрос к Composio без явной необходимости (чтобы не тратить quota и не зависеть от внешней сети).
- Не меняем `brief.md` и `decisions.md`.

### Итог
Добавлен CLI-скрипт `marketing/vk-ads/scripts/composio_month_usage.py`, который считает месячный usage по Composio logs API и корректно обрабатывает пагинацию и неполный premium-сигнал.

### Как проверить результат
1. Установить ключ: `export COMPOSIO_API_KEY='ak_...'`
2. Запустить:
   - `python3 darky-dance/marketing/vk-ads/scripts/composio_month_usage.py`
3. Проверить, что на выходе есть:
   - `used_calls`
   - `remaining_calls`
   - и блок `used_premium_calls/remaining_premium_calls` только если premium действительно определяется.

## 2026-03-05 | VK Ads: закрепление режима экономии tool calls

### Цель
Закрепить в проектной документации обязательный экономный режим работы `Codex -> Composio -> Google Sheets`, чтобы в следующих чатах обновления выполнялись с минимальным расходом вызовов.

### Критерии готовности (acceptance criteria)
- В `dashboard-config.md` зафиксированы правила экономного режима:
  - call budget на цикл,
  - разрешённые действия в цикле,
  - запреты на построчную запись/переформатирование.
- В `dashboard-manual.md` добавлена практическая инструкция «как давать задачу агенту в экономном режиме».
- В `data/README.md` добавлен блок с целевым сценарем загрузки `2-5 calls`.
- Обновлены логи (`marketing/vk-ads/log.md` и `darky-dance/log.md`).

### Пошаговый план
1. Дописать в конфиг дашборда обязательные правила экономии calls.
2. Дописать в manual готовый промпт для будущих чатов.
3. Дописать в `data/README.md` короткий чеклист экономной загрузки.
4. Обновить лог проекта и подлог `vk-ads`.

### Список файлов, которые меняем
- `darky-dance/research.md` (дополнение)
- `darky-dance/plan.md` (дополнение)
- `darky-dance/marketing/vk-ads/dashboard-config.md` (обновление)
- `darky-dance/marketing/vk-ads/dashboard-manual.md` (обновление)
- `darky-dance/marketing/vk-ads/data/README.md` (обновление)
- `darky-dance/marketing/vk-ads/log.md` (дополнение)
- `darky-dance/log.md` (дополнение)

### TODO-чеклист
- [x] Зафиксировать экономный режим в `dashboard-config.md`
- [x] Добавить операционную инструкцию в `dashboard-manual.md`
- [x] Добавить чеклист в `data/README.md`
- [x] Обновить `marketing/vk-ads/log.md`
- [x] Обновить `darky-dance/log.md`

### Не делаем
- Не меняем структуру KPI и логику расчётов в дашборде.
- Не переходим на инкрементальную модель загрузки без отдельной задачи по дедупу.
- Не меняем `brief.md` и `decisions.md`.

### Итог
Режим экономии tool calls закреплён как постоянный рабочий стандарт для этого проекта и будущих чатов: загрузка батчами, минимум чтений, минимум форматирования, фиксированный `spreadsheet_id`.

### Как проверить результат
1. Открыть `dashboard-config.md` и проверить наличие раздела про call budget и правила цикла обновления.
2. Открыть `dashboard-manual.md` и проверить блок с «экономным промптом» для агента.
3. Открыть `data/README.md` и проверить целевой сценарий `2-5 calls` на одну загрузку.

## 2026-03-05 | VK Ads: фиксация упрощённого нейминга campaign/adset/ad

### Цель
Закрепить человеко-читаемый стандарт названий кампаний, групп и объявлений, который одновременно удобен в кабинете и пригоден для аналитического парсинга.

### Критерии готовности (acceptance criteria)
- В `audiences.md` зафиксирован единый упрощённый формат названий для campaign/adset/ad.
- В `creatives.md` добавлен стандарт нейминга объявлений (`[Cxx] ...`) и версия.
- В `dashboard-config.md` зафиксирован контракт парсинга `Axx/Cxx` из названий.
- В `dashboard-manual.md` добавлена короткая инструкция по неймингу для маркетолога.
- Обновлены `marketing/vk-ads/log.md` и `darky-dance/log.md`.

### Пошаговый план
1. Зафиксировать стандарт в `audiences.md` как основной (с примерами).
2. Добавить блок по неймингу объявлений в `creatives.md`.
3. Добавить в `dashboard-config.md` правила извлечения `[Axx]/[Cxx]`.
4. Добавить в `dashboard-manual.md` практическую памятку и шаблоны.
5. Обновить логи проекта.

### Список файлов, которые меняем
- `darky-dance/research.md` (дополнение)
- `darky-dance/plan.md` (дополнение)
- `darky-dance/marketing/vk-ads/audiences.md` (обновление)
- `darky-dance/marketing/vk-ads/creatives.md` (обновление)
- `darky-dance/marketing/vk-ads/dashboard-config.md` (обновление)
- `darky-dance/marketing/vk-ads/dashboard-manual.md` (обновление)
- `darky-dance/marketing/vk-ads/log.md` (дополнение)
- `darky-dance/log.md` (дополнение)

### TODO-чеклист
- [x] Зафиксировать упрощённый стандарт в `audiences.md`
- [x] Зафиксировать формат названий объявлений в `creatives.md`
- [x] Добавить правила парсинга в `dashboard-config.md`
- [x] Добавить инструкцию для ручной работы в кабинете в `dashboard-manual.md`
- [x] Обновить `marketing/vk-ads/log.md`
- [x] Обновить `darky-dance/log.md`

### Не делаем
- Не меняем текущие KPI, формулы и структуру листов дашборда.
- Не переименовываем ретро-кампании в кабинете задним числом.
- Не меняем `brief.md` и `decisions.md`.

### Итог
В проекте закреплён простой и визуально читаемый нейминг, который не перегружает кабинет и сохраняет аналитическую связку `Axx/Cxx` для автосрезов.

### Как проверить результат
1. Открыть `audiences.md` и проверить шаблоны campaign/adset/ad + примеры.
2. Открыть `creatives.md` и проверить формат именования объявлений.
3. Открыть `dashboard-config.md` и проверить правила извлечения ID из названий.
4. Открыть `dashboard-manual.md` и проверить памятку по неймингу для запуска.

## 2026-03-05 | VK Ads: закрепление политики удаления raw-файлов после загрузки

### Цель
Закрепить дефолтное поведение: после успешной загрузки данных в Google Sheets удалять обработанные выгрузки из `darky-dance/marketing/vk-ads/data/` и хранить там только `README.md`.

### Критерии готовности (acceptance criteria)
- В `data/README.md` явно указано, что `data/` — временная папка, и файлы удаляются после загрузки.
- В `dashboard-manual.md` шаги команды `загрузи данные` включают удаление обработанных файлов.
- В `dashboard-config.md` сценарий экономной загрузки включает пост-этап удаления raw-файлов.
- В `.gitignore` добавлено правило: не трекать файлы в `darky-dance/marketing/vk-ads/data/*`, кроме `README.md`.
- Обновлены `marketing/vk-ads/log.md` и `darky-dance/log.md`.

### Пошаговый план
1. Обновить `data/README.md`.
2. Обновить `dashboard-manual.md`.
3. Обновить `dashboard-config.md`.
4. Добавить правило в `.gitignore`.
5. Обновить логи.

### Список файлов, которые меняем
- `.gitignore` (обновление)
- `darky-dance/research.md` (дополнение)
- `darky-dance/plan.md` (дополнение)
- `darky-dance/marketing/vk-ads/data/README.md` (обновление)
- `darky-dance/marketing/vk-ads/dashboard-manual.md` (обновление)
- `darky-dance/marketing/vk-ads/dashboard-config.md` (обновление)
- `darky-dance/marketing/vk-ads/log.md` (дополнение)
- `darky-dance/log.md` (дополнение)

### TODO-чеклист
- [x] Добавить политику удаления в `data/README.md`
- [x] Добавить шаг удаления в `dashboard-manual.md`
- [x] Обновить сценарий в `dashboard-config.md`
- [x] Добавить защиту в `.gitignore`
- [x] Обновить `marketing/vk-ads/log.md`
- [x] Обновить `darky-dance/log.md`

### Не делаем
- Не меняем схему импорта и расчётов KPI.
- Не переносим историю выгрузок в архив в рамках этой задачи.

### Итог
Политика хранения raw-выгрузок закреплена: `data/` используется как временный буфер, после успешной загрузки очищается.

### Как проверить результат
1. Проверить `.gitignore` — `data/*` игнорируется, `README.md` исключение.
2. Проверить `data/README.md`, `dashboard-manual.md`, `dashboard-config.md` — есть явное правило удаления.
3. Выполнить следующий цикл загрузки и убедиться, что в `data/` остаётся только `README.md`.

## 2026-03-05 | Решение по внедрению Aider в рабочий стек

### Цель
Определить, нужен ли `aider` в ваших проектах, и если да — где именно он даст измеримую пользу без усложнения текущего процесса.

### Критерии готовности (acceptance criteria)
- Сформулирована чёткая рекомендация по внедрению: `не внедрять` / `внедрять точечно` / `внедрять широко`.
- Определены зоны применения (где Aider полезен, где не нужен).
- Зафиксированы риски, условия старта и метрики пилота.
- Пользователь может принять решение без дополнительного исследования.

### Пошаговый план
1. Сопоставить возможности Aider с реальным типом задач в `ai-brain` (контентные vs кодовые).
2. Оценить влияние на качество работы и сложность процесса относительно текущего стека (Codex/Claude + проектные регламенты).
3. Подготовить рекомендацию в формате «решение + условия + ожидаемый эффект + ограничения».
4. Предложить минимальный пилот (если выбрана точечная интеграция).

### Список файлов, которые будем менять/создавать
- `darky-dance/research.md` (дополнение)
- `darky-dance/plan.md` (дополнение)

### TODO-чеклист
- [x] Собрать фактуру по Aider из официальных источников
- [x] Сопоставить с текущим устройством ваших проектов
- [x] Подготовить решение «нужно/не нужно» и аргументацию
- [ ] Согласовать пилот и метрики (если решаем внедрять точечно)

### Не делаем
- Не внедряем Aider во все проекты сразу.
- Не меняем текущие проектные регламенты (`AGENTS.md`, `brief.md`, `decisions.md`) в рамках этой задачи.
- Не проводим миграцию процессов без подтверждённого пилота.

## 2026-03-05 | Реализация AGENTS Harness v2 (весь ai-brain)

### Task ID
- HARNESS-2026-03-05-01

### Цель
Внедрить AGENTS Harness v2 в репозиторий `ai-brain`: обновить канонические и производные `AGENTS.md`, добавить документацию harness, скрипты проверок/синхронизации, optional pre-commit и команды запуска.

### Acceptance criteria
- Корневой `AGENTS.md` обновлён до v2-контракта (non-mutating/mutating, Task ID, приоритет локальных AGENTS, канон/производные).
- `darky-dance/smm/AGENTS.md` синхронизирован с v2-инвариантами и сохраняет SMM-специфику.
- Все `AGENTS.md` в `.claude/worktrees/*` синхронизированы как производные от корневого.
- Добавлены `agent-harness/README.md`, `agent-harness/checklist.md`, `agent-harness/changelog.md`.
- Добавлены `scripts/harness_check.py`, `scripts/harness_sync_agents.py`.
- Добавлен optional hook `.githooks/pre-commit`.
- Добавлен `Makefile` с целевыми командами harness.
- Локальные проверки запускаются и возвращают ожидаемые exit codes.

### Пошаговый план
1. Дополнить корневой `AGENTS.md` секциями v2.
2. Дополнить `darky-dance/smm/AGENTS.md` секциями v2 и локальным приоритетом.
3. Добавить документацию `agent-harness/*`.
4. Реализовать скрипт синхронизации производных AGENTS.
5. Реализовать скрипт базовой валидации harness.
6. Добавить optional pre-commit hook.
7. Добавить `Makefile` команды для ручного/hook сценария.
8. Синхронизировать worktree AGENTS через скрипт и прогнать проверки.

### Файлы
- `AGENTS.md`
- `darky-dance/smm/AGENTS.md`
- `.claude/worktrees/nifty-chaplygin/AGENTS.md`
- `.claude/worktrees/clever-jennings/AGENTS.md`
- `agent-harness/README.md`
- `agent-harness/checklist.md`
- `agent-harness/changelog.md`
- `scripts/harness_sync_agents.py`
- `scripts/harness_check.py`
- `.githooks/pre-commit`
- `Makefile`
- `darky-dance/log.md`

### TODO
- [x] Обновить корневой AGENTS v2
- [x] Обновить SMM AGENTS v2
- [x] Добавить docs в `agent-harness/`
- [x] Добавить `harness_sync_agents.py`
- [x] Добавить `harness_check.py`
- [x] Добавить optional pre-commit hook
- [x] Добавить `Makefile` с командами
- [x] Синхронизировать worktree AGENTS
- [x] Прогнать проверки
- [x] Обновить `darky-dance/log.md` и отметить итог проверки

### Не делаем
- Не меняем бизнес-документы проектов (офферы, маркетинг-стратегии, контент-планы).
- Не внедряем обязательный hook для всех без opt-in.
- Не вводим тяжёлую инфраструктуру (БД/сервис) для контекст-графа.

### Итог проверки
- `python3 scripts/harness_sync_agents.py --write` — выполнено, синхронизированы 2 производные копии AGENTS.
- `python3 scripts/harness_check.py --mode fast` — успешно.
- `python3 scripts/harness_check.py --mode strict` — успешно (с предупреждением: нет staged-файлов, staged-contract checks пропущены).

### Как проверить результат
1. Выполнить `make harness-sync-check` и убедиться, что нет drift по worktree AGENTS.
2. Выполнить `make harness-check-fast` и `make harness-check-strict`.
3. Проверить, что `make harness-hook-install` включает optional pre-commit через `.githooks/pre-commit`.
