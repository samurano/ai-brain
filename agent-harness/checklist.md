# AGENTS Harness — Checklist

## На каждую задачу
- [ ] Определён проект (или явно зафиксировано, что задача глобальная).
- [ ] Прочитаны обязательные контекстные файлы (`brief.md`, `decisions.md`, `log.md`) для проектной задачи.
- [ ] В `research.md` добавлена новая секция с `Task ID`.
- [ ] В `plan.md` добавлена новая секция с `Task ID` и TODO.
- [ ] До `GO` выполнялись только non-mutating действия.
- [ ] После `GO` выполнены шаги только из плана.
- [ ] TODO в `plan.md` обновлены до `[x]`.
- [ ] В `log.md` добавлена запись с `Task ID`.

## Перед завершением работы
- [ ] `python3 scripts/harness_check.py --mode fast`
- [ ] `python3 scripts/harness_check.py --mode strict`
- [ ] `python3 scripts/harness_sync_agents.py --check`

## Ежемесячный мини-аудит (10–20 минут)
- [ ] Проверить актуальность корневого `AGENTS.md`.
- [ ] Проверить актуальность локальных `AGENTS.md`.
- [ ] Прогнать fast/strict проверки.
- [ ] Проверить синхронизацию производных AGENTS.
- [ ] Зафиксировать результат в `agent-harness/changelog.md`.
