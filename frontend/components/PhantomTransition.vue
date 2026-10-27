<script setup lang="ts">
const { theme, paused } = usePortfolioTheme();
const { transition } = useJourney();
const visible = ref(false);
let timer: ReturnType<typeof setTimeout>;
watch(transition, () => {
  if (
    theme.value !== "phantom" ||
    paused.value ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
    return;
  visible.value = false;
  nextTick(() => {
    visible.value = true;
    clearTimeout(timer);
    timer = setTimeout(() => (visible.value = false), 850);
  });
});
onBeforeUnmount(() => clearTimeout(timer));
</script>
<template>
  <div v-if="visible" class="phantom-transition" aria-hidden="true">
    <div class="transition-star">★</div>
    <div class="transition-eye"><img src="/images/profile.webp" alt="" /></div>
    <span>SHOWTIME!</span>
  </div>
</template>
