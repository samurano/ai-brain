# D'Arky Dance / SMM — Библиотека image-промтов (Nano Banana Pro)

## Важно: стиль и вариативность
- Правила ДНК визуального стиля и креативной ротации: `darky-dance/smm/visual-style-dna.md`.
- Перед сборкой новых промтов сначала сверяйся с `visual-style-dna.md`, затем с карточками из этого файла.

## Назначение
Файл хранит проверенные raw-промты для генерации изображений в задачах SMM D'Arky Dance.
Используется как единая база референсов при подготовке визуалов к постам.

## Правила использования
- Перед генерацией нового промта всегда смотреть карточки в этом файле.
- Промты храним только в формате Raw (без сокращений и упрощений).
- Язык raw-промтов: EN.
- Генерация новых промтов выполняется только по явному запросу пользователя на визуал.
- На один запрос выдаём 3 варианта промта на базе релевантных карточек.
- Новые рабочие промты и комментарии по фактическому результату добавляем только в конец файла (append-only).
- Уже сохранённый Raw Prompt не перезаписываем и не укорачиваем.

## Шаблон карточки

### NBP-XXX | <Название>
- ID: `NBP-XXX`
- Название: `<Короткое имя референса>`
- Тип задачи: `<Тип визуала>`
- Теги: `<tag1>, <tag2>, <tag3>`
- Инструмент/модель: `Nano Banana Pro`

#### RAW Prompt (EN)
```text
<Полный raw-промт без сокращений>
```

#### Ожидаемый результат
- `<Что должно получиться на выходе>`

#### Технические параметры
- `<Aspect ratio / Canvas / DPI / Output>`

#### Ограничения/запреты
- `<Ключевые ограничения, которые нельзя нарушать>`

#### Комментарий по фактическому результату (append-only)
- `<Дата>: <Комментарий>`

## Карточки

### NBP-001 | Расписание студии (poster 1:1, weekly calendar)
- ID: `NBP-001`
- Название: `Расписание студии: weekly schedule poster с NEW-бейджами`
- Тип задачи: `Social media schedule poster, square 1:1, calendar-style weekly table`
- Теги: `schedule`, `calendar`, `dark-premium`, `neon`, `cyrillic`, `new-badges`, `glass-ui`
- Инструмент/модель: `Nano Banana Pro`

#### RAW Prompt (EN)
```text
Type: Social media schedule poster, square 1:1, calendar-style weekly table with NEW badges
Canvas: 3000x3000 px, 300 DPI, safe margins 140 px
Brand Style: D’Arky dark premium aesthetic, very dark background, minimal haze, neon cyan→violet→magenta accents, controlled glow, razor-sharp text

Background & Frame:
- Background: near-black charcoal gradient, faint diagonal sheen
- Minimal fog texture only (opacity 1–2%), almost imperceptible
- Thin rounded rectangle neon border near edges (2–4 px), gradient glow cyan #2EC5FF → violet #7A4DFF → magenta #FF3DBB
- ECG/heartbeat texture extremely faint (opacity 3–5%), behind the table only
- Controlled bloom strictly on borders and grid lines, never on body text

Typography (Cyrillic perfect rendering):
- Font: Inter / Manrope / Montserrat with Cyrillic support
- Headings: Bold, tight kerning
- Body: Regular/Medium
- STRICT RULE: do not use periods at the end of any lines anywhere
- Regular text must be flat white fill only: NO drop shadow, NO outline/stroke, NO glow
- Glow allowed only for frame, divider lines, table grid lines, chip borders, and the NEW badge border

Top Title (center aligned, neon like Variant 1):
- Text (EXACT): “Расписание студии”
- Styling: neon gradient fill cyan→violet→magenta with controlled glow, premium and restrained

Calendar Table Container:
- One large centered rounded glass container below the title
- Fill: #0B0D14 at ~70% opacity, subtle inner shadow on container only
- Outline: thin neon 2–3 px with controlled glow (border only)

Grid Structure:
- Columns (6): “ПОНЕДЕЛЬНИК” “ВТОРНИК” “СРЕДА” “ЧЕТВЕРГ” “ПЯТНИЦА” “ВОСКРЕСЕНЬЕ”
- Left time axis is a dedicated narrow column inside the grid (time labels)
- Time rows (8), shown as TIME RANGES so time is not repeated inside chips:
  1) “13:00-14:00”
  2) “15:00-17:00”
  3) “17:00-18:00”
  4) “19:00-20:00”
  5) “20:00-21:00”
  6) “21:00-22:00”
  7) “21:30-22:30”
  8) “22:00-23:00”
- Grid lines: thin neon hairlines 1–2 px with controlled glow on lines only
- Empty cells show “—” flat white

Event Chips (IMPORTANT: horizontal, not vertical):
- Each scheduled class is a horizontal rounded mini-card placed inside the correct day/time cell
- Chip must be wider than tall:
  - Width: 85–92% of cell width
  - Height: 40–55% of cell height
  - Keep consistent chip proportions across the whole table
- Chip style:
  - Fill: slightly lighter dark glass (#111427 at ~70%)
  - Border: thin neon hairline (glow on border only)
  - Text flat white, no effects
- Chip text format (2 lines max, NO TIME INSIDE):
  Line 1 (bold small): CLASS NAME
  Line 2 (regular smaller): TEACHERS
- Keep padding consistent, no overcrowding

NEW Badge System:
- Do NOT write the words “Новый набор” in chip text
- Mark new sets with a tiny badge at the top-right corner of the chip
- Badge text (EXACT): “NEW”
- Badge style:
  - Small rounded capsule, dark fill
  - Thin neon hairline border with controlled glow on border only
  - Badge text flat white, no glow, no outline

Mark these chips as NEW:
- Monday 20:00-21:00 “Бачата ледис” Наталья
- Monday 21:00-22:00 “Бачата пары” Андрей и Оля
- Wednesday 21:00-22:00 “Бачата пары” Андрей и Оля
- Thursday 20:00-21:00 “Бачата ледис” Наталья

Exact Schedule Content (EXACT text, no extra words):

ПОНЕДЕЛЬНИК:
- Row “20:00-21:00”:
  Line 1: “Бачата ледис”
  Line 2: “Наталья”
  Badge: NEW
- Row “21:00-22:00”:
  Line 1: “Бачата пары”
  Line 2: “Андрей и Оля”
  Badge: NEW
- Row “22:00-23:00”:
  Line 1: “Бачата JnJ”
  Line 2: “Андрей и Оля”

ВТОРНИК:
- Row “19:00-20:00”:
  Line 1: “Бачата пары БАЗА 2.0”
  Line 2: “Диего и Наталья”
- Row “20:00-21:00”:
  Line 1: “Балетные техники”
  Line 2: “Диего”
- Row “21:00-22:00”:
  Line 1: “Бачата JnJ”
  Line 2: “Диего и Наталья”

СРЕДА:
- Row “21:00-22:00”:
  Line 1: “Бачата пары”
  Line 2: “Андрей и Оля”
  Badge: NEW

ЧЕТВЕРГ:
- Row “19:00-20:00”:
  Line 1: “Бачата пары БАЗА 2.0”
  Line 2: “Диего и Наталья”
- Row “20:00-21:00”:
  Line 1: “Бачата ледис”
  Line 2: “Наталья”
  Badge: NEW
- Row “21:00-22:00”:
  Line 1: “Бачата JnJ”
  Line 2: “Диего и Наталья”
- Row “22:00-23:00”:
  Line 1: “Бачата JnJ”
  Line 2: “Андрей и Оля”

ПЯТНИЦА:
- Row “21:30-22:30”:
  Line 1: “Творческая группа”
  Line 2: “Оля”

ВОСКРЕСЕНЬЕ:
- Row “13:00-14:00”:
  Line 1: “Творческая группа”
  Line 2: “Оля”
- Row “15:00-17:00”:
  Line 1: “Бачата продолжающие”
  Line 2: “Андрей и Оля”
- Row “17:00-18:00”:
  Line 1: “Бачата ледис средние”
  Line 2: “Оля”

Clarity & Consistency:
- Keep the overall look consistent with Variant 1 colors and title styling
- No extra CTAs, no “Запись в директ”
- No time duplication inside chips under any circumstance
- Maintain premium spacing, clean grid geometry, sharp typography

Technical Params:
- Crisp vector calendar + subtle glass realism
- Simulated camera gear: Canon EOS R5, 35mm, f/5.6, ISO 100
- Lighting: soft volumetric neon rim on borders/grid lines only, controlled bloom
Output: high-res PNG, perfectly rendered Cyrillic
```

