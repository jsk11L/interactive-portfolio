<script setup lang="ts">
const { text } = useStudioCopy();
</script>
<template>
  <section
    id="intro"
    class="daydream-cover immersive-scene"
    aria-label="Daydream Nation"
  >
    <h1 class="sr-only">
      Javier Sepúlveda — {{ text.intro }} {{ text.introEnd }}
    </h1>
    <div class="daydream-negative-space" aria-hidden="true" />
    <div class="cover-candle" aria-hidden="true">
      <img
        src="/images/artwork/daydream-candle.webp"
        alt=""
        width="1254"
        height="1254"
        fetchpriority="high"
      /><span class="candle-glow" /><span class="candle-flame" />
      <div class="candle-smoke"><i /><i /><i /><i /></div>
    </div>
    <div class="analog-grain" aria-hidden="true" />
    <SceneCaption />
  </section>
</template>
