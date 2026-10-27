<script setup lang="ts">
const { theme } = usePortfolioTheme();
useSeoMeta({
  title: "Javier Sepúlveda — Software, research & personal projects",
  description:
    "Computer science engineering student in Valparaíso, Chile. Explore my software projects, research, education and professional experience.",
});
</script>
<template>
  <div class="home-page">
    <DaydreamHero v-if="theme === 'daydream'" /><PhantomHero
      v-else-if="theme === 'phantom'"
    /><DearlyHero v-else-if="theme === 'dearly'" /><UniverseScene v-else />
    <PortfolioComposition />
  </div>
</template>
