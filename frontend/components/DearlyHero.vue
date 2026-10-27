<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
const { text } = useStudioCopy();
const { travel } = useJourney();
const { spanish } = useUniverse();
const activeItem = ref(0);
const items = computed(() => [
  spanish.value ? "Nueva historia" : "New story",
  text.value.projects,
  text.value.cvTitle,
]);
function activate(index: number) {
  if (index === 2) navigateTo("/cv");
  else travel("projects");
}
function menuKey(event: KeyboardEvent) {
  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();
    activeItem.value =
      (activeItem.value + (event.key === "ArrowDown" ? 1 : 2)) % 3;
  } else if (event.key === "Enter") {
    event.preventDefault();
    activate(activeItem.value);
  }
}
</script>
<template>
  <section id="intro" class="kh2-title-screen immersive-scene">
    <img
      class="kh2-title-art"
      src="/images/artwork/kh2-title.webp"
      alt="Viajero ilustrado junto al mar con un helado azul de sal marina"
      width="1536"
      height="1024"
      fetchpriority="high"
    />
    <div class="kh2-water-shimmer" aria-hidden="true" />
    <div class="kh2-menu-layout">
      <div class="kh2-crest" aria-hidden="true">
        <svg viewBox="0 0 150 130">
          <path
            d="M75 116C65 96 19 67 21 35 23 8 55 7 75 31 95 7 127 8 129 35 131 67 85 96 75 116Z"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
          />
          <path
            d="m43 10 11 15 21-24 21 24 11-15-7 28H50Z"
            fill="currentColor"
          /></svg
        ><span>II</span>
      </div>
      <span class="kh2-above-title">JAVIER SEPÚLVEDA</span>
      <h1>SECOND<br /><span>CHAPTER</span></h1>
      <p class="kh2-role">{{ text.degree }}</p>
      <nav class="kh2-main-menu" :aria-label="text.select" @keydown="menuKey">
        <button
          v-for="(item, index) in items"
          :key="item"
          type="button"
          :class="{ selected: activeItem === index }"
          @focus="activeItem = index"
          @mouseenter="activeItem = index"
          @click="activate(index)"
        >
          <span class="kh2-menu-crown" aria-hidden="true">♛</span>{{ item
          }}<ArrowRight :size="14" aria-hidden="true" />
        </button>
      </nav>
      <p class="kh2-memory">
        {{
          spanish
            ? "Elige una historia. Guarda un recuerdo."
            : "Choose a story. Keep a memory."
        }}
      </p>
    </div>
    <SceneCaption />
  </section>
</template>
