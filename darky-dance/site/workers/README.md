# D'Arky Dance Workers (baseline)

Базовый Cloudflare Worker для будущего боевого submit формы.

## Endpoint-ы
- `GET /health` — healthcheck
- `POST /api/lead` — приём лида по контракту лендинга

## Текущий статус
- На этапе 4 Worker работает как stub.
- В прод submit пока не подключён: лендинг использует `submitMode = "mock"`.

## Следующий шаг
1. Добавить валидацию payload (zod/valibot).
2. Подключить CRM/Telegram/Google Sheets по утверждённой интеграционной схеме.
3. Переключить `public/config.js` на `submitMode = "api"` и указать `submitEndpoint`.
