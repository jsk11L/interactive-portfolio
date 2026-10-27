import type { RouterConfig } from "@nuxt/schema";

export default {
  // Theme hydration changes section positions; the layout restores anchors afterwards.
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) return false;
    return savedPosition || { left: 0, top: 0, behavior: "instant" };
  },
} satisfies RouterConfig;
