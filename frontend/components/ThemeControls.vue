<script setup lang="ts">
import {
  Pause,
  Play,
  Shuffle,
  Sparkles,
  X,
} from "lucide-vue-next";
import { useId } from "vue";
import type { PortfolioTheme } from "~/composables/usePortfolioTheme";
const { text } = useStudioCopy();
const { theme, random, paused, selectTheme, shuffleTheme, toggleMotion } =
  usePortfolioTheme();
const { universes, spanish } = useUniverse();
const open = ref(false);
const root = ref<HTMLElement>();
const trigger = ref<HTMLButtonElement>();
const panelId = `universe-${useId()}`;
function outside(event: MouseEvent) {
  if (event.target instanceof Node && !root.value?.contains(event.target))
    open.value = false;
}
function escape(event: KeyboardEvent) {
  if (event.key === "Escape" && open.value) {
    open.value = false;
    trigger.value?.focus();
  }
}
async function choose(value: PortfolioTheme) {
  await selectTheme(value);
  open.value = false;
  trigger.value?.focus();
}
onMounted(() => {
  document.addEventListener("click", outside);
  document.addEventListener("keydown", escape);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", outside);
  document.removeEventListener("keydown", escape);
});
</script>
<template>
  <div ref="root" class="theme-controls">
    <button
      ref="trigger"
      class="universe-trigger"
      type="button"
      :aria-expanded="open"
      :aria-controls="panelId"
      @click="open = !open"
    >
      <span class="theme-dots" aria-hidden="true"><i /><i /><i /></span
      ><span>{{ text.style }}</span
      ><Sparkles :size="14" aria-hidden="true" />
    </button>
    <div v-if="open" :id="panelId" class="universe-panel universe-palette">
      <div class="universe-swatches" role="group" :aria-label="text.style">
        <button v-for="(item, index) in universes" :key="item.id" type="button" class="universe-swatch"
          :style="{ '--swatch': item.color }" :aria-pressed="theme === item.id"
          :aria-label="`${spanish ? 'Descubrir universo' : 'Discover universe'} ${index + 1}`"
          @click="choose(item.id)" />
      </div>
      <div class="palette-tools">
        <button
          type="button"
          class="shuffle-option"
          :aria-pressed="random"
          @click="shuffleTheme()"
          :aria-label="text.random"
        >
          <Shuffle :size="18" aria-hidden="true" /></button
        ><button
          type="button"
          class="motion-option"
          :aria-pressed="paused"
          @click="toggleMotion()"
        >
          <Play v-if="paused" :size="14" aria-hidden="true" /><Pause
            v-else
            :size="18"
            aria-hidden="true"
          /><span class="sr-only">{{ paused ? text.resume : text.pause }}</span>
        </button>
        <button type="button" class="icon-button" :aria-label="text.close" @click="open = false; trigger?.focus()"><X :size="18" aria-hidden="true" /></button>
      </div>
    </div>
  </div>
</template>
