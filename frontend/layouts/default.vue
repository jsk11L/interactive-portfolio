<script setup lang="ts">
import { ArrowUpRight } from "lucide-vue-next";
import type { Locale } from "~/composables/usePortfolioCopy";
import type { PortfolioTheme } from "~/composables/usePortfolioTheme";

const { theme, paused, initialize } = usePortfolioTheme();
const { locale, localeOptions, setLocale } = usePortfolioCopy();
const { text } = useStudioCopy();
const route = useRoute();
const { progress, active, pastIntro, travel } = useJourney();
let scrollFrame = 0;
function updateScroll() {
  const max = Math.max(
    1,
    document.documentElement.scrollHeight - window.innerHeight,
  );
  progress.value = Math.min(1, window.scrollY / max);
  pastIntro.value = window.scrollY > window.innerHeight * 0.7;
  const positions = ["intro", "projects", "about", "experience"]
    .map((id) => ({
      id,
      top: document.getElementById(id)?.getBoundingClientRect().top ?? Infinity,
    }))
    .filter((item) => item.top < window.innerHeight * 0.4)
    .sort((a, b) => b.top - a.top);
  active.value = positions[0]?.id || "intro";
}
function handleScroll() {
  if (scrollFrame) return;
  scrollFrame = requestAnimationFrame(() => {
    updateScroll();
    scrollFrame = 0;
  });
}
async function observeSections() {
  await nextTick();
  const anchor = route.hash.slice(1);
  if (
    route.path === "/" &&
    ["intro", "projects", "about", "experience", "contact"].includes(anchor)
  ) {
    document.getElementById(anchor)?.scrollIntoView({ behavior: "instant" });
  }
  updateScroll();
}
onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  observeSections();
});
watch(() => route.fullPath, observeSections);
watch(theme, observeSections);
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  cancelAnimationFrame(scrollFrame);
});
useHead({ htmlAttrs: { lang: () => locale.value } });
onNuxtReady(async () => {
  initialize();
  try {
    const stored = localStorage.getItem("portfolio-language");
    if (localeOptions.some((item) => item.code === stored))
      setLocale(stored as Locale);
  } catch {
    /* Preferences are optional. */
  }
  await observeSections();
});

// Query changes can arrive after the pre-rendered payload has hydrated.
watch(
  () => route.query.theme,
  (requested) => {
    if (
      typeof requested === "string" &&
      portfolioThemes.includes(requested as PortfolioTheme)
    ) {
      theme.value = requested as PortfolioTheme;
    }
  },
  { flush: "post" },
);
</script>

<template>
  <div
    class="portfolio"
    :class="{ 'immersive-home': route.path === '/', 'past-intro': pastIntro }"
    :data-theme="theme"
    :data-paused="paused"
    :style="{ '--journey': progress }"
  >
    <a class="skip-link" href="#main-content">{{ text.skip }}</a>
    <header class="masthead no-print">
      <NuxtLink to="/" class="wordmark" aria-label="Javier Sepúlveda — inicio"
        ><span class="wordmark-monogram">js.</span
        ><span>Javier<br />Sepúlveda</span></NuxtLink
      >
      <nav class="main-nav" :aria-label="text.select">
        <NuxtLink
          to="/#projects"
          :class="{ active: route.hash === '#projects' }"
          >{{ text.projects }}</NuxtLink
        >
        <NuxtLink to="/#about" :class="{ active: route.hash === '#about' }">{{
          text.about
        }}</NuxtLink>
        <NuxtLink to="/contact" :class="{ active: route.path === '/contact' }"
          >{{ text.contact }}<ArrowUpRight :size="12" aria-hidden="true"
        /></NuxtLink>
      </nav>
      <div class="masthead-tools">
        <ThemeControls />
      </div>
    </header>
    <div v-if="route.path === '/'" class="ambient-controls no-print">
      <ThemeControls />
    </div>
    <main id="main-content" tabindex="-1"><slot /></main>
    <LanguageControl /><JourneyRail /><PhantomTransition />
    <footer class="colophon no-print">
      <span>© {{ new Date().getFullYear() }} Javier Sepúlveda</span
      ><span
        >{{ text.footer }}
        <span class="footer-spark" aria-hidden="true">✳</span></span
      ><a
        href="https://github.com/jsk11L"
        target="_blank"
        rel="noopener noreferrer"
        >GitHub <ArrowUpRight :size="13" aria-hidden="true"
      /></a>
    </footer>
    <div class="sr-only" aria-live="polite">{{ theme }}</div>
  </div>
</template>
