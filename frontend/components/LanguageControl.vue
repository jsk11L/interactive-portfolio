<script setup lang="ts">
import { Languages, Check } from "lucide-vue-next";
const { locale, localeOptions, setLocale } = usePortfolioCopy();
const open = ref(false);
const root = ref<HTMLElement>();
const trigger = ref<HTMLButtonElement>();
function outside(event: MouseEvent) {
  if (event.target instanceof Node && !root.value?.contains(event.target))
    open.value = false;
}
function close(event: KeyboardEvent) {
  if (event.key === "Escape" && open.value) {
    open.value = false;
    trigger.value?.focus();
  }
}
onMounted(() => {
  document.addEventListener("click", outside);
  document.addEventListener("keydown", close);
});
onBeforeUnmount(() => {
  document.removeEventListener("click", outside);
  document.removeEventListener("keydown", close);
});
</script>
<template>
  <div ref="root" class="floating-language no-print">
    <div
      v-if="open"
      class="language-menu"
      role="group"
      aria-label="Language / Idioma"
    >
      <button
        v-for="option in localeOptions"
        :key="option.code"
        type="button"
        :aria-pressed="locale === option.code"
        @click="
          setLocale(option.code);
          open = false;
          trigger?.focus();
        "
      >
        <span>{{ option.name }}</span
        ><Check v-if="locale === option.code" :size="14" aria-hidden="true" />
      </button>
    </div>
    <button
      ref="trigger"
      type="button"
      class="language-trigger"
      :aria-expanded="open"
      aria-label="Change language / Cambiar idioma"
      @click="open = !open"
    >
      <Languages :size="16" aria-hidden="true" /><span>{{
        locale.toUpperCase()
      }}</span>
    </button>
  </div>
</template>