#### Ожидаемый результат
- Квадратный постер 1:1 с недельной таблицей расписания и системой бейджей `NEW`.
- Премиальный тёмный визуал D'Arky: near-black фон, неон cyan-violet-magenta, аккуратный контролируемый glow.
- Чёткий рендер кириллицы и таблицы, готовый к публикации в соцсетях.

#### Технические параметры
- Canvas: `3000x3000 px`
- DPI: `300`
- Safe margins: `140 px`
- Output: `high-res PNG`
- Layout: `calendar-style weekly table`, `square 1:1`

#### Ограничения/запреты
- Не ставить точки в конце строк.
- Для обычного текста запрещены тени/обводки/glow.
- Glow разрешён только у рамки, разделителей, линий сетки, границ чипов и границы бейджа `NEW`.
- Не дублировать время внутри чипов.
- Не добавлять лишние CTA и фразу «Запись в директ».
- Не писать «Новый набор» внутри чипов; использовать только бейдж `NEW`.

#### Комментарий по фактическому результату (append-only)
- 2026-03-04: Карточка добавлена из пользовательского референса, без редактуры raw-промта.

### NBP-002 | Расписание групп (альтернативный постер 1:1)
- ID: `NBP-002`
- Название: `Расписание групп: premium cards + clean list table`
- Тип задачи: `Social media schedule poster, square 1:1`
- Теги: `schedule`, `calendar`, `premium-cards`, `table`, `dark-premium`, `neon`
- Инструмент/модель: `Nano Banana Pro`

#### RAW Prompt (EN)
```text
Type: Social media square schedule poster (premium cards + clean list table), 1:1
Canvas: 3000x3000 px, 300 DPI, safe margins 140 px
Brand Style Reference: dark smoky background + neon cyan→violet→magenta gradient glow + thin rounded neon border + subtle ECG line accents, consistent with the D’Arky price list

Background & Frame:
- Dark charcoal-to-black gradient with soft smoke/fog texture and faint diagonal sheen
- Thin rounded rectangle neon border near edges (10–14 px stroke) with gradient glow (cyan left/top → violet center → magenta right/bottom)
- Very subtle ECG/heartbeat line motif behind content, low opacity (15–25%), same gradient glow

Typography (Cyrillic perfect rendering):
- Font: Inter / Manrope / Montserrat (Cyrillic support)
- Headings: Bold, tight kerning
- Body: Regular/Medium
- STRICT RULE: do not use periods at the end of any lines anywhere on the poster
- Regular text must have NO drop shadow, NO outline/stroke, NO glow
- Glow allowed only for frames, borders, divider lines, and the brand lockup

Top Header (center aligned):
- Top center brand lockup:
  - “D’Arky” in neon gradient glow
  - “DANCE STUDIO” below in small caps, white, tracking +120
- Main title centered under logo:
  - “РАСПИСАНИЕ ГРУПП” (bold white, minimal rim only if needed)

Overall Layout:
- Three stacked sections inside safe margins
- All section titles centered
- Consistent gutters 44–60 px between sections
- Containers: dark translucent glass fill (#0B0D14 at ~70% opacity), subtle inner shadow on container only
- Borders: thin neon 2–3 px with controlled glow on border only
- Keep composition airy, no overload, perfect alignment

SECTION 1: “НОВЫЕ ГРУППЫ”
Layout:
- 2x2 grid of four rounded glass cards (fixed size, equal size), centered as a whole block
- Fixed card size: identical width and height for all 4 cards
- Consistent gutters 44–60 px between cards
Card Internal Structure:
- Line 1 (bold, centered): group name
- Line 2 (regular, centered): teachers
- Two pills on one row (centered as a pair):
  - Pill A: “СТАРТ” + date (DD.MM)
  - Pill B: days/time
- Pills: small rounded capsules with thin neon hairline border, flat white text, no effects

Text Content (EXACT, keep the × character, dates without year):
Card 1:
- Line 1: “Бачата в парах”
- Line 2: “Андрей Чистяков × Ольга Шашкова”
- Pill A: “СТАРТ 16.02”
- Pill B: “Пн, Ср 21:00”
Card 2:
- Line 1: “Бачата в парах”
- Line 2: “Диего Кальдерон × Наталья Губина”
- Pill A: “СТАРТ 24.02”
- Pill B: “Вт, Чт 19:00”
Card 3:
- Line 1: “Bachata Ladies”
- Line 2: “Наталья Губина”
- Pill A: “СТАРТ 19.02”
- Pill B: “Пн, Чт 20:00”
Card 4:
- Line 1: “Балетные техники”
- Line 2: “Диего Кальдерон”
- Pill A: “СТАРТ 10.02”
- Pill B: “Вт 20:00”

Divider:
- Thin neon gradient divider line spanning content width (subtle glow)

SECTION 2: “ДЕЙСТВУЮЩИЕ ГРУППЫ”
Layout:
- One large rounded glass container (fixed max width, centered)
- Clean list-table rows, no weekly grid
- 3-column row structure with clear alignment:
  1) “ГРУППА” (left, bold within each row)
  2) “ПРЕПОДАВАТЕЛИ” (left, regular)
  3) “РАСПИСАНИЕ” (right aligned, regular)
- Subtle row separator line between rows (1 px, low opacity)
- Consistent row padding 22–30 px

Text Content (EXACT, rows in this exact order):
Row 1:
- ГРУППА: “Bachata: Level 2 (от 9 месяцев)”
- ПРЕПОДАВАТЕЛИ: “Андрей Чистяков × Ольга Шашкова”
- РАСПИСАНИЕ: “Вс 15:00–17:00”
Row 2:
- ГРУППА: “Bachata Ladies”
- ПРЕПОДАВАТЕЛИ: “Ольга Шашкова”
- РАСПИСАНИЕ: “Вс 17:00”
Row 3:
- ГРУППА: “Подготовка к Jack&Jill”
- ПРЕПОДАВАТЕЛИ: “Андрей Чистяков × Ольга Шашкова”
- РАСПИСАНИЕ: “Пн, Чт 22:00”
Row 4:
- ГРУППА: “Творческая группа”
- ПРЕПОДАВАТЕЛИ: “Ольга Шашкова”
- РАСПИСАНИЕ: “Пт 21:30 • Вс 13:00”

Divider:
- Thin neon gradient divider line spanning content width (subtle glow)

SECTION 3: “МАСТЕР-КЛАССЫ”
Layout:
- One single rounded glass card (fixed size, NOT full width), centered horizontally
- Slightly stronger magenta accent on card border
- Internal alignment:
  - Name centered (bold)
  - Teachers centered (regular)
  - Date and time centered, flat white text

Text Content (EXACT, date without year):
- Line 1 (bold): “МК Choreo (под Dani J)”
- Line 2 (regular): “Диего Кальдерон × Наталья Губина”
- Line 3 (regular): “20.02 • Пт 20:00–22:00”

Color & Print Legibility:
- Gradient accents: cyan (#2EC5FF) → violet (#7A4DFF) → magenta (#FF3DBB)
- Body text: flat white (#F2F4FF), zero shadow, zero outline, zero glow
- Controlled glow strictly on frames, borders, and divider lines
- Crisp vector edges, perfect alignment, high readability on mobile

Technical Params:
- Clean vector poster feel, razor-sharp typography
- Simulated camera gear: Sony A7R IV, 35mm, f/5.6, ISO 100
- Lighting: soft volumetric neon rim on frames only, controlled bloom, even readability
Output: high-res PNG, social-ready square, perfectly rendered Cyrillic
```

