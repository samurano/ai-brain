# Cloudflare Worker API

API для лендинга `fitness-online/landing`.

## Endpoint-ы
- `POST /api/prechat-lead`
- `POST /api/payment/create`
- `POST /api/payment/webhook`
- `GET /api/pricing/current`

## Что делает worker
- Валидирует лиды и сохраняет их в Google Sheets.
- Отправляет Telegram-уведомления по новым лидам.
- Считает цену по МСК на сервере.
- Создает платеж в YooKassa server-side.
- Принимает webhook YooKassa и обновляет статусы.

## Deploy

1. Установите Wrangler локально (на вашей машине):
   - `npm i -g wrangler`
2. Логин:
   - `wrangler login`
3. В папке `workers/` задайте secrets:
   - `wrangler secret put YOOKASSA_SHOP_ID`
   - `wrangler secret put YOOKASSA_SECRET`
   - `wrangler secret put GOOGLE_SERVICE_ACCOUNT`
   - `wrangler secret put SHEET_ID`
   - `wrangler secret put TG_BOT_TOKEN`
   - `wrangler secret put TG_CHAT_ID`
4. Задайте vars в `wrangler.toml`:
   - `SITE_BASE_URL`
5. Deploy:
   - `wrangler deploy`

## Формат `GOOGLE_SERVICE_ACCOUNT`

Секрет должен содержать JSON сервисного аккаунта Google целиком, например:

```json
{
  "type": "service_account",
  "project_id": "...",
  "private_key_id": "...",
  "private_key": "-----BEGIN PRIVATE KEY-----\\n...\\n-----END PRIVATE KEY-----\\n",
  "client_email": "...",
  "token_uri": "https://oauth2.googleapis.com/token"
}
```

## Листы в Google Sheets
- `leads`
- `payments`
- `event_log`

## Важно
- Перед запуском рекламы закройте чеки/54-ФЗ в YooKassa.
- Вебхук YooKassa направьте на: `https://<worker-domain>/api/payment/webhook`.
