<script setup lang="ts">
import { ArrowUpRight } from "lucide-vue-next";
import type { Locale } from "~/composables/usePortfolioCopy";
import type { PortfolioTheme } from "~/composables/usePortfolioTheme";

const { theme, paused, initialize } = usePortfolioTheme();
const { locale, localeOptions, setLocale } = usePortfolioCopy();
const { text } = useStudioCopy();
const route = useRoute();
const { progress, active, pastIntro, travel } = useJourney();
let observer: IntersectionObserver | undefined;
let scrollFrame = 0;
function updateScroll() {
  const max = Math.max(
    1,
    document.documentElement.scrollHeight - window.innerHeight,
  );
  progress.value = Math.min(1, window.scrollY / max);
  pastIntro.value = window.scrollY > window.innerHeight * 0.7;
  let current = "intro";
  for (const id of ["intro", "projects", "about", "experience"]) {
    const element = document.getElementById(id);
    if (
      element &&
      element.getBoundingClientRect().top < window.innerHeight * 0.4
    )
      current = id;
  }
  active.value = current;
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
  observer?.disconnect();
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries)
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer?.unobserve(entry.target);
        }
    },
    { threshold: 0.08 },
  );
  for (const element of document.querySelectorAll(
    ".section-heading, .biography-heading, .biography-copy, .experience-entry, .toolkit-grid article",
  )) {
    element.classList.add("journey-reveal");
    observer.observe(element);
  }
  updateScroll();
}
onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  observeSections();
});
watch(() => route.path, observeSections);
watch(theme, observeSections);
onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  observer?.disconnect();
  cancelAnimationFrame(scrollFrame);
});
useHead({ htmlAttrs: { lang: () => locale.value } });
onNuxtReady(() => {
  initialize();
  try {
    const stored = localStorage.getItem("portfolio-locale");
    if (localeOptions.some((item) => item.code === stored))
      setLocale(stored as Locale);
  } catch {
    /* Preferences are optional. */
  }
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
        <label class="locale-control"
          ><span class="sr-only">Idioma / Language</span
          ><select
            aria-label="Idioma / Language"
            :value="locale"
            @change="
              setLocale(($event.target as HTMLSelectElement).value as Locale)
            "
          >
            <option
              v-for="option in localeOptions"
              :key="option.code"
              :value="option.code"
            >
              {{ option.label }}
            </option>
          </select></label
        >
        <ThemeControls />
      </div>
    </header>
    <div v-if="route.path === '/'" class="ambient-controls no-print">
      <ThemeControls />
    </div>
    <main id="main-content" tabindex="-1"><slot /></main>
    <JourneyRail /><PhantomTransition />
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
