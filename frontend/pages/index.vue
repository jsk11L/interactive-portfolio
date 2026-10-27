<script setup lang="ts">
import { ArrowUpRight } from "lucide-vue-next";
const { theme } = usePortfolioTheme();
const { text } = useStudioCopy();
const { universe, spanish } = useUniverse();
const { travel } = useJourney();
useSeoMeta({
  title: "Javier Sepúlveda — Diez universos, una historia",
  description:
    "Desarrollo de software, investigación y proyectos personales. Un portafolio para explorar desde diez universos de música, videojuegos, cine y manga.",
});
</script>
<template>
  <div class="home-page">
    <DaydreamHero v-if="theme === 'daydream'" /><PhantomHero
      v-else-if="theme === 'phantom'"
    /><DearlyHero v-else-if="theme === 'dearly'" /><UniverseScene v-else />
    <div class="content-shell">
      <section class="record-intro">
        <div>
          <span class="eyebrow">JAVIER SEPÚLVEDA / {{ text.portfolio }}</span>
          <h2>
            {{ text.intro }}<br /><em>{{ text.introEnd }}</em>
          </h2>
        </div>
        <div>
          <p>{{ text.description }}</p>
          <div class="record-intro-links">
            <NuxtLink to="/cv" class="text-link">{{ text.readCv }} ↗</NuxtLink
            ><button type="button" class="text-link" @click="travel('about')">
              {{ text.about }} ↘
            </button>
          </div>
        </div>
        <span class="record-edition"
          >{{ universe.name
          }}<small>{{
            spanish ? universe.subtitle : universe.subtitleEn
          }}</small></span
        >
      </section>
      <PortfolioProjects /><PortfolioBiography /><PortfolioExperience />
      <section id="contact" class="contact-outro">
        <span class="eyebrow">{{ text.contact }}</span>
        <div>
          <h2>{{ text.contactTitle }}</h2>
          <NuxtLink to="/contact" class="outro-link" :aria-label="text.contact"
            ><ArrowUpRight :size="54" aria-hidden="true"
          /></NuxtLink>
        </div>
        <p>{{ text.contactBody }}</p>
      </section>
    </div>
  </div>
</template>
