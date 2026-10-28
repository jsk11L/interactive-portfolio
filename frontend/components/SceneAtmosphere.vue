<script setup lang="ts">
const { theme } = usePortfolioTheme();
const { motionAllowed } = usePortfolioMotion();
</script>
<template>
  <div v-if="theme === 'dearly'" class="shore-splashes scene-atmosphere" aria-hidden="true">
    <span v-for="n in 8" :key="n" class="shore-splash" :style="{ '--i': n }"><i /><i /><i /><b /></span>
  </div>
  <template v-else-if="theme === 'bloodborne' || theme === 'edgerunner'">
    <img v-if="motionAllowed" class="scene-art scene-light-pass scene-atmosphere" :class="theme === 'bloodborne' ? 'gothic-light-pass' : 'neon-light-pass'"
      :src="`/images/artwork/${theme === 'bloodborne' ? 'bloodborne-night' : 'edgerunner-city'}.webp`" alt="" aria-hidden="true" width="1672" height="941" />
  </template>
  <div v-else-if="theme === 'ferment'" class="paint-impressions scene-atmosphere" aria-hidden="true">
    <svg viewBox="0 0 1000 650" preserveAspectRatio="xMidYMid slice">
      <g class="paint-bloom paint-blue"><path d="m690 83 18 14 29-11-4 24 33 4-23 23 19 22-37-3-7 28-22-19-29 14 5-30-25-15 29-17Z"/><circle cx="758" cy="81" r="4"/><circle cx="657" cy="150" r="6"/><circle cx="740" cy="184" r="3"/></g>
      <g class="paint-bloom paint-red"><path d="m882 370 21 18 32-3-12 22 22 23-36 2-15 31-17-25-32 4 15-29-12-24 28 4Z"/><circle cx="934" cy="366" r="5"/><circle cx="848" cy="457" r="3"/><circle cx="927" cy="463" r="7"/></g>
      <g class="paint-bloom paint-lilac"><path d="m525 480 26 10 19-12 5 30 29 16-31 8-13 29-17-23-30 7 9-29-18-18 25 1Z"/><circle cx="598" cy="477" r="4"/><circle cx="502" cy="551" r="5"/></g>
    </svg>
  </div>
</template>