#### Ожидаемый результат
- Квадратный постер расписания из трёх секций: новые группы, действующие группы, мастер-классы.
- Единый dark-premium визуал D'Arky с аккуратной неоновой системой акцентов.

#### Технические параметры
- Canvas: `3000x3000 px`
- DPI: `300`
- Safe margins: `140 px`
- Output: `high-res PNG`

#### Ограничения/запреты
- Не ставить точки в конце строк.
- Не добавлять glow к обычному тексту.
- Не менять точные тексты в секциях.

#### Комментарий по фактическому результату (append-only)
- 2026-03-04: Импортировано из `temp/Промты несортированные.md`.

### NBP-003 | Пост для ТГ (призыв в парный набор)
- ID: `NBP-003`
- Название: `Telegram visual: девушки, вы нам нужны`
- Тип задачи: `Social media minimalist poster, square 1:1`
- Теги: `telegram`, `recruitment`, `minimal`, `headline`, `logo-lock`
- Инструмент/модель: `Nano Banana Pro`

#### RAW Prompt (EN)
```text
Using Reference Image 1 as the exact studio logo “Д’Арки”, keep the logo perfectly unchanged (no distortion, no retyping, no redraw), preserve its original gradient and glow. Design a minimalist square 1:1 poster on a deep black matte background with a subtle vignette. Brand accents only: a thin cyan-to-purple-to-pink neon ECG heartbeat line that subtly frames the center (very minimal, lots of negative space, controlled glow).
Main headline in Russian, very large, centered slightly above middle, clean modern sans-serif in white with slight letter spacing: “Девушки, вы нам нужны”. Add a small minimal heart icon (not an emoji) near the headline, in a subtle neon gradient.
Below headline, keep copy short and highly readable (thin white sans-serif, center-aligned):
“Бачата для начинающих”
Bottom info row (small, neatly spaced): “Среда, 21:00 • Андрей и Оля • Фрунзе 80”
Place the logo (Reference Image 1) at the bottom center, small and crisp. No extra graphics, no photos, no watermarks, no additional text. Premium minimal neon style, sharp typography, square 1:1.
```

#### Ожидаемый результат
- Минималистичный квадратный постер под Telegram с коротким призывом и данными занятия.

#### Технические параметры
- Формат: `square 1:1`
- Output: `PNG`

#### Ограничения/запреты
- Логотип использовать без изменений.
- Без лишнего текста и графики.

#### Комментарий по фактическому результату (append-only)
- 2026-03-04: Импортировано из `temp/Промты несортированные.md`.

### NBP-004 | Открытка с 8 марта (вариант 1, выбранный)
- ID: `NBP-004`
- Название: `8 марта: ECG -> tulip neon line`
- Тип задачи: `Greeting card / sticker, square 1:1`
- Теги: `8march`, `greeting`, `sticker`, `ecg`, `tulip`, `minimal`
- Инструмент/модель: `Nano Banana Pro`

#### RAW Prompt (EN)
```text
Using Reference Image 1 as the exact studio logo “Д’Арки”, keep the logo perfectly unchanged (no distortion, no retyping, no redraw), preserve its original gradient and glow style. Create a minimalist square 1:1 greeting card for International Women’s Day. Background: deep matte black with a very subtle soft vignette. Add one elegant continuous neon line that starts as a heartbeat waveform (ECG pulse) and smoothly transforms into a simple tulip bud outline, all in the same brand-like cyan-to-purple-to-pink gradient glow (matching the logo’s vibe). Composition: the tulip-pulse line sits horizontally across the center, clean and airy with lots of negative space. Place the logo (Reference Image 1) at the bottom center, small and crisp. Add the text “С 8 МАРТА!” in thin white sans-serif, uppercase or small caps, centered above the logo; letter spacing slightly increased, clean and modern. Lighting: soft neon bloom, controlled glow, no heavy haze. No extra graphics, no confetti, no additional flowers, no additional text, no watermarks. High-fidelity print-ready look, square 1:1.
```

#### Ожидаемый результат
- Минималистичная открытка/наклейка 1:1 для 8 марта в фирменной неоновой стилистике.

#### Технические параметры
- Формат: `square 1:1`
- Output: `print-ready PNG`

#### Ограничения/запреты
- Только одна линия-графика (ECG + тюльпан).
- Без дополнительных декоративных элементов.

#### Комментарий по фактическому результату (append-only)
- 2026-03-04: Импортировано из `temp/Промты несортированные.md` (пометка: выбранный вариант).

### NBP-005 | Открытка с 8 марта (вариант 2)
- ID: `NBP-005`
- Название: `8 марта: neon 8 with ECG segment`
- Тип задачи: `Greeting card, square 1:1`
- Теги: `8march`, `greeting`, `variant`, `number8`, `ecg`, `minimal`
- Инструмент/модель: `Nano Banana Pro`

#### RAW Prompt (EN)
```text
Using Reference Image 1 as the exact studio logo “Д’Арки”, keep the logo perfectly unchanged (no distortion, no retyping, no redraw), preserve its original gradient and glow. Design a minimalist square 1:1 greeting card on a deep black background. Main element: a single continuous neon stroke that draws a large elegant “8” in the center, with a subtle heartbeat waveform integrated into the stroke (a small ECG peak segment embedded along the right side of the “8”), using a cyan-to-purple-to-pink gradient glow consistent with the brand style. Keep the stroke smooth, modern, and uncluttered, with controlled neon bloom. Place the logo (Reference Image 1) at the bottom center, small. Add only one line of text: “С 8 МАРТА!” in a clean thin white sans-serif font, centered beneath the “8” and above the logo, with generous spacing and a premium minimalist feel. No extra icons, no additional shapes, no particles, no background texture beyond a subtle vignette, no watermarks. High resolution, sharp edges, square 1:1.
```

#### Ожидаемый результат
- Альтернативная открытка 8 марта с центральной неоновой «8».

#### Технические параметры
- Формат: `square 1:1`
- Output: `high-res PNG`

#### Ограничения/запреты
- Без лишних иконок/декора.
- Логотип без изменений.

#### Комментарий по фактическому результату (append-only)
- 2026-03-04: Импортировано из `temp/Промты несортированные.md`.

### NBP-006 | Набор на ледис (split layout, Natalia)
- ID: `NBP-006`
- Название: `Bachata Lady Style: split hero + typography column`
- Тип задачи: `Social media dance poster, square 1:1`
- Теги: `ladies`, `natalia`, `split-layout`, `enrollment`, `poster`, `dark-premium`
- Инструмент/модель: `Nano Banana Pro`

