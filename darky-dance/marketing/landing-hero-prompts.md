# Этап 5 (дизайн) — Prompt Pack для первого экрана D’Arky (Desktop 16:9, Nano Banana Pro)

## Назначение
Этот файл фиксирует 3 детальных raw-промта для генерации первого экрана лендинга D’Arky в Nano Banana Pro.
Сгенерированные изображения используются как визуальный референс для последующей точной реализации в коде.

## Зафиксированные предпочтения
- Hero UI: `CTA + mini-form`
- Style mix: `2 core + 1 experimental`
- UTM: `single master frame` на текущей итерации
- Фото: AI-модели (без реальных фото на этом шаге)
- Логотип: использовать файл `darky-dance/smm/logo_512px.jpg` как `Reference Image 1`

## Публичный контракт prompt pack
- Формат: `desktop hero only`, `16:9`
- Canvas: `2560x1440` (допустимо `1920x1080`, если модель рендерит стабильнее)
- В каждом варианте обязательно:
  - логотип D’Arky (без перерисовки)
  - H1 + subhead
  - 3 буллета снятия барьеров
  - primary CTA
  - mini-form (`Имя`, `Телефон`, `Telegram (необязательно)`, consent)
  - microtrust/SLA
- Язык интерфейса: русский
- Стиль текста: на «вы», без давления

## Prompt 1 — Core A (Split Conversion, dark neon editorial)

```text
Type: Website hero screen design, desktop 16:9, first-screen only
Canvas: 2560x1440 px, RGB, high-res PNG
Goal: conversion-first hero for a bachata school landing page, cold traffic, trust + clarity in 5 seconds

Reference Image 1:
- Use the provided D’Arky logo as exact brand asset
- Keep logo unchanged (no redraw, no retyping, no distortion, no recolor)

Art direction:
- Core brand style, dark premium background
- Neon accent palette only: cyan #2EC5FF -> violet #7A4DFF -> magenta #FF3DBB
- Controlled glow only on accents (borders, chips, tiny dividers), not on body text
- Clean editorial split layout with high readability

Layout (strict):
- 12-column grid inside centered container max width 1280 px
- Safe margins: 72 px outer, 48 px inner
- Left block: columns 1-6 (content + form)
- Right block: columns 7-12 (hero visual with dancing couple)
- Vertical alignment: center-weighted, everything visible above the fold

Background:
- Near-black charcoal gradient with very subtle haze
- Very faint ECG/heartbeat motif behind right block only, opacity 8-12%
- Thin asymmetric neon frame on left and bottom edges, subtle bloom

Subject (right side):
- Realistic adult bachata couple, age around 25-35, non-sexualized, natural confident expressions
- Dynamic but clean pose, social dance vibe, no nightclub chaos
- Studio-like environment hints, dark background, soft rim light
- Realistic anatomy, hands, faces, clothing texture

Typography rules:
- Perfect Cyrillic rendering
- Font style: modern sans (Manrope / Inter / Montserrat look)
- Headline strong, body clean, no text effects on body copy
- Body text must be flat white/light gray, no outline, no shadow, no glow

Exact on-screen text (EXACT):
Eyebrow badge:
"Парная бачата для новичков"

H1:
"Парная бачата с нуля в Новосибирске"

Subhead:
"Можно без пары и без опыта"

Bullets:
"Без пары можно"
"Пробное 800 ₽ / 400 ₽ при предоплате"
"Пн и Ср в 21:00 • Фрунзе 80"

Primary CTA button:
"Записаться на пробное"

Mini-form card title:
"Запишитесь на пробное"

Field labels:
"Ваше имя"
"Телефон"
"Telegram (необязательно)"

Consent line:
"Нажимая кнопку, вы соглашаетесь на обработку персональных данных"

Fallback line:
"Если удобнее, напишите в Telegram: @darkystudio"

SLA line:
"Обычно отвечаем в рабочее время до 30 минут"

UI styling:
- Glassmorphism dark card for mini-form, rounded 20-24 px
- Input height around 48-52 px, clean borders
- CTA button high-contrast, pill or rounded rectangle
- Tiny trust chips near H1: "Без опыта" and "Комфортный старт"

Hard constraints:
- No extra text, no fake badges like “осталось 2 места”
- No watermark, no random English words
- Keep hierarchy clear: H1 -> bullets -> CTA -> form
- Do not crop critical UI elements
- Maintain premium whitespace and strict alignment

Output:
- One final desktop hero image only, no mobile version
- High-res PNG
```

