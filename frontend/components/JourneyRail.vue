<script setup lang="ts">
import { compositions } from "~/data/compositions";
const { text } = useStudioCopy();
const { active, progress, pastIntro, travel } = useJourney();
const route = useRoute();
const { theme } = usePortfolioTheme();
const sections = computed(
  () => ["intro", "skills", ...compositions[theme.value].order] as const,
);
</script>
<template>
  <nav
    v-if="route.path === '/'"
    class="journey-rail no-print"
    :class="{ 'is-visible': pastIntro }"
    :aria-label="text.select"
  >
    <span class="journey-line" aria-hidden="true"
      ><i :style="{ transform: `scaleY(${progress})` }"
    /></span>
    <button
      v-for="(id, index) in sections"
      :key="id"
      type="button"
      :aria-current="active === id ? 'location' : undefined"
      :aria-label="id === 'intro' ? text.portfolio : id === 'skills' ? text.skillsNav : text[id]"
      :class="{ selected: active === id }"
      @click="travel(id)"
    >
      <span class="rail-number">0{{ index + 1 }}</span
      ><span class="rail-label">{{
        id === "intro" ? text.portfolio : id === 'skills' ? text.skillsNav : text[id]
      }}</span>
    </button>
    <NuxtLink to="/contact" class="rail-contact" :aria-label="text.contact"
      >↗</NuxtLink
    >
  </nav>
</template>
