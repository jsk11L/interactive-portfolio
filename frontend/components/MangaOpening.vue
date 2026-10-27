<script setup lang="ts">
const { text } = useStudioCopy();
const { spanish } = useUniverse();
const { travel } = useJourney();
</script>
<template>
  <div class="manga-opening">
    <header class="manga-title-block">
      <p>{{ text.portfolio }} / {{ text.location }}</p>
      <h1>JAVIER<br />SEPÚLVEDA.</h1>
    </header>
    <div class="manga-portrait-panel">
      <img
        src="/images/artwork/javier-manga-v3.webp"
        alt="Javier Sepúlveda, illustrated in black ink"
        width="1122"
        height="1402"
        fetchpriority="high"
      />
      <p class="manga-speech">
        {{
          spanish
            ? "Estudiante de Ingeniería Civil Informática en la PUCV."
            : "Computer science engineering student at PUCV."
        }}
      </p>
    </div>
    <div class="manga-city-panel" aria-hidden="true">
      <svg viewBox="0 0 700 340" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern
            id="city-hatch"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M-2 2 2-2M0 8 8 0M6 10 10 6"
              stroke="currentColor"
              stroke-width=".6"
            />
          </pattern>
        </defs>
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M-30 290 350 330 750 235M-20 255 350 330 740 175M30 0 350 330 630 0M-20 210 350 330 720 110"
            opacity=".3"
          />
          <path
            d="M0 110 68 86 68 282 0 292ZM68 86 111 103 111 294M124 159 194 135 194 309 124 300ZM194 135 230 149 230 315M251 209 294 194 294 321 251 315ZM294 194 321 207 321 325M405 193 462 177 462 306 405 321ZM462 177 496 191 496 299M518 89 600 67 600 273 518 290ZM600 67 654 94 654 258M667 128 706 121 706 248 667 259"
            fill="var(--paper)"
            stroke-width="3"
          />
          <path
            d="M0 123 64 101M0 149 64 127M0 176 64 153M0 204 64 180M0 232 64 209M129 176 188 155M129 203 188 182M129 230 188 209M129 257 188 236M525 111 593 91M525 145 593 125M525 178 593 158M525 211 593 191M525 244 593 224M410 213 455 198M410 242 455 227M410 271 455 256"
            stroke-width="2"
          />
          <path
            d="M68 87 111 103 111 294 68 282ZM194 135 230 149 230 315 194 309ZM600 67 654 94 654 258 600 273Z"
            fill="url(#city-hatch)"
          />
          <path
            d="M160 59q30-25 56 0 16-28 45-9 22-12 39 6M358 83q29-33 54-4 25-18 44 7M-10 33 72 20M513 36 700 9"
            stroke-width="2"
          />
        </g>
      </svg>
      <span>VALPARAÍSO, CHILE</span><FriendMark class="manga-small-mark" />
    </div>
    <div class="manga-introduction-panel">
      <p>{{ text.description }}</p>
      <div>
        <button type="button" class="manga-enter" @click="travel('projects')">
          {{ text.projects }} ↗</button
        ><NuxtLink to="/cv">{{ text.readCv }}</NuxtLink>
      </div>
      <span class="manga-reference" aria-hidden="true">ともだち</span>
    </div>
  </div>
</template>
