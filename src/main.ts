import "@fontsource-variable/mulish/wght.css";
import "./assets/main.css";

import { ViteSSG } from "vite-ssg";
import App from "./App.vue";
import { navigationGuard, navigationHookAfter, routes } from "./router";

export const createApp = ViteSSG(App, { routes }, ({ router }) => {
  if (!import.meta.env.SSR) {
    router.beforeEach(navigationGuard);
    router.afterEach(navigationHookAfter);
  }
});
