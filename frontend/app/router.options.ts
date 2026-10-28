import type { RouterConfig } from "@nuxt/schema";

export default {
  // Theme hydration changes section positions; the layout restores anchors afterwards.
  scrollBehavior(to, from, savedPosition) {
    if (to.path === from.path && to.hash === from.hash) return false;
    if (to.hash) return false;
    return savedPosition || { left: 0, top: 0, behavior: "instant" };
  },
} satisfies RouterConfig;