#### RAW Prompt (EN)
```text
Create a square 1:1 social media dance poster (3000x3000 px, 300 DPI) with safe margins of 140 px. Use the provided photo of Natalia as the main subject (preserve identity, face, anatomy, pose, hands if visible, clothing). Clean editorial split layout: subject hero on the LEFT occupying ~58–62% width, and a strict typographic column on the RIGHT occupying ~38–42% width.

Background: dark smoky gradient background with subtle fog and a faint diagonal sheen. Add an asymmetric neon frame ONLY along the left and bottom edges (2–4 px), thin rounded border, gradient cyan (#2EC5FF) → violet (#7A4DFF) → magenta (#FF3DBB), controlled glow on the border only. Behind the right typography column add a very subtle ECG/heartbeat line motif, vertical flow, low opacity 12–18%.

Subject treatment: clean cutout with soft feathering, preserve realistic skin texture and fabric detail. Make the photo contrasty and насыщенная with a warm cinematic grade: slightly warmer highlights, deeper blacks, rich midtones, vivid but natural skin tones, strong micro-contrast, crisp clarity, rich saturation without clipping or neon skin. Keep the subject sharply focused. Add a restrained neon rim light (cyan top-left contour, magenta bottom-right contour), subtle and premium. Add a very soft realistic contact shadow to anchor the subject.

Typography rules: perfect Cyrillic rendering, modern sans-serif with Cyrillic support (Inter / Manrope / Montserrat). Headings bold with tight kerning, body regular/medium. STRICT RULE: do not use periods at the end of any lines anywhere on the poster. Regular text must be flat white (#F2F4FF) only with razor-sharp edges, NO drop shadow, NO outline/stroke, NO glow. Glow allowed only for frames, dividers, and the "НОВЫЙ НАБОР" pill border.

Right typography column (centered within the column, strict grid, generous spacing). Exact text content with these line breaks and no extra words:
Top brand block:
"D'Arky"
"DANCE STUDIO"

Small label above headline, centered, as a rounded pill:
Pill fill: dark translucent (#0B0D14 at ~70%)
Pill border: thin neon hairline gradient cyan→violet→magenta with controlled glow on the border only
Pill text: flat white, small caps or tight tracking
Text EXACT: "НОВЫЙ НАБОР"

Main headline (largest, bold, centered):
"Bachata Lady Style"

Open lessons block (medium, centered):
"Открытые уроки 26 февраля и 2 марта в 20:00"

Location line (medium, centered):
"📍 D'Arky, Фрунзе 80"

Add one thin neon divider line (controlled glow only) between the headline and the open lessons block. Minimal clutter, no extra icons. Output high-res PNG with perfectly rendered Cyrillic and Latin.
```

#### Ожидаемый результат
- Афиша набора на ladies c фото Натальи, split-layout и строгой типографикой справа.

#### Технические параметры
- Canvas: `3000x3000 px`
- DPI: `300`
- Safe margins: `140 px`
- Output: `high-res PNG`

#### Ограничения/запреты
- Нельзя менять человека и позу.
- Glow только на рамках/разделителях/границе плашки.

#### Комментарий по фактическому результату (append-only)
- 2026-03-04: Импортировано из `temp/Промты несортированные.md`.

### NBP-007 | Плакат А3 в бизнес-центр (версия 1)
- ID: `NBP-007`
- Название: `A3 poster for business center, v1`
- Тип задачи: `Print poster landscape`
- Теги: `a3`, `business-center`, `print`, `couple`, `offer`, `qr`
- Инструмент/модель: `Nano Banana Pro`

#### RAW Prompt (EN)
```text
Create a premium typographic poster for print, landscape 416×295 mm at 300 DPI (about 4920×3480 px), 3 mm bleed, safe margins. Use Reference Image 1 (couple) as the main subject: keep people, faces, pose, clothing, tattoos, and jewelry exactly. Cut the couple out cleanly and place them slightly left of center. Outpaint/extend the background to a dark smoky gradient. Add subtle cyan rim light on the left edge of the couple and magenta rim light on the right edge.
Background typography concept: add huge faint OUTLINE letters in the background (no extra words), using ONLY the headline text “ТАНЦУЙ ПОСЛЕ РАБОТЫ” as a large outlined pattern at very low opacity (like a design texture), while the real readable headline stays on top. Add a subtle heartbeat line integrated into the background texture. Keep it elegant, not busy.
Foreground text: right side stacked, very readable. Offer is the brightest element in neon gradient. CTA is a bold neon button. QR at bottom right.
Exact Russian text (ONLY this, must match):
Readable headline (top-right, bold, huge, white): “ТАНЦУЙ ПОСЛЕ РАБОТЫ”
Subheading (below): “D’Arky Dance Studio”
Subtext (small): “Студия бачаты прямо здесь, на цокольном этаже.”
Offer (large, neon, with flame ICON to the left): “НОВЫЕ ГРУППЫ С НУЛЯ”
Schedule: “Вечерние занятия 19:00 / 20:00 / 21:00”
CTA (bold button): “Попробуй со скидкой 50% — 400₽”
QR label (under QR placeholder): “Сканируй и записывайся”
Location (bottom line, with pin ICON to the left): “Цокольный этаж (вход рядом с «Сытый не голодный»)”
No other text, no watermark, crisp print.
```

#### Ожидаемый результат
- Печатный горизонтальный постер для бизнес-центра с offer/CTA/QR.

#### Технические параметры
- Размер: `416×295 mm`
- Разрешение: `300 DPI`
- Пример в px: `4920×3480`
- Bleed: `3 mm`

#### Ограничения/запреты
- Текст строго по списку.
- Не менять людей на фото.

#### Комментарий по фактическому результату (append-only)
- 2026-03-04: Импортировано из `temp/Промты несортированные.md`.

### NBP-008 | Плакат А3 в бизнес-центр (версия 2)
- ID: `NBP-008`
- Название: `A3 poster for elevator placement, v2`
- Тип задачи: `Print poster landscape`
- Теги: `a3`, `elevator`, `print`, `couple`, `iconography`, `qr`
- Инструмент/модель: `Nano Banana Pro`

#### RAW Prompt (EN)
```text
Create a print-ready landscape poster for an elevator placement, size 416×295 mm at 300 DPI (about 4920×3480 px), with 3 mm bleed and safe margins. Use Reference Image 1 (the uploaded couple photo) as the hero subject: preserve the same people, faces, pose, clothing, tattoos, and jewelry exactly. Reframe the portrait photo into landscape by placing the couple slightly LEFT of center and outpainting the background to the right and top with a deep charcoal smoky gradient. Add subtle neon rim light: cyan edge light from the left and magenta edge light from the right, premium and clean.
Design direction: typography is a major part of the design. Make the headline extremely large and structural, wrapping around the couple. Use masking so parts of the couple overlap the letters (some letters behind the couple, some in front) without covering faces. Keep everything high-contrast and readable at 1–2 meters. Add a thin rounded neon frame (cyan top-left → magenta bottom-right). Add a very faint heartbeat line motif in the background, subtle.
Icons: NO emojis anywhere. Replace the flame and location pin with minimalist neon line icons (vector-like). Create a small flame icon (cyan→magenta neon outline) placed to the left of the Offer text, and a small location pin icon (same style) placed to the left of the Location line. Add a small “scan” icon (stylized corners or a tiny QR-scan frame) near the QR label. Icons must be clean, consistent, and not cartoonish.
Typography: modern geometric sans-serif (Inter/Montserrat-like), excellent kerning. Headline: extra bold, uppercase, white. Offer: very bold, large, with neon gradient fill or outline. CTA: bold inside a neon pill button.
Layout:

Headline dominates the top and right side, huge, with safe spacing.

Offer sits mid-right, very large, with the flame icon.

Schedule below offer, still large.

CTA near bottom center-right.

QR placeholder bottom-right, perfect square with white border and correct quiet zone. Label under it.

Location line runs along the bottom-left to bottom-center with a location pin icon.
Use ONLY the exact Russian text below (spelling and punctuation must match exactly), and do not add any other words:
Headline (very large): “ТАНЦУЙ ПОСЛЕ РАБОТЫ”
Subheading (below headline, medium): “D’Arky Dance Studio”
Subtext (smaller): “Студия бачаты прямо здесь, на цокольном этаже.”
Offer (very large, with flame ICON to the left): “НОВЫЕ ГРУППЫ С НУЛЯ”
Schedule (large): “Вечерние занятия (19:00 / 20:00 / 21:00)”
CTA (bold button): “Попробуй со скидкой 50% — 400₽”
QR label (under QR, with scan ICON nearby): “Сканируй и записывайся”
Location (bottom, with pin ICON to the left): “Цокольный этаж (Вход рядом с «Сытый не голодный»)”
No watermark, no extra text, no blurry letters, no anatomy errors.
```

