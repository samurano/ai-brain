# D'Arky Dance / SMM — Visual Style DNA v1

## Назначение и как использовать
Этот документ фиксирует ДНК визуального стиля D'Arky для генерации новых image-промтов без копирования одних и тех же решений.

Порядок применения перед генерацией:
1. Выбрать ветку стиля: `core` (по умолчанию) или `experimental`.
2. Определить `output_class` и `layout_pattern` под задачу.
3. Зафиксировать `rotation_tags` и проверить анти-повторы по последним публикациям.
4. Собрать промт через `Prompt Constructor (EN template)`.
5. Прогнать `Quality Checklist` перед выдачей 3 вариантов.

## Источник анализа
База анализа: карточки `NBP-001`…`NBP-016` из `image-prompts-reference.md`.

Core-ориентир:
- `NBP-001`, `NBP-002` — расписания/табличные постеры
- `NBP-003`, `NBP-004`, `NBP-005` — минималистичные промо
- `NBP-006`, `NBP-009`, `NBP-010` — split-layout афиши с героями
- `NBP-007`, `NBP-008`, `NBP-012`, `NBP-014` — печатные/QR-постеры
- `NBP-011` — UI-элемент
- `NBP-013` — photo-edit/relight pipeline

Experimental-ориентир:
- `NBP-015`, `NBP-016` — альтернативные A/B решения

## Core DNA (инварианты)
- Визуальная база: тёмный low-key фон (charcoal/near-black), высокая читаемость, аккуратная глубина.
- Фирменная акцентная палитра: `#2EC5FF -> #7A4DFF -> #FF3DBB`.
- Эффекты: controlled glow/bloom только на акцентах (рамки, border, divider, grid, chip/pill outlines).
- Типографика: чистая кириллица, modern sans (Inter/Manrope/Montserrat), строгая иерархия заголовок/тело.
- Текстовый рендер: body-текст плоский (`flat white`), без `drop shadow`, `outline/stroke`, `glow`.
- Композиция: чёткая сетка, безопасные поля, воздух, без перегруза.
- Фирменный мотив: ECG/heartbeat — опциональный, низкой плотности, не конкурирует с главным сообщением.
- Фото-персонажи: identity/anatomy lock, естественная текстура кожи/ткани, реалистичная интеграция света.

## Experimental DNA (ограниченная ветка)
`experimental` — управляемое отклонение от core для A/B и обновления визуального языка.

Допустимые отклонения:
- Quiet luxury / editorial без неона.
- Бумажные/тёплые фоны, более мягкая арт-дирекция.
- Центровочные композиции вместо split-layout.

Границы experimental:
- Читаемость и иерархия текста обязательны.
- Сетка и безопасные поля обязательны.
- Минимализм и отсутствие визуального шума обязательны.
- Идентичность людей и реалистичность фото-части обязательны.

Когда включать `experimental`:
- Только при явной A/B задаче.
- Или при прямом запросе пользователя на альтернативную стилистику.
- Во всех остальных случаях дефолт: `core`.

## Hard Rules (обязательные)
1. По умолчанию использовать `style_branch = core`.
2. Для всех веток сохранять high-contrast читаемость на мобильном экране.
3. Если выбран core: акцентный градиент только `#2EC5FF -> #7A4DFF -> #FF3DBB`.
4. В core body-текст всегда без glow/outline/shadow.
5. Glow/bloom применять только к акцентным элементам, не к основному текстовому массиву.
6. Не перегружать сцену эффектами, шумом, лишними декоративными объектами.
7. Любой provided logo/reference сохранять без искажений и перерисовки.
8. Для photo-based задач сохранять identity, анатомию, позу и ключевые детали исходника.
9. Для QR-задач не нарушать геометрию, quiet zone и сканируемость.
10. Точные тексты и обязательные строки не менять, если в задаче помечены как EXACT.
11. При карточной/табличной верстке держать единые пропорции и ритм отступов.
12. Перед финальной выдачей обязательно пройти `Quality Checklist`.

