.PHONY: harness-check-fast harness-check-strict harness-check-claude harness-check-project-agents harness-sync-check harness-sync-write harness-hook-install harness-hook-uninstall

harness-check-fast:
	python3 scripts/harness_check.py --mode fast

harness-check-strict:
	python3 scripts/harness_check.py --mode strict

harness-check-claude:
	python3 scripts/harness_check.py --mode fast

harness-check-project-agents:
	python3 scripts/harness_check.py --mode fast

harness-sync-check:
	python3 scripts/harness_sync_agents.py --check

harness-sync-write:
	python3 scripts/harness_sync_agents.py --write

harness-hook-install:
	chmod +x .githooks/pre-commit
	git config core.hooksPath .githooks
	@echo "Installed optional hooks via core.hooksPath=.githooks"

harness-hook-uninstall:
	git config --unset core.hooksPath || true
	@echo "Unset core.hooksPath"