#### Ожидаемый результат
- Версия печатного постера с упором на крупную типографику и иконографику без эмодзи.

#### Технические параметры
- Размер: `416×295 mm`
- Разрешение: `300 DPI`
- Bleed: `3 mm`

#### Ограничения/запреты
- Только указанный текст.
- Без эмодзи и без дополнительных слов.

#### Комментарий по фактическому результату (append-only)
- 2026-03-04: Импортировано из `temp/Промты несортированные.md`.

### NBP-009 | Открытый урок Диего и Наталья
- ID: `NBP-009`
- Название: `База 2.0: Возвращение в бачату`
- Тип задачи: `Social media dance poster, square 1:1`
- Теги: `open-lesson`, `diego`, `natalia`, `split-layout`, `editorial`, `dark-premium`
- Инструмент/модель: `Nano Banana Pro`

#### RAW Prompt (EN)
```text
Design a high-end square 1:1 social media dance poster (3000x3000 px, 300 DPI) with safe margins of 140 px, in a clean editorial split layout: use the provided couple photo as the main subject on the LEFT side (occupying ~58–62% width), preserving identity, faces, pose, anatomy, hands, and clothing with realistic photographic detail. Create a dark smoky gradient background with subtle fog and a faint diagonal sheen. Add an asymmetric neon frame ONLY on the left edge and bottom edge, thin rounded border 2–4 px, gradient cyan (#2EC5FF) → violet (#7A4DFF) → magenta (#FF3DBB), with controlled glow on the border only (no glow elsewhere). Behind the RIGHT typography column, place a very subtle ECG/heartbeat line motif, low opacity 12–18%, vertically flowing, minimal and tasteful.

Cut out the couple cleanly with soft feathering, keep full faces and hands visible, apply a slightly cooler color grade with clean natural skin texture, realistic fabric detail, and natural contrast; add a restrained neon rim light on contours (cyan on the top-left edge, magenta on the bottom-right edge) and an extremely subtle realistic contact shadow to anchor them.

Build a strict grid in the RIGHT column (38–42% width), centered within the column, with generous spacing and maximum mobile readability; use a modern sans-serif font with perfect Cyrillic support (Inter / Manrope / Montserrat), headings bold with tight kerning, body regular/medium. STRICT RULE: do not use periods at the end of any lines anywhere on the poster. Regular text must be flat white (#F2F4FF) with razor-sharp edges ONLY, with absolutely no drop shadow, no outline/stroke, no glow; glow is allowed only for the neon frame and optional thin divider lines. Render the text perfectly in Cyrillic with no typos and do not add any extra words.

Right column exact text content and line breaks (centered, stacked):
Line 1 (very large, bold): "База 2.0"
Line 2 (large, bold): "Возвращение в бачату"
(leave a small gap)
Line 3 (bold, readable): "Диего Кальдерон x Наталья Губина"
(leave a medium gap)
Line 4 (medium, semi-bold): "ВТ и ЧТ в 19:00"
(leave a small gap)
Line 5 (smaller body text, regular/medium): "Для тех, кто когда-то танцевал и хочет вернуться"

Add one thin neon divider line (controlled glow only) between Line 3 and Line 4 to structure the layout. No icons, no extra patterns besides the faint ECG motif, no clutter. Keep all text inside safe margins and perfectly readable on mobile.

Simulated photographic realism for the couple with crisp editorial poster finish; lighting: soft key from top-left plus subtle volumetric rim on borders only, controlled bloom. Output a high-res PNG with perfectly rendered Cyrillic.
```

#### Ожидаемый результат
- Афиша открытого урока «База 2.0» с парой Диего/Наталья и строгой правой колонкой текста.

#### Технические параметры
- Canvas: `3000x3000 px`
- DPI: `300`
- Safe margins: `140 px`
- Output: `high-res PNG`

#### Ограничения/запреты
- Текст строго по заданным строкам.
- Без иконок и лишних паттернов.

#### Комментарий по фактическому результату (append-only)
- 2026-03-04: Импортировано из `temp/Промты несортированные.md`.

### NBP-010 | Открытый урок Андрей и Ольга
- ID: `NBP-010`
- Название: `Новый набор: бачата в парах (Андрей и Ольга)`
- Тип задачи: `Social media poster, square 1:1`
- Теги: `open-lesson`, `andrey`, `olga`, `split-layout`, `enrollment`, `dark-premium`
- Инструмент/модель: `Nano Banana Pro`

#### RAW Prompt (EN)
```text
Type: Social media poster, square 1:1, editorial split layout
Canvas: 3000x3000 px, 300 DPI, safe margins 140 px
Input Image: Use the provided couple photo as the main subject (preserve identity, faces, pose, anatomy, clothing)

Art Direction:
Clean editorial dance poster with split composition: subject hero on the left + typographic column on the right, premium neon accents, minimal clutter, maximum readability, consistent with the Ballet Techniques editorial vibe

Background & Frame:
- Dark smoky gradient background with subtle fog and faint diagonal sheen
- Asymmetric neon frame: thin rounded border on left and bottom edges only (2–4 px), gradient cyan→violet→magenta, controlled glow on border only
- Very subtle ECG/heartbeat line motif behind the typography column, low opacity (12–18%), vertical flow

Subject Placement (from input photo):
- Place the couple on the left ~58–62% of the square canvas
- Clean cutout with soft feathering, keep full faces and hands visible
- Color grade: slightly cooler tones, clean skin texture, realistic fabric detail, natural contrast
- Add a restrained neon rim light on contours (cyan top-left edge, magenta bottom-right edge), subtle and premium
- Add a very soft realistic floor/contact shadow only to anchor them (extremely subtle)

Typography Rules (Cyrillic perfect rendering):
- Font: Inter / Manrope / Montserrat with Cyrillic support
- Headings: Bold, tight kerning
- Body: Regular/Medium
- STRICT RULE: do not use periods at the end of any lines anywhere on the poster
- Regular text must be flat white fill only: NO drop shadow, NO outline/stroke, NO glow
- Glow allowed only for frames, dividers, and the “D’Arky” logo

Right Typography Column (38–42%, strict grid, centered within the column):
Top Brand (centered):
- “D’Arky” in neon gradient glow
- “DANCE STUDIO” below in small caps white, tracking +120

Main Headline (centered, stacked, PRIMARY):
- Line 1 (very large): “НОВЫЙ НАБОР”
- Line 2 (large): “БАЧАТА В ПАРАХ”

Teachers Block (centered, readable, placed under headline):
- Line 1 (bold): “Андрей Чистяков”
- Line 2 (bold): “Ольга Шашкова”

Feature Pills (centered, as a clean accent row):
- Render two pills side-by-side, equal size, fixed width
- Pill style: dark translucent fill (#0B0D14 at ~70%), thin neon hairline border (controlled glow on border only)
- Pill text flat white, no effects
Pill A text (EXACT):
- “СТАРТ 16.02.2026”
Pill B text (EXACT):
- “Пн, Ср 21:00”

Secondary Block (optional, small, centered, only if there is space without clutter):
- “Запись в директ”

Micro-Details:
- Thin neon divider line between Teachers Block and Feature Pills (controlled glow on the line only)
- Keep generous spacing, no extra icons, no overload
- Ensure all text stays inside safe margins and remains readable on mobile

Color System:
- Cyan #2EC5FF, Violet #7A4DFF, Magenta #FF3DBB used only for borders, dividers, small accents
- Text color #F2F4FF flat fill, razor-sharp edges

Technical Params:
- Crisp editorial poster + subtle photographic realism on the subject
- Simulated camera gear: Canon EOS R5, 85mm, f/2.8, ISO 100
- Lighting: soft key from top-left + subtle volumetric rim on borders, controlled bloom
Output: high-res PNG, perfectly rendered Cyrillic
```