## Flex Matrix (переменные для креатива)
| Поле | Что можно менять | Допустимые значения | Границы |
|---|---|---|---|
| `layout_pattern` | Композиционный паттерн | `split-left-hero-right-type`, `center-hero-bottom-panel`, `grid-cards`, `single-focus-minimal`, `print-right-stack`, `ui-centered` | Не ломать иерархию и безопасные поля |
| `density` | Плотность контента | `airy`, `balanced`, `compact` | В `compact` не жертвовать читаемостью |
| `accent_intensity` | Интенсивность акцентов | `low`, `medium`, `high` | `high` только для 1-2 ключевых элементов |
| `motif_type` | Фирменный мотив | `none`, `ecg-line`, `halo-ring`, `outline-typography` | Мотив не должен спорить с headline |
| `photo_grade` | Характер цветокоррекции фото | `cool-clean`, `warm-cinematic`, `neutral-contrast`, `editorial-soft` | Без неестественной кожи и клиппинга |
| `headline_style` | Стиль заголовка | `flat-white`, `neon-gradient`, `ink-dark` | `ink-dark` только для experimental |
| `card_system` | Тип контейнеров/плашек | `glass`, `flat`, `none` | Для core предпочтительно `glass`/`flat-dark` |
| `icon_policy` | Иконографика | `none`, `minimal-line`, `emoji-limited` | Для print-плакатов предпочтительно `minimal-line` |

## Анти-повторы: протокол ротации
Правила ротации для последних 4 опубликованных визуалов:
1. Не повторять одинаковый `layout_pattern` в двух соседних публикациях.
2. Не использовать один `accent_system` более 2 раз подряд.
3. В окне последних 4 публикаций должны быть минимум 2 разных `motif_type`.
4. Для серии из 3+ материалов обязательно:
- минимум 1 вариация по композиции (`layout_pattern`)
- минимум 1 вариация по плотности (`density`)

Мини-лог ротации (рекомендуемый формат):
```text
YYYY-MM-DD | post_id | style_branch | layout_pattern | accent_system | motif_type | density
```

## Prompt Constructor (EN template)

### VisualStyleSpec v1 (internal contract)
```yaml
VisualStyleSpec_v1:
  style_branch: core | experimental
  output_class: social_square | print_landscape | print_a5 | ui_asset | photo_edit
  layout_pattern: <one of approved patterns>
  accent_system: neon_gradient | ecg_accent | glass_panels | no_neon_editorial
  text_policy:
    cyrillic_quality: strict
    body_effects: flat_only
    exact_text_mode: optional
  subject_policy:
    identity_lock: required_if_photo_input
    anatomy_lock: required_if_photo_input
  constraints_block:
    - <hard constraints list>
  rotation_tags:
    - <layout tag>
    - <accent tag>
    - <motif tag>
    - <density tag>
```

### EN prompt skeleton
```text
Create a <output_class> visual for D'Arky Dance Studio.
Style branch: <style_branch>.

Visual DNA requirements:
- Base mood: <core dark premium OR experimental editorial>
- Layout pattern: <layout_pattern>
- Accent system: <accent_system>
- Density: <density>
- Motif: <motif_type>

Typography policy:
- Perfect Cyrillic rendering
- High readability on mobile
- Body text flat only (no glow/outline/shadow) unless explicitly allowed by branch rules
- Preserve exact text where provided

Subject policy:
- Preserve identity/anatomy/pose if source photo is provided

Hard constraints:
<constraints_block>

Technical output:
- Size: <canvas>
- DPI: <dpi if print>
- Safe margins: <safe margins>
- Output: high-res PNG
```

## Quality Checklist перед выдачей
- [ ] Выбрана ветка `core/experimental`, и выбор обоснован задачей.
- [ ] Сохранена читаемость headline/body на мобильном масштабе.
- [ ] Не нарушены hard rules по эффектам текста.
- [ ] Выдержана бренд-палитра (для core) или корректный experimental-режим.
- [ ] Проверены identity/anatomy lock (если есть фото-референс).
- [ ] Проверены exact-строки и ограничения (если заданы в задаче).
- [ ] Проверены QR-ограничения (если есть QR).
- [ ] Прогнан протокол ротации по `rotation_tags`.
- [ ] Три финальных варианта различаются по допустимым переменным из Flex Matrix.

## Примеры применения по типам задач
- `social_square`:
  - Core: split/layout или card-grid, тёмная база, neon gradient accents.
  - Experimental: editorial quiet luxury, меньше эффектов, акцент на типографике.
- `print_landscape`:
  - Крупная иерархия, дистанционная читаемость 1-2 метра, QR/CTA с безопасными зонами.
- `print_a5`:
  - Контрастная типографика + строгая сканируемость QR, без декоративного шума в зоне кода.
- `ui_asset`:
  - Пиксель-перфект, прозрачный фон при необходимости, минимум декоративных слоёв.
- `photo_edit`:
  - Фотореализм, физически правдоподобный свет, корректные контактные тени, без cutout-эффекта.
