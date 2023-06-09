import "@unocss/reset/tailwind.css";
import "uno.css";
import "element-plus/theme-chalk/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "@/styles/index.less";

import { createApp } from "vue";
import { setupRouterGuard } from "./router/guard";
import App from "./App.vue";

import { router, setupRouter } from "./router";
import { setupStore } from "./store";

(() => {
  const app = createApp(App);

  setupStore(app);

  setupRouter(app);

  setupRouterGuard(router);

  app.mount("#app");
})();