#### Ожидаемый результат
- Афиша открытого урока/набора для пары Андрей + Ольга в split-верстке.

#### Технические параметры
- Canvas: `3000x3000 px`
- DPI: `300`
- Safe margins: `140 px`
- Output: `high-res PNG`

#### Ограничения/запреты
- Нельзя искажать людей из входного фото.
- Текст и плашки строго по промту.

#### Комментарий по фактическому результату (append-only)
- 2026-03-04: Импортировано из `temp/Промты несортированные.md`.

### NBP-011 | Кнопка для меню в ВК
- ID: `NBP-011`
- Название: `VK menu button, transparent, no text`
- Тип задачи: `UI graphic button`
- Теги: `vk`, `ui`, `button`, `transparent`, `no-text`, `asset`
- Инструмент/модель: `Nano Banana Pro`

#### RAW Prompt (EN)
```text
Type: UI menu button (VK), flat graphic design (NO TEXT), transparent background
Canvas: 376x256 px, export PNG with alpha channel (transparent background), pixel-perfect

Style Constraints:
- No smoke, no bokeh, no particles, no haze
- No letters, no words, no watermark, no symbols

Output Requirement:
- Background must be fully transparent (alpha)
- Only the button shape, stroke, inner fill, sheen, and tight glow are visible

Button Shape:
- Centered rounded rectangle (pill-like)
- Size: ~78% width x ~46% height
- Corner radius: 32 px
- Outer stroke: 7 px neon gradient (cyan/teal → violet → magenta)
- Inner fill: near-black (#0A0B10)
- Subtle top glass sheen band (6–10% opacity), smooth fade
- Tight outer glow attached to stroke; glow must also respect transparency (no background plate)

Inner Safe Area:
- Keep the center area clean and uniform for adding text later in Photoshop

Lighting / Render Intent:
- Clean neon edge-light simulation, crisp anti-aliasing
- Sony A7R IV, 50mm f/4, straight-on orthographic look
- Premium UI finish, zero banding, no jagged edges
```

#### Ожидаемый результат
- Прозрачная кнопка-актив для меню ВК без текста и без фоновой подложки.

#### Технические параметры
- Canvas: `376x256 px`
- Output: `PNG with alpha`

#### Ограничения/запреты
- Полный запрет на текст/символы.
- Фон строго прозрачный.

#### Комментарий по фактическому результату (append-only)
- 2026-03-04: Импортировано из `temp/Промты несортированные.md`.

### NBP-012 | Приглашение на урок бачаты (флаер 16:9)
- ID: `NBP-012`
- Название: `Print-ready invitation flyer with QR badge`
- Тип задачи: `Print flyer, horizontal 16:9`
- Теги: `invitation`, `flyer`, `qr`, `print`, `16:9`, `lesson`
- Инструмент/модель: `Nano Banana Pro`

#### RAW Prompt (EN)
```text
Type: Print-ready neon flyer, horizontal 16:9, balanced grid
Canvas: 3840x2160 px, safe margins 140 px

INPUT:
- If a QR image is provided, embed that exact QR without changing geometry

Background:
- Smooth charcoal-to-black gradient
- Keep the entire left text column clean and texture-free
- Subtle smoke allowed only behind the right QR badge area and very faint
- Thin rounded neon border with controlled gradient glow

Grid Layout:
- Two-column layout
  - Left column: all text
  - Right column: a single “QR badge” card
- Generous whitespace and increased line spacing across all text blocks

Typography:
- Geometric sans with Cyrillic (Inter / Manrope / Montserrat)
- No drop shadows for any text
- Only headline and studio name can have a tight, clean halo
- Everything else flat fill only

Neon palette:
- cyan #2EC5FF → violet #7A4DFF → magenta #FF3DBB

Left Column Text (exact, no periods at line ends):
Headline (full neon):
ПРИГЛАШЕНИЕ НА УРОК БАЧАТЫ

Subheadline (flat white):
ДЛЯ ДВУХ ЧЕЛОВЕК

Body (flat white):
Мы открываем набор в новые группы для начинающих

Label (flat white):
Приглашение действует в группы:

Formats (neon gradient fill, flat, no glow):
Парная бачата | Леди-стайл

Bottom-left footer (two lines):
D’Arky Dance Studio
- Neon gradient fill + subtle tight halo
TG, WA: +7 995 892 72 96
- Flat white, smaller, no glow

Bottom-most line (centered across canvas, flat white, small):
СРОК ДЕЙСТВИЯ ДО 31 МАРТА 2026

Right Column “QR Badge”:
- Rounded rectangle badge card with dark translucent fill
- Thin neon outline around the badge
- Inside the badge:
  - Top caption: МЫ В ТГ (neon gradient fill, flat)
  - QR below on a pure white plate with clean quiet zone
- QR constraints:
  - Keep QR geometry exact, no rotation, no warp
  - No glow, blur, texture, or overlays inside QR modules
  - Neon styling only around the plate or badge border, never inside the QR

Render:
- Flat orthographic poster
- Crisp vector edges, premium clean look
Output: high-res PNG, perfectly readable Cyrillic, QR scannable
```

#### Ожидаемый результат
- Печатный флаер-приглашение 16:9 с двухколоночной композицией и QR-бейджем.

#### Технические параметры
- Canvas: `3840x2160 px`
- Safe margins: `140 px`
- Output: `high-res PNG`

#### Ограничения/запреты
- Геометрию QR не менять.
- Текст только по указанному шаблону.

#### Комментарий по фактическому результату (append-only)
- 2026-03-04: Импортировано из `temp/Промты несортированные.md`.

### NBP-013 | Обработка фото преподавателей (cyberpunk relight)
- ID: `NBP-013`
- Название: `Universal photo edit: cyberpunk relighting`
- Тип задачи: `Photo edit / relighting`
- Теги: `photo-edit`, `relight`, `cyberpunk`, `background-replace`, `realism`
- Инструмент/модель: `Nano Banana Pro`

