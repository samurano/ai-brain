# Agent Checklist — fitness-online/landing

## Pre-flight (перед началом)
- [ ] Прочитать `fitness-online/brief.md` и `fitness-online/decisions.md`.
- [ ] Прочитать `fitness-online/landing/README.md` и `fitness-online/landing/log.md`.
- [ ] Прочитать актуальные секции в `fitness-online/landing/docs/research.md` и `fitness-online/landing/docs/plan.md`.
- [ ] Зафиксировать `Task ID`.
- [ ] Подтвердить scope: какие файлы можно менять, какие нельзя.

## До GO
- [ ] Выполнять только non-mutating действия.
- [ ] Добавить секцию с `Task ID` в `fitness-online/landing/docs/research.md`.
- [ ] Добавить секцию с `Task ID` в `fitness-online/landing/docs/plan.md`.
- [ ] Остановиться до команды `GO`.

## После GO
- [ ] Выполнять изменения строго по `fitness-online/landing/docs/plan.md`.
- [ ] Не ломать ключевые селекторы/ID страницы.
- [ ] Сохранить UTM/lead/payment flow без регрессий.
- [ ] Не менять pricing logic по МСК на `/pay` без отдельной задачи.
- [ ] Не менять backend contracts без отдельной задачи.

## Before done (проверка результата)
- [ ] Форма предзаписи работает по сценарию.
- [ ] UTM и `lead_id` не теряются.
- [ ] Sticky CTA и ключевые CTA кликабельны.
- [ ] Таймер и цена на `/pay` работают корректно.
- [ ] Интеграционные инварианты сверены с `fitness-online/landing/docs/integration-checklist.md`.
- [ ] В `fitness-online/landing/log.md` добавлена запись с `Task ID` + `Что проверить`.