## Prompt 2 — Core B (Cinematic Hero + Floating Mini-Form)

```text
Type: Website hero screen, desktop 16:9, first fold only
Canvas: 2560x1440 px, high-res PNG
Goal: emotionally strong first screen with immediate signup form visibility

Reference Image 1:
- Use the uploaded D’Arky logo exactly as provided
- Preserve original color treatment and proportions

Art direction:
- Core branch, dark cinematic neon premium
- Strong visual impact on right side, clean conversion UI on left side
- Neon accents restrained and premium, not flashy

Composition:
- Left zone 42% width: text stack + CTA + floating mini-form
- Right zone 58% width: cinematic dance scene with depth
- Add one soft neon halo arc behind dancers
- Keep all key UI elements inside safe area for desktop

Background:
- Deep navy-charcoal gradient with subtle film grain
- Gentle diagonal light sweep from top-right to center
- Faint heartbeat line motif integrated into background, low opacity
- Accent colors: cyan/violet/magenta only

Subject:
- One realistic bachata couple in motion (mid-step), confident and approachable
- Mood: warm, welcoming, “I can start here”, not performance-only
- Wardrobe: clean contemporary social dance style, tasteful
- Lighting: soft key + subtle colored rim, realistic skin tones

Typography:
- Perfect Cyrillic
- Headline bold sans, body medium sans
- No body text glow/shadow/outline

Exact text (EXACT):
Top badge:
"D’Arky Dance • Новосибирск"

H1:
"Комфортный старт в парной бачате"

Subhead:
"Для тех, кто начинает с нуля"

Support bullets:
"Можно без пары"
"Пробное 800 ₽ / 400 ₽"
"Группа Пн/Ср 21:00"

Primary CTA:
"Записаться на пробное"

Mini-form heading:
"Оставьте контакты"

Fields:
"Имя"
"Телефон"
"Telegram (необязательно)"

Consent:
"Согласен(а) на обработку персональных данных"

Form submit:
"Записаться на пробное"

Microtrust:
"Свяжемся и подберём ближайшую дату"

Telegram fallback:
"Или сразу в Telegram: @darkystudio"

UI details:
- Floating form card overlaps transition between left and right zones
- Form card dark glass, radius 22 px, subtle border, soft shadow
- Inputs clean, high-contrast placeholders
- CTA button prominent, no gradient overload
- Add 2 compact info chips near CTA:
  "Без опыта"
  "Первый шаг без стресса"

Constraints:
- No aggressive sales language
- No clutter, no extra icons spam
- No fake UI elements that reduce realism
- Keep desktop-first proportions and pixel-clean typography

Output:
- Single finalized hero mock image (desktop 16:9)
- High-res PNG
```

## Prompt 3 — Experimental C (Quiet Luxury Editorial, conversion-safe)

