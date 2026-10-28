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
      Javier Sepúlveda · {{ text.intro }} {{ text.introEnd }}
    </h1>
    <div class="daydream-negative-space" aria-hidden="true" />
    <div class="cover-candle" aria-hidden="true">
      <img
        src="/images/artwork/daydream-candle.webp"
        alt=""
        width="1254"
        height="1254"
        fetchpriority="high"
      /><span class="candle-glow" />
      <img
        class="candle-real-flame"
        src="/images/artwork/candle-flame-v3.png"
        alt=""
        width="171"
        height="256"
      />
      <svg
        class="candle-real-smoke"
        viewBox="0 0 160 520"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <filter id="candle-smoke-soft">
            <feGaussianBlur stdDeviation="3" />
          </filter>
          <linearGradient id="candle-smoke-fade" x2="0" y2="1">
            <stop stop-color="#d9d4c3" stop-opacity="0" />
            <stop offset=".65" stop-color="#d9d4c3" stop-opacity=".18" />
            <stop offset="1" stop-color="#d9d4c3" stop-opacity=".05" />
          </linearGradient>
        </defs>
        <g
          fill="none"
          stroke="url(#candle-smoke-fade)"
          filter="url(#candle-smoke-soft)"
        >
          <path
            d="M80 520C40 445 126 425 83 350S18 243 73 183 36 80 14 0"
            stroke-width="6"
          />
          <path
            d="M80 520C113 438 47 429 78 354S147 242 99 179 121 70 142 0"
            stroke-width="4"
          />
        </g>
      </svg>
    </div>
    <div class="analog-grain" aria-hidden="true" />
    <SceneCaption />
  </section>
</template>
