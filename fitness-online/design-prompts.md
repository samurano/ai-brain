# Промпты дизайна — актуальная версия

## Цель
Генерация hero-блока для страницы предзаписи `умныйживот.рф` в выбранном стиле `Light Ice Blue Guided`.

## Фиксированный текст
- Бейдж: `Первые 2 дня бесплатно: день 0 + полный день 1`
- Заголовок: `Плоский живот за 10 дней без диет и часовых тренировок`
- Подзаголовок: `Короткие тренировки по 15-20 минут для женщин с сидячей работой. Включаем глубокие мышцы, уменьшаем отечность и возвращаем ощущение легкости.`
- CTA: `Попробовать бесплатно`

## Master Prompt (основной)
```text
Create a conversion-first landing hero for a Russian fitness program, premium light ice-blue aesthetic, airy wellness mood, soft glass cards, high readability.
Layout: strict split, left text stack and CTA, right portrait + compact trust module.
No top navigation, no second CTA.

Use exact Russian text:
Badge: "Первые 2 дня бесплатно: день 0 + полный день 1"
Headline: "Плоский живот за 10 дней без диет и часовых тренировок"
Subheadline: "Короткие тренировки по 15-20 минут для женщин с сидячей работой. Включаем глубокие мышцы, уменьшаем отечность и возвращаем ощущение легкости."
CTA: "Попробовать бесплатно"
Trust line: "Ирина Денисова, тренер с опытом с 2011 года"

Right-side cards:
"День 0 + день 1 бесплатно"
"15-20 минут в день"
"Безопасный старт"

Negative constraints:
no timer, no prices, no second CTA, no fake counters, no unreadable text, no hard gym aesthetics.
```

Midjourney suffix:
`--ar 16:10 --v 6.1 --style raw --s 80`

## Мобильный prompt
```text
Generate a mobile-first hero (390x844 style) with the same Russian text, one full-width CTA above the fold, compact portrait card, high contrast readability, no menu, no timer, no prices.
```

Midjourney suffix:
`--ar 9:16 --v 6.1 --style raw --s 90`
