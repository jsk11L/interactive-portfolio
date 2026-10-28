<script setup lang="ts">
import { ArrowRight } from "lucide-vue-next";
const { text } = useStudioCopy();
const { travel } = useJourney();
const { spanish } = useUniverse();
const { motionAllowed } = usePortfolioMotion();
const activeItem = ref(0);
const items = computed(() => [
  text.value.about,
  text.value.projects,
  text.value.cvTitle,
]);
function activate(index: number) {
  if (index === 2) navigateTo("/cv");
  else travel(index === 0 ? "about" : "projects");
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
    <SceneAtmosphere />
    <svg
      class="kh2-water-motion"
      viewBox="0 0 1600 500"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <filter id="kh-water">
          <feTurbulence
            type="fractalNoise"
            baseFrequency=".008 .045"
            numOctaves="2"
            seed="8"
          >
            <animate
              v-if="motionAllowed"
              attributeName="baseFrequency"
              dur="16s"
              values=".008 .045;.012 .055;.008 .045"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            scale="22"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
      <g filter="url(#kh-water)" fill="none" stroke="#fff" stroke-width="3">
        <path
          d="M-100 100Q350 30 800 110T1700 100M-100 190Q300 130 800 210T1700 180M-100 300Q350 220 850 290T1700 290M-100 420Q400 330 900 400T1700 420"
        />
      </g>
    </svg>
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
      <span class="kh2-above-title">{{ text.portfolio }}</span>
      <h1>JAVIER<br /><span>SEPÚLVEDA</span></h1>
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
            ? "Estudiante de quinto año. Valparaíso, Chile."
            : "Fifth-year student. Valparaíso, Chile."
        }}
      </p>
    </div>
    <SceneCaption />
  </section>
</template>
