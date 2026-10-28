<script setup lang="ts">
const { theme } = usePortfolioTheme();
const { text } = useStudioCopy();
useSeoMeta({
  title: "Javier Sepúlveda · Software, research & personal projects",
  description:
    "Computer science engineering student in Valparaíso, Chile. Explore my software projects, research, education and professional experience.",
});
</script>
<template>
  <div class="home-page">
    <DaydreamHero v-if="theme === 'daydream'" /><PhantomHero
      v-else-if="theme === 'phantom'"
    /><DearlyHero v-else-if="theme === 'dearly'" /><UniverseScene v-else />
    <div class="reading-world">
      <section id="summary" class="home-summary content-shell" aria-labelledby="summary-title">
        <h2 id="summary-title">{{ text.aboutLead }}</h2>
        <p>{{ text.description }}</p>
        <NuxtLink to="/cv" class="text-link">{{ text.readCv }}</NuxtLink>
      </section>
      <PortfolioSkills />
      <PortfolioComposition />
    </div>
  </div>
</template>
