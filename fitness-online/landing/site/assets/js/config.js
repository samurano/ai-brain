window.LANDING_CONFIG = Object.freeze({
  // Для теста на GitHub Pages оставьте mock.
  // Для реальной интеграции: apiMode = "production" и apiBaseUrl = URL worker.
  apiMode: "mock",
  apiBaseUrl: "",

  // Ссылки нужно заменить перед запуском трафика.
  prechatChatUrl: "https://t.me/CHANGE_ME_PRECHAT_CHAT",
  privateChatUrl: "https://t.me/CHANGE_ME_PRIVATE_CHAT",
  supportContactUrl: "https://t.me/ira_deni",

  // Режим demo-оплаты в mock API
  yookassaMockDelayMs: 450,
});