#### RAW Prompt (EN)
```text
**Type:** Universal photo edit / background replacement + physically-based relighting (use the provided image as source)

**Geometry & Identity Lock (absolute):**
- Preserve the original camera angle, perspective, framing/crop, and horizon.
- Preserve the subject’s exact pose, head tilt, gaze direction, facial expression.
- Preserve exact limb geometry: arm/hand placement, finger curl, leg angles, foot placement.
- Preserve wardrobe, accessories, hair shape, and all visible logos/details unchanged.
- Do not re-pose, do not recompose; edit only background + lighting integration.

**Edit Goal:**
- Replace background with a NIGHT cyberpunk city scene.
- Make the subject look naturally present in that scene via correct neon lighting, shadows, bounce light, and edge integration.
- Subject is tack-sharp; background is mildly defocused with cinematic bokeh.

**Background Scene (generate):**
- Neon cyberpunk street: dense high-rises, holographic billboards, neon signage, wet reflective pavement, subtle fog/haze, optional fine mist/rain.
- Perspective lines and vanishing points must match the original photo.
- If the subject is touching/leaning on a surface, generate a plausible matching support surface at the same contact point without moving the subject.

**Physical Lighting Reconstruction (key to realism):**
- Infer a believable light rig from the cyberpunk scene and apply it to the subject:
  - Key neon: magenta/pink from one side (choose the side that best matches existing shadow clues in the source).
  - Rim neon: cyan/teal from opposite side/back to outline hair and clothing.
  - Ambient fill: cool blue from wet street reflections (soft, low intensity).
  - Practical sources: visible signs/LEDs must justify the direction and color of the light on the subject.
- Add realistic neon specular reflections on glossy surfaces (glasses, jewelry, jacket trims) consistent with light positions.

**Contact Shadows & Occlusion (remove “cutout” look):**
- Create physically plausible contact shadows where the subject meets the environment:
  - Under shoes/feet and near any ground contact.
  - At hand/arm contact points with rails/walls.
  - Subtle ambient occlusion in creases and near clothing overlaps (natural depth, not heavy).
- Shadow softness and direction must match scene lights (neon tends to create soft-edged colored shadows plus faint hard accents from LEDs).

**Edge Integration (light wrap & atmosphere):**
- Add subtle neon light wrap along the subject silhouette on the side facing neon sources (thin, realistic spill, not a glow effect).
- Match atmospheric perspective: if the scene has haze, apply a very subtle haze falloff to the subject’s far edges only (distance-consistent), keeping the face crisp.
- Preserve clean hair strand edges with natural translucency and correct light tinting.

**Color & Exposure Matching (unify subject + background):**
- Match black levels and contrast curve so subject and background share the same night exposure.
- Skin remains realistic with natural pores; keep clothing base colors faithful while allowing colored neon spill.
- Cinematic cyberpunk grade: teal/cyan + magenta, controlled saturation, smooth highlight roll-off.

**Camera & Optics (universal defaults):**
- Full-frame look, 50mm prime
- Aperture: f/1.8–f/2.2 (sharp subject, bokeh background)
- Night exposure feel: 1/200s, ISO 800
- Background bokeh: circular highlights from neon signs; subject micro-contrast preserved.

**Texture & Noise Consistency (final glue):**
- Match grain/noise structure between subject and background (same intensity and pattern).
- Match sharpness: subject crisp, background softer; avoid over-sharpen halos on edges.
- Keep fabric weave, denim grain, hair strands highly detailed and consistent with the source.

**Quality Targets (semantic positives):**
- photorealistic composite, physically plausible relighting, consistent perspective, clean matting, natural contact shadows, realistic neon reflections, cinematic low-light clarity, accurate skin texture, sharp subject focus, smooth bokeh background

**Avoid:**
- glow-outline halos, floating subject without ground shadow, mismatched color temperature, flat fill lighting, over-saturated skin, plastic smoothing, warped anatomy, altered pose/gaze/framing
```

#### Ожидаемый результат
- Фотореалистичный композит преподавателя в киберпанк-сцене с физически правдоподобным светом.

#### Технические параметры
- Camera style: `50mm`, `f/1.8–f/2.2`, `ISO 800`
- Режим: `photo edit / relighting`

#### Ограничения/запреты
- Нельзя менять позу/анатомию/идентичность.
- Запрещены контурные glow-ореолы и cutout-эффект.

#### Комментарий по фактическому результату (append-only)
- 2026-03-04: Импортировано из `temp/Промты несортированные.md`.

### NBP-014 | QR-код для оплаты (A5)
- ID: `NBP-014`
- Название: `Payment QR poster A5 with recolored modules`
- Тип задачи: `Image edit / print poster`
- Теги: `qr`, `payment`, `a5`, `print`, `scannable`, `neon`
- Инструмент/модель: `Nano Banana Pro`

#### RAW Prompt (EN)
```text
Type: Image edit / redesign using provided QR image (must remain scannable) Canvas: A5 portrait poster, 1748x2480 px, 300 DPI, safe margins 90 px, print-ready INPUT: - Use the provided black-and-white QR code image as the source - Preserve QR geometry EXACTLY (module grid, finder patterns, timing patterns, alignment) - Preserve a clean quiet zone around the QR (at least 4 modules of pure white) BACKGROUND & FRAME (match reference neon style): - Deep charcoal-to-black gradient background with subtle smoke/fog texture and faint diagonal sheen - Thin rounded rectangle neon border near edges (10–14 px stroke) with gradient glow (cyan → violet → magenta) - Very subtle ECG/heartbeat line motif at 15–25% opacity, placed behind content and NEVER crossing the QR plate LAYOUT (STRICT): - Top headline at top center - QR centered horizontally in the upper-middle area - QR size: ~55–65% of page width - Place QR on a pure white plate (rounded rectangle or square) to guarantee contrast - Keep generous spacing between headline, QR, and bottom text TOP HEADLINE (EXACT TEXT): - Text: ДЛЯ ОПЛАТЫ - Style: bold, neon gradient fill (cyan→violet→magenta) with restrained glow, crisp vector edges - Font: modern geometric sans with Cyrillic support (Inter / Manrope / Montserrat), Bold FORCE COLORED QR (CRITICAL, DO NOT KEEP BLACK): - Recolor ALL dark modules (originally black) into a dark neon gradient while keeping the module shapes and grid intact - The QR must NOT remain black-and-white - Method: map the original black pixels/modules to a gradient fill while preserving sharp module edges - Keep white modules and the quiet zone pure white, untouched - Finder patterns (three corner squares) must also be recolored (not black), but remain very dark for reliability COLOR SPEC FOR QR MODULES (use exactly this palette approach): - Use a dark high-contrast neon gradient across the QR modules: - Start color: deep navy-purple #120822 - Mid: deep violet #3B0A7A - End: dark magenta #7A0B4A - Ensure the recolored modules are still “dark” (low luminance) against pure white plate for scan contrast - Absolutely no glow, blur, shadow, texture, noise, or bevel applied inside the QR modules - Edges must be razor-sharp, vector-like, orthographic BOTTOM TEXT (REMOVE “МОЖНО ПО НОМЕРУ”, ONLY ONE LINE, centered): - Text (exact, uppercase): +7 903 902 72 96 (СБЕР, НАТАЛЬЯ Г.) - Font: same family, Medium weight - Color: white #F2F4FF with subtle neon rim light (very restrained) - Line height: 1.15–1.25 - No quotes, no extra lines, no periods at line end SCANNABILITY CONSTRAINTS: - No rotation, warp, perspective skew, or rounded modules - No overlays or patterns intersecting the QR plate - Quiet zone must remain clean and uninterrupted pure white - Maintain strong contrast between dark colored modules and white plate TECHNICAL RENDER: - Perfect front-facing orthographic view, flat poster - Simulated camera: 50mm, f/8, ISO 100 - Lighting: soft volumetric neon rim + controlled bloom on background only Output: high-res PNG, print-ready, perfectly rendered Cyrillic
```

