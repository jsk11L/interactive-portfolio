<script setup lang="ts">
import { ArrowDownRight, ArrowUpRight } from "lucide-vue-next";
const { text } = useStudioCopy();
const { travel } = useJourney();
</script>
<template>
  <section id="intro" class="phantom-hero immersive-scene">
    <div class="p5-halftone" aria-hidden="true" />
    <div class="phantom-star p5-star-one" aria-hidden="true">★</div>
    <div class="p5-star-two" aria-hidden="true">✦</div>
    <div class="phantom-copy">
      <span class="phantom-kicker"
        >{{ text.degree }} / {{ text.location }}</span
      >
      <h1>JAVIER<br /><span>SEPÚLVEDA.</span></h1>
      <p>{{ text.description }}</p>
      <div class="hero-actions">
        <button type="button" class="button-solid" @click="travel('projects')">
          {{ text.explore
          }}<ArrowDownRight :size="20" aria-hidden="true" /></button
        ><NuxtLink to="/cv" class="text-link"
          >{{ text.readCv }}<ArrowUpRight :size="16" aria-hidden="true"
        /></NuxtLink>
      </div>
    </div>
    <div class="phantom-portrait">
      <img
        src="/images/profile.webp"
        alt="Javier Sepúlveda"
        width="900"
        height="1000"
      /><svg class="phantom-mask" viewBox="0 0 300 110" aria-hidden="true">
        <path
          d="M5 6 75 28 145 43 155 43 225 28 295 6 270 81 220 103 164 72 150 97 136 72 80 103 30 81Z"
          fill="#f4f1e9"
          stroke="#151515"
          stroke-width="5"
        />
        <path
          d="m42 48 75 14-33 20-36-14zm216 0-75 14 33 20 36-14z"
          fill="#171717"
        /></svg
      ><span class="portrait-sticker"
        >{{ text.skills }}<br />& {{ text.research }}</span
      >
    </div>
    <div class="p5-calling-card" aria-hidden="true">
      <span>予告状</span><strong>TAKE YOUR<br />HEART.</strong
      ><i>JAVIER / 001</i>
    </div>
    <div class="phantom-ticker" aria-hidden="true">
      <span
        >JAVIER SEPÚLVEDA / SOFTWARE / RESEARCH / PERSONAL PROJECTS / JAVIER
        SEPÚLVEDA / SOFTWARE / RESEARCH / PERSONAL PROJECTS /</span
      >
    </div>
    <SceneCaption />
  </section>
</template>
