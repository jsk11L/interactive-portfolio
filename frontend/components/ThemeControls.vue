<script setup lang="ts">
import {
  ArrowUpRight,
  Check,
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
const { universes, universeGroups, labels } = useUniverse();
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
    <div v-if="open" :id="panelId" class="universe-panel universe-library">
      <div class="universe-panel-heading">
        <p>{{ labels.allUniverses }}</p>
        <button
          type="button"
          class="icon-button"
          :aria-label="text.close"
          @click="
            open = false;
            trigger?.focus();
          "
        >
          <X :size="18" />
        </button>
      </div>
      <div class="universe-library-scroll">
        <section
          v-for="group in universeGroups"
          :key="group"
          class="universe-group"
        >
          <h2>{{ labels[group] }}</h2>
          <div class="universe-group-options">
            <button
              v-for="item in universes.filter((value) => value.group === group)"
              :key="item.id"
              type="button"
              class="universe-option"
              :aria-pressed="theme === item.id"
              :class="{ selected: theme === item.id }"
              @click="choose(item.id)"
            >
              <span
                class="universe-thumbnail"
                :style="{ '--swatch': item.color }"
                aria-hidden="true"
                >{{ item.symbol }}</span
              ><span
                ><strong>{{ item.name }}</strong
                ><small>{{ item.source }}</small></span
              ><Check v-if="theme === item.id" :size="14" aria-hidden="true" />
            </button>
          </div>
        </section>
      </div>
      <div class="universe-library-footer">
        <button
          type="button"
          class="shuffle-option"
          :aria-pressed="random"
          @click="shuffleTheme()"
        >
          <Shuffle :size="15" aria-hidden="true" /><span>{{ text.random }}</span
          ><small v-if="random">{{ text.randomOn }}</small></button
        ><button
          type="button"
          class="motion-option"
          :aria-pressed="paused"
          @click="toggleMotion()"
        >
          <Play v-if="paused" :size="14" aria-hidden="true" /><Pause
            v-else
            :size="14"
            aria-hidden="true"
          />{{ paused ? text.resume : text.pause }}
        </button>
      </div>
    </div>
  </div>
</template>