```text
Type: Website hero mockup, desktop 16:9, above-the-fold only
Canvas: 2560x1440 px, high-res PNG
Goal: premium alternative style (A/B test), calmer than neon core but still conversion-ready

Reference Image 1:
- Use provided D’Arky logo unchanged
- No distortion, no redraw

Art direction:
- Experimental branch: quiet luxury editorial
- No heavy neon environment
- Palette: deep charcoal, graphite, soft warm gray, subtle rose-violet accent only
- Minimal, expensive, calm, highly readable

Layout:
- 12-column desktop grid
- Left 6 columns: text + mini-form
- Right 6 columns: elegant dance portrait scene
- Large negative space, breathing room, strict rhythm

Background:
- Matte dark-to-warm-gray gradient, subtle paper-like grain
- No techno glow effects
- Optional thin hairline divider accents only

Subject:
- Realistic adult bachata couple, poised and elegant
- Less motion blur, more editorial confidence
- Studio portrait feel with soft cinematic light
- Emotional tone: supportive, calm, inviting

Typography:
- Perfect Cyrillic rendering
- Premium sans + optional elegant serif only for H1
- Text ink-style, no glow, no shadow, no outline
- Strong hierarchy and spacing

Exact text (EXACT):
Eyebrow:
"Парная бачата для начинающих"

H1:
"Начните танцевать в паре без стресса"

Subhead:
"D’Arky Dance • Фрунзе 80 • Новосибирск"

Bullets:
"Можно прийти без пары"
"Пробное 800 ₽ / 400 ₽ при предоплате"
"Понедельник и среда в 21:00"

Primary CTA:
"Записаться на пробное"

Mini-form title:
"Запись на ближайший урок"

Fields:
"Ваше имя"
"Телефон"
"Telegram (необязательно)"

Consent:
"Нажимая кнопку, вы принимаете условия обработки персональных данных"

Submit:
"Записаться на пробное"

SLA:
"Ответим в рабочее время и поможем с первым шагом"

UI styling:
- Form card as soft dark panel, radius 20 px, thin neutral border
- Button style clean premium (no loud gradient)
- One understated accent underline under H1

Hard constraints:
- Keep it premium and minimal, no club overload
- Do not invent additional offers or urgency claims
- No watermarks, no gibberish, no broken Cyrillic
- All critical conversion elements must be fully visible in first fold

Output:
- One desktop 16:9 hero concept image
- High-res PNG
```

## Итерация по фидбэку: +2 варианта на базе Prompt 2 (Core B)

### Prompt 4 — Core B Alt 1 (Closer Hero, anchored floating form)

```text
Type: Website hero screen, desktop 16:9, first fold only
Canvas: 2560x1440 px, high-res PNG
Goal: evolve Core B with a more intimate cinematic scene and stronger readability of the conversion form

Reference Image 1:
- Use the uploaded D’Arky logo exactly as provided
- Keep logo unchanged (no redraw, no distortion, no recolor)

Art direction:
- Core branch, dark cinematic neon premium
- Keep the same visual family as Core B, but with calmer depth and cleaner text area
- Glow is controlled and appears only on accents

Composition:
- Left zone 44% width: headline stack + CTA + anchored floating mini-form
- Right zone 56% width: closer mid-shot bachata couple (waist-up to thigh framing)
- Form card visually overlaps toward center but remains fully in left zone for readability
- All important text/UI stays safely inside visible desktop fold

Background:
- Deep navy-to-charcoal gradient with subtle film grain
- Soft diagonal light from top-right, lower intensity than Core B
- Faint ECG line motif behind right side only, opacity 8-12%
- Accent palette: cyan #2EC5FF, violet #7A4DFF, magenta #FF3DBB

Subject:
- Realistic adult bachata couple (25-35), warm expressions, social dance mood
- Closer cinematic framing, no club chaos, no crowd
- Soft key light + thin colored rim, natural skin tones and realistic details
- Keep anatomy and hands physically accurate

Typography:
- Perfect Cyrillic rendering
- Modern sans hierarchy, bold heading and medium body
- No glow/shadow/outline on body text

Exact text (EXACT):
Top badge:
"D’Arky Dance • Новосибирск"

H1:
"Комфортный старт в парной бачате"

Subhead:
"Для тех, кто начинает с нуля"

Support bullets:
"Можно без пары"
"Пробное 800 ₽ / 400 ₽"
"Группа Пн/Ср 21:00"

Primary CTA:
"Записаться на пробное"

Mini-form heading:
"Оставьте контакты"

Fields:
"Имя"
"Телефон"
"Telegram (необязательно)"

Consent:
"Согласен(а) на обработку персональных данных"

Form submit:
"Записаться на пробное"

Microtrust:
"Свяжемся и подберём ближайшую дату"

Telegram fallback:
"Или сразу в Telegram: @darkystudio"

UI details:
- Anchored floating form card under CTA, dark glass style
- Radius: 22-24 px, subtle border, soft shadow
- Input fields: clean, high contrast, 48-52 px height
- Add two compact trust chips near CTA:
  "Без опыта"
  "Первый шаг без стресса"
- One thin neon divider between text stack and form card

Constraints:
- No aggressive sales wording
- No extra icons/noise
- No fake urgency labels
- Keep visual consistency with Core B family

Output:
- One final desktop hero mock image (16:9)
- High-res PNG
```

