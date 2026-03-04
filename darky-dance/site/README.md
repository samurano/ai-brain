# D'Arky Dance Site (2026 foundation)

Тех-основа сайта D'Arky на стеке:
- Astro-first
- React islands
- Tailwind v4 (`@theme` tokens)
- Storybook (community Astro framework)
- Git-content
- Cloudflare Pages + Workers baseline

## Структура
- `src/components/ui` — примитивы
- `src/components/sections` — BLK-01...BLK-10
- `src/content` — контент/копи-дек
- `src/lib` — UTM, analytics, schema, submit adapter
- `src/pages` — маршруты сайта
- `.storybook` — компонентный workbench
- `workers` — baseline endpoint под будущий боевой submit

## Запуск локально
```bash
npm install
npm run dev
```

## Storybook
```bash
npm run storybook
```

## Сценарий submit (этап 4)
- По умолчанию: `mock` режим (см. `public/config.js`).
- Успешный submit -> редирект на `/thanks`.
- Контракт формы включает: `name`, `phone`, `telegram?`, `consent_personal_data`, `utm_*`, `landing_variant`, `direction=pair`.

## Metrika-ready
События зашиты в analytics layer:
- `lp_view`
- `lp_hero_cta_click`
- `lp_form_start`
- `lp_form_submit`
- `lp_form_success`
- `lp_form_error`
- `lp_telegram_click`
- `lp_thanks_view`

Если `window.ym` или `metrikaCounterId` не заданы, события пишутся в `console.debug`.

## Deploy baseline
- Frontend: Cloudflare Pages (из каталога `darky-dance/site`).
- API: Cloudflare Worker (`darky-dance/site/workers`).

На этапе 4 прод-интеграции не включены.
