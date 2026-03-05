# Интеграционный чеклист (Cloudflare Worker)

## Env/Secrets
- [ ] `YOOKASSA_SHOP_ID`
- [ ] `YOOKASSA_SECRET`
- [ ] `SHEET_ID`
- [ ] `GOOGLE_SERVICE_ACCOUNT` (JSON service account)
- [ ] `TG_BOT_TOKEN`
- [ ] `TG_CHAT_ID`
- [ ] `SITE_BASE_URL`

## Функциональные проверки
- [ ] `POST /api/prechat-lead` пишет строку в `leads` и шлет Telegram-уведомление.
- [ ] `GET /api/pricing/current` возвращает корректную цену по МСК.
- [ ] `POST /api/payment/create` создает платеж в YooKassa по серверной цене.
- [ ] `POST /api/payment/webhook` обновляет статус в `payments`.
- [ ] Повторный webhook не создает дублей событий `payment_success`.

## Перед запуском трафика
- [ ] Закрыт контур чеков/54-ФЗ в YooKassa.
- [ ] Проверен seller block: самозанятый Семьянов Виталий Сергеевич.
- [ ] Финальные Telegram-ссылки подставлены в фронт.
