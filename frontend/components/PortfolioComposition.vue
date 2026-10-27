<script setup lang="ts">
import PortfolioBiography from "./PortfolioBiography.vue";
import PortfolioProjects from "./PortfolioProjects.vue";
import PortfolioExperience from "./PortfolioExperience.vue";
import { compositions } from "~/data/compositions";
const { theme } = usePortfolioTheme();
const { text } = useStudioCopy();
const { travel } = useJourney();
const { spanish } = useUniverse();
const composition = computed(() => compositions[theme.value]);
const sections = {
  about: PortfolioBiography,
  projects: PortfolioProjects,
  experience: PortfolioExperience,
};
</script>
<template>
  <div
    class="portfolio-composition"
    :class="`composition-${theme}`"
    :data-layout="composition.layout"
  >
    <aside class="composition-index" :aria-label="text.select">
      <span class="composition-signature">Javier<br />Sepúlveda.</span>
      <p>{{ text.degree }}<br />{{ text.location }}</p>
      <nav>
        <button
          v-for="section in composition.order"
          :key="section"
          type="button"
          @click="travel(section)"
        >
          {{ text[section] }}
        </button>
        <NuxtLink to="/cv">{{ text.cvTitle }}</NuxtLink>
      </nav>
      <span class="index-note">{{
        spanish
          ? "Software, investigación y proyectos personales."
          : "Software, research and personal projects."
      }}</span>
    </aside>
    <section class="profile-intro">
      <p>{{ text.portfolio }}</p>
      <h2>
        {{
          spanish
            ? "Desarrollo software. Investigo. Construyo proyectos propios."
            : "I develop software. I research. I build personal projects."
        }}
      </h2>
      <p>{{ text.description }}</p>
      <NuxtLink to="/cv" class="text-link">{{ text.readCv }}</NuxtLink>
    </section>
    <component
      v-for="section in composition.order"
      :is="sections[section]"
      :key="`${theme}-${section}`"
    />
    <section id="contact" class="composition-contact">
      <p>{{ text.contact }}</p>
      <h2>{{ spanish ? "Conversemos." : "Let’s talk." }}</h2>
      <p>{{ text.contactBody }}</p>
      <NuxtLink to="/contact" class="text-link">{{ text.email }}</NuxtLink>
    </section>
  </div>
</template>