### Prompt 5 — Core B Alt 2 (Wider action scene, central overlap form)

```text
Type: Website hero screen, desktop 16:9, first fold only
Canvas: 2560x1440 px, high-res PNG
Goal: evolve Core B with a wider dynamic dance scene while preserving conversion-first UI

Reference Image 1:
- Use the uploaded D’Arky logo as exact brand asset
- Keep logo untouched (no redraw, no distortion, no recolor)

Art direction:
- Core branch, cinematic neon premium
- Same D’Arky core palette and mood as Prompt 2
- Slightly more dynamic composition, but UI remains clear and conversion-driven

Composition:
- Left zone 40% width: text + CTA
- Center overlap zone 24% width: compact floating mini-form card
- Right zone 36% width: full-body couple action scene with subtle motion energy
- Keep CTA and form immediately visible without scrolling

Background:
- Dark navy-charcoal gradient with subtle haze
- One soft neon halo arc behind dancers
- Very low-opacity heartbeat line integrated diagonally
- Accents only in cyan/violet/magenta with restrained bloom

Subject:
- One realistic adult bachata couple in full-body movement, elegant and approachable
- Social dance feeling, not stage-performance intensity
- Soft key light + contour rim, realistic textures and anatomy
- No crowd, no flashy club props

Typography:
- Perfect Cyrillic rendering
- Strong sans hierarchy, high contrast
- Body text flat white/light gray only, no glow or outline

Exact text (EXACT):
Top badge:
"D’Arky Dance • Новосибирск"

H1:
"Комфортный старт в парной бачате"

Subhead:
"Для тех, кто начинает с нуля"

Support bullets:
"Можно без пары"
"Пробное 800 ₽ / 400 ₽"
"Группа Пн/Ср 21:00"

Primary CTA:
"Записаться на пробное"

Mini-form heading:
"Оставьте контакты"

Fields:
"Имя"
"Телефон"
"Telegram (необязательно)"

Consent:
"Согласен(а) на обработку персональных данных"

Form submit:
"Записаться на пробное"

Microtrust:
"Свяжемся и подберём ближайшую дату"

Telegram fallback:
"Или сразу в Telegram: @darkystudio"

UI details:
- Compact floating form card in center-overlap zone
- Dark glass panel, radius 20-22 px, clean border and soft shadow
- Inputs 46-50 px height, high readability
- CTA button visually dominant but restrained
- Add support chips near bullets:
  "Без опыта"
  "Комфортный старт"

Constraints:
- No extra sections beyond first screen
- No random English text or watermark
- No cluttered decorative elements
- Preserve desktop-first spacing and strict grid alignment

Output:
- One finalized desktop hero concept image (16:9)
- High-res PNG
```

## Тест-кейсы и сценарии проверки результата
1. Контент-целостность: в кадре есть logo + H1 + 3 буллета + CTA + mini-form + consent.
2. Конверсия-first: CTA и форма читаются за 3–5 секунд без скролла.
3. Бренд-соответствие:
   - `Core A/B`: dark neon DNA, контролируемый glow.
   - `Experimental C`: спокойный editorial, без визуального шума.
4. Техническое качество: кириллица без артефактов, без случайного текста.
5. Кодо-пригодность: у макета читаемая сетка, явные контейнеры, воспроизводимые UI-блоки.

## Допущения и дефолты
1. На этой итерации делаем `single master frame` (без отдельного VK/Direct кадра).
2. Для людей используем AI-моделей; рефото можно подключить на следующем шаге.
3. Логотип берётся из `logo_512px.jpg` как `Reference Image 1`.
4. После генерации выбираем 1 вариант и от него делаем точную верстку hero в коде.
