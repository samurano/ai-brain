# fitness-online/landing

Лендинг запуска «Плоский живот» в 2-страничной архитектуре:
- `/` — вход в чат предзаписи
- `/pay` — оплата
- `/prechat-instruction` — инструкция после формы
- `/pay/success` — инструкция после успешной оплаты

Контур находится внутри репозитория `ai-brain` и проекта `fitness-online`.

Структура подпроекта:
- `site/` — статический фронтенд
- `workers/` — Cloudflare Worker API для интеграций (YooKassa, Google Sheets, Telegram)
- `docs/` — research/plan/checklists

## Текущий статус деплоя

В этом контуре деплой вынесен в отдельную follow-up задачу.
Текущий rollout покрывает структуру, process-layer и локальные инварианты.

## Что работает сразу (без backend)

По умолчанию фронтенд запускается в `mock`-режиме (`site/assets/js/config.js`):
- форма предзаписи валидируется и отправляется в mock API;
- создается `lead_id`;
- UTM сохраняются (first-touch + last-touch);
- на `/pay` работает таймер и ценовая лестница;
- оплата эмулируется и ведет на `/pay/success`.

## Переключение на реальный backend

Измените в `site/assets/js/config.js`:
- `apiMode: "production"`
- `apiBaseUrl: "https://<ваш-worker>.workers.dev"`

Также заполните:
- `prechatChatUrl`
- `privateChatUrl`

## Cloudflare Worker (этап интеграций)

См. `workers/README.md`.

Ключевые endpoint-ы:
- `POST /api/prechat-lead`
- `POST /api/payment/create`
- `POST /api/payment/webhook`
- `GET /api/pricing/current`

## Юридическая и запусковая проверка

Перед запуском трафика обязательно:
- завершить настройку чеков/54-ФЗ в YooKassa;
- проверить продавца в платежной логике: **самозанятый Семьянов Виталий Сергеевич**;
- убедиться, что на страницах есть `t.me/ira_deni` и `/privacy`.

## Тест-кейсы

См. `docs/testing-checklist.md`.
