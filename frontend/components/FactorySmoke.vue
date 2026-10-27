<template>
  <svg
    class="factory-smoke-layer"
    viewBox="0 0 1672 941"
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
  >
    <defs>
      <filter id="smoke-softness"><feGaussianBlur stdDeviation="7" /></filter>
      <linearGradient id="smoke-shade" x2=".4" y2="1">
        <stop stop-color="#c3b7a4" stop-opacity="0" />
        <stop offset=".7" stop-color="#b5a895" stop-opacity=".34" />
        <stop offset="1" stop-color="#867d71" stop-opacity=".5" />
      </linearGradient>
    </defs>
    <g filter="url(#smoke-softness)" fill="url(#smoke-shade)">
      <g
        v-for="(stack, index) in [
          { x: 794, y: 230 },
          { x: 994, y: 130 },
          { x: 1254, y: 200 },
          { x: 1438, y: 240 },
        ]"
        :key="index"
        :style="{ '--plume-delay': `${-index * 3}s` }"
        :transform="`translate(${stack.x} ${stack.y})`"
      >
        <path
          class="industrial-plume"
          d="M-13 0C-38-36 24-60-9-95-48-139-108-150-83-205-62-252-143-268-130-320L-42-330C-65-271 27-245-8-192-40-146 42-124 16-80-5-46 28-22 13 0Z"
        />
        <path
          class="industrial-plume plume-second"
          d="M-11 0C-29-38 37-69 9-105-33-149-72-170-48-217-27-263-106-284-83-329L-19-340C-50-273 55-248 17-193-12-153 55-112 22-73 0-43 24-21 11 0Z"
        />
      </g>
    </g>
  </svg>
</template>