#### Ожидаемый результат
- Печатный A5-постер для оплаты с цветным, но сканируемым QR-кодом.

#### Технические параметры
- Canvas: `1748x2480 px`
- DPI: `300`
- Safe margins: `90 px`
- Output: `print-ready PNG`

#### Ограничения/запреты
- Геометрия QR строго неизменна.
- Запрещены эффекты внутри модулей QR.

#### Комментарий по фактическому результату (append-only)
- 2026-03-04: Импортировано из `temp/Промты несортированные.md`.

### NBP-015 | Набор на ледис (альтернатива, вариант 1)
- ID: `NBP-015`
- Название: `Ladies enrollment, quiet luxury editorial`
- Тип задачи: `Social media dance poster, square 1:1`
- Теги: `ladies`, `natalia`, `alternative-style`, `quiet-luxury`, `editorial`, `ab-test`
- Инструмент/модель: `Nano Banana Pro`

#### RAW Prompt (EN)
```text
Create a premium square 1:1 social media dance poster (3000x3000 px, 300 DPI) with safe margins of 140 px. Use the provided photo of Natalia as the only subject (preserve identity, face, anatomy, pose, clothing). New art direction: quiet luxury editorial, fashion magazine cover vibe, no neon, no glow, no techno effects. Minimalist, expensive, and highly readable.

Background & mood:
- Warm off-white / ivory paper tone with subtle natural paper grain
- Very soft shadow gradient to add depth (no fog, no streaks)
- Optional: a thin hairline frame around the poster in very light warm-gray (no glow), rounded corners, extremely subtle

Subject treatment:
- Place Natalia as a large clean cutout, slightly offset (either centered or gently to the right), with plenty of negative space for text
- Color grade: rich and contrasty but natural, warm skin tones, crisp clarity, deep but not crushed blacks, film-like highlight roll-off, clean fabric detail
- Add a soft natural studio edge light (not colored), realistic gentle shadow for grounding

Typography rules:
- Perfect Cyrillic rendering
- Font: elegant modern sans-serif with Cyrillic support (Manrope / Inter / Montserrat) OR a premium serif for the headline (Cormorant Garamond / Playfair Display) paired with a sans-serif for details, all with Cyrillic support
- STRICT RULE: do not use periods at the end of any lines anywhere on the poster
- Text must be flat ink style only: no glow, no drop shadow, no outline/stroke
- Use near-black ink color (#0B0D14) for main text and softer charcoal (#2A2D36) for secondary text

Layout (magazine cover style):
Top brand block (small, left aligned, inside safe margins):
"D'Arky"
"DANCE STUDIO"

Small label above headline (left aligned, small caps, spaced letters):
"НОВЫЙ НАБОР"

Main headline (largest, left aligned, premium editorial hierarchy):
"Bachata Lady Style"

Info block (left aligned, medium, generous line spacing):
"Открытые уроки 26 февраля и 2 марта в 20:00"
"📍 D'Arky, Фрунзе 80"

Add a thin divider line between the headline and the info block (hairline, warm-gray, no glow). Keep generous whitespace, no icons, no extra text. Ensure all text stays inside safe margins and is readable on mobile. Output a high-res PNG with perfectly rendered Cyrillic and Latin.
```

#### Ожидаемый результат
- A/B-вариант афиши без неона в стиле quiet luxury editorial.

#### Технические параметры
- Canvas: `3000x3000 px`
- DPI: `300`
- Safe margins: `140 px`

#### Ограничения/запреты
- Полный запрет на неон/техно-эффекты.
- Сохранение идентичности человека.

#### Комментарий по фактическому результату (append-only)
- 2026-03-04: Импортировано из блока «Альтернативные промты».

### NBP-016 | Набор на ледис (альтернатива, вариант 2)
- ID: `NBP-016`
- Название: `Ladies enrollment, centered cinematic + bottom glass panel`
- Тип задачи: `Social media dance poster, square 1:1`
- Теги: `ladies`, `natalia`, `alternative-style`, `cinematic`, `ab-test`, `centered-layout`
- Инструмент/модель: `Nano Banana Pro`

#### RAW Prompt (EN)
```text
Create a bold, premium square 1:1 social media dance poster (3000x3000 px, 300 DPI) with safe margins of 140 px. Use the provided photo of Natalia as the only subject (preserve identity, face, anatomy, pose, clothing). Make it feel expensive, modern, and максимально читаемо.

Art direction: cinematic editorial dance poster with a centered hero portrait and a clean “glass panel” info block at the bottom, not a split layout. Minimal clutter, strong hierarchy, high contrast.

Background:
- Deep charcoal to midnight-navy gradient with subtle fog and fine film grain
- Add a soft circular neon halo ring behind Natalia’s upper body (not touching the text), gradient cyan (#2EC5FF) → violet (#7A4DFF) → magenta (#FF3DBB), controlled glow only around the ring
- Add very subtle diagonal light streaks (low opacity) to create motion, but keep the center clear for readability

Subject treatment:
- Place Natalia centered (slightly above the vertical center), large and confident, shoulders to mid-thigh if possible
- Color grade: contrasty and насыщенная, deeper blacks, crisp highlights, strong micro-contrast, rich saturation without clipping, natural skin tones (no neon skin)
- Add restrained neon rim light on contours (cyan top-left, magenta bottom-right), subtle and premium
- Keep the face sharp and clean, realistic skin texture, realistic fabric detail
- Add a very soft contact shadow only if needed to anchor

Typography rules:
- Perfect Cyrillic rendering
- Font: Inter / Manrope / Montserrat with Cyrillic support
- Headings bold with tight kerning, body regular/medium
- STRICT RULE: do not use periods at the end of any lines anywhere on the poster
- Regular text must be flat white (#F2F4FF) only with razor-sharp edges, NO drop shadow, NO outline/stroke, NO glow
- Glow allowed only for the neon halo ring and the “НОВЫЙ НАБОР” pill border and one thin divider line

Layout:
Top area (small, clean, inside safe margins):
Left top:
"D'Arky"
"DANCE STUDIO"

Right top: a small rounded pill label with dark translucent fill (#0B0D14 at ~70%), thin neon hairline border (controlled glow only on border), pill text flat white, small caps:
"НОВЫЙ НАБОР"

Main headline (largest, centered, placed below Natalia’s chest area or just above the bottom panel, ensure it never covers the face):
"Bachata Lady Style"
Make this headline premium neon but readable: subtle gradient cyan→violet→magenta with controlled glow, crisp edges, no blur, keep it elegant not flashy

Bottom info panel (full width within safe margins, “dark glass” look):
- Panel fill: dark translucent (#0B0D14 at ~70%) with slight blur behind it
- Panel border: very thin hairline neon (controlled glow only on border), matching cyan→violet→magenta
- Inside the panel, centered, flat white text only (no effects), exact lines:
"Открытые уроки 26 февраля и 2 марта в 20:00"
"📍 D'Arky, Фрунзе 80"

Add one thin neon divider line (controlled glow only) between the headline and the bottom info panel. Keep generous spacing, no extra icons, no extra text. Output a high-res PNG with perfectly rendered Cyrillic and Latin.
```

#### Ожидаемый результат
- A/B-вариант с центровкой героя и нижней glass-панелью для оффера.

#### Технические параметры
- Canvas: `3000x3000 px`
- DPI: `300`
- Safe margins: `140 px`
- Output: `high-res PNG`

#### Ограничения/запреты
- Не перекрывать лицо заголовком.
- Эффекты только в разрешённых местах.

#### Комментарий по фактическому результату (append-only)
- 2026-03-04: Импортировано из блока «Альтернативные промты».
