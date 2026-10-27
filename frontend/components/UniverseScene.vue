<script setup lang="ts">
import { ArrowDownRight, ArrowUpRight } from "lucide-vue-next";
const { universe, spanish } = useUniverse();
const { theme } = usePortfolioTheme();
const { text } = useStudioCopy();
const { travel, progress } = useJourney();
const store = useCvStore();
const title = computed(() =>
  spanish.value ? universe.value.titleEs : universe.value.title,
);
const art = computed(
  () =>
    (
      ({
        bloodborne: "bloodborne-night",
        animals: "animals-factory",
        ferment: "ferment-portrait",
        redroom: "redroom-curtains",
        edgerunner: "edgerunner-city",
      }) as Record<string, string>
    )[theme.value],
);
</script>

<template>
  <section
    id="intro"
    class="universe-scene immersive-scene"
    :class="`scene-${theme}`"
  >
    <img
      v-if="art"
      class="scene-art"
      :src="`/images/artwork/${art}.webp`"
      alt=""
      width="1536"
      height="1024"
      fetchpriority="high"
    />
    <div v-if="theme === 'bloodborne'" class="hunter-scene">
      <div class="hunter-rune" aria-hidden="true">†</div>
      <span class="scene-eyebrow"
        >JAVIER SEPÚLVEDA / THE HUNTER'S WORKSHOP</span
      >
      <h1>{{ title }}</h1>
      <p>
        {{
          spanish
            ? "El conocimiento es la única luz que no se apaga."
            : "Knowledge is the one light that never fades."
        }}
      </p>
      <button type="button" class="hunter-enter" @click="travel('projects')">
        <span aria-hidden="true">✥</span>{{ spanish ? "Despertar" : "Awaken"
        }}<span aria-hidden="true">✥</span></button
      ><span class="hunter-insight"
        >◉ {{ String(store.projects.length).padStart(2, "0") }} /
        {{ text.projects }}</span
      >
      <div class="hunter-fog" aria-hidden="true" />
      <div class="hunter-lantern-glow" aria-hidden="true" />
    </div>
    <div v-else-if="theme === 'animals'" class="animals-scene">
      <span class="scene-eyebrow">JAVIER SEPÚLVEDA / ANIMALS / SIDE A</span>
      <h1>{{ title }}</h1>
      <div class="factory-smoke" aria-hidden="true">
        <i v-for="n in 4" :key="n" :class="`chimney-${n}`"><b /><b /><b /></i>
      </div>
      <svg class="animals-pig-mobile" viewBox="0 0 90 55" aria-hidden="true">
        <path
          d="M17 28Q4 20 8 13M14 29C14 11 61 9 65 23L77 21 84 27 79 35 67 35 65 45H59L57 36H31L28 45H22L21 35Z"
        />
        <path d="m65 23 2-11 8 10" />
        <circle cx="74" cy="27" r="1.5" fill="#51403d" />
      </svg>
      <button type="button" class="animals-play" @click="travel('projects')">
        <span aria-hidden="true">▶</span
        >{{ spanish ? "Escuchar las ideas" : "Play the ideas" }}</button
      ><span class="animals-label"
        >33⅓ RPM / STEREO /
        {{ String(store.projects.length).padStart(2, "0") }} TRACKS</span
      >
    </div>
    <div v-else-if="theme === 'ferment'" class="ferment-scene">
      <span class="scene-eyebrow">JAVIER SEPÚLVEDA / PERSONAL RECORDINGS</span>
      <h1>{{ title }}</h1>
      <p>
        {{
          spanish
            ? "Algo de código. Algo de ruido. Todo por descubrir."
            : "Some code. Some noise. Everything to discover."
        }}
      </p>
      <nav class="ferment-track-menu" :aria-label="text.select">
        <button type="button" @click="travel('projects')">
          01 <strong>{{ text.projects }}</strong> ↗</button
        ><button type="button" @click="travel('about')">
          02 <strong>{{ text.about }}</strong> ↗</button
        ><NuxtLink to="/cv"
          >03 <strong>{{ text.cvTitle }}</strong> ↗</NuxtLink
        >
      </nav>
      <span class="ferment-vertical" aria-hidden="true">世界はあなたのもの</span
      ><svg class="headphone-cable" viewBox="0 0 1000 500" aria-hidden="true">
        <path
          d="M1000 30C550 20 850 400 480 370S180 150 40 400"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        />
      </svg>
    </div>
    <div v-else-if="theme === 'redroom'" class="redroom-scene">
      <span class="scene-eyebrow">A PORTFOLIO BY JAVIER SEPÚLVEDA</span>
      <h1>THE<br />RED ROOM</h1>
      <p>{{ title }}</p>
      <button type="button" class="redroom-enter" @click="travel('projects')">
        {{ spanish ? "Entrar en la habitación" : "Enter the room"
        }}<ArrowUpRight :size="16" aria-hidden="true" /></button
      ><span class="redroom-clock" aria-hidden="true">M E A N W H I L E</span>
      <div class="curtain-opening" aria-hidden="true"><i /><i /></div>
    </div>
    <div v-else-if="theme === 'eva'" class="eva-scene">
      <div class="eva-hazard" aria-hidden="true" />
      <div class="eva-grid" aria-hidden="true" />
      <div class="eva-episode">
        <span>EPISODE: 01</span><span>JAVIER SEPÚLVEDA</span
        ><span>{{ String(store.projects.length).padStart(2, "0") }} FILES</span>
      </div>
      <div class="eva-title">
        <h1>NEON<br />GENESIS<br /><em>ENGINEERING.</em></h1>
        <p>{{ spanish ? "LA FORMA DE LAS IDEAS" : "THE SHAPE OF IDEAS" }}</p>
      </div>
      <div class="magi-system">
        <div class="magi-caption">MAGI SYSTEM / PORTFOLIO INTERFACE</div>
        <button
          type="button"
          class="magi-cell melchior"
          @click="travel('projects')"
        >
          <span>MELCHIOR · 1</span><strong>{{ text.projects }}</strong></button
        ><button
          type="button"
          class="magi-cell balthasar"
          @click="travel('experience')"
        >
          <span>BALTHASAR · 2</span
          ><strong>{{ text.experience }}</strong></button
        ><button
          type="button"
          class="magi-cell casper"
          @click="travel('about')"
        >
          <span>CASPER · 3</span><strong>{{ text.about }}</strong>
        </button>
        <div class="eva-sync">
          <span>SCROLL SYNCHRONIZATION</span
          ><strong>{{ Math.round(progress * 100) }}<small>%</small></strong
          ><i :style="{ width: `${progress * 100}%` }" />
        </div>
      </div>
      <div class="eva-nerv-mark" aria-hidden="true">
        <svg viewBox="0 0 130 180">
          <path
            d="M45 160C0 90 25 6 123 0 130 90 96 132 45 160Z"
            fill="currentColor"
          />
          <path
            d="M24 180 103 20M53 119 28 65m41 27 40-26M40 145 16 104"
            fill="none"
            stroke="#0b0c0b"
            stroke-width="4"
          /></svg
        ><span>NERVE<br />TO CREATE.</span>
      </div>
    </div>
    <div v-else-if="theme === 'edgerunner'" class="edgerunner-scene">
      <span class="scene-eyebrow"
        >NIGHT CITY / JAVIER SEPÚLVEDA / PERSONAL DATA</span
      >
      <h1 :data-title="title">{{ title }}</h1>
      <p>
        {{
          spanish
            ? "Construir algo que sobreviva al ruido."
            : "Build something that outlives the noise."
        }}
      </p>
      <button type="button" class="cyber-enter" @click="travel('projects')">
        {{ text.explore
        }}<ArrowDownRight :size="21" aria-hidden="true" /></button
      ><svg class="sandevistan-mark" viewBox="0 0 200 80" aria-hidden="true">
        <path
          d="m8 60 31-48 24 45 23-34 23 34 29-44 47 46M6 67h180"
          fill="none"
          stroke="currentColor"
          stroke-width="7"
        />
      </svg>
      <div class="cyber-scan" aria-hidden="true" />
      <div class="cyber-afterimage" aria-hidden="true" />
    </div>
    <div v-else class="friend-scene">
      <div class="manga-panel-border" aria-hidden="true" />
      <span class="scene-eyebrow">JAVIER SEPÚLVEDA / CHAPTER 01</span>
      <div class="friend-book">
        <span>{{
          spanish
            ? "UNA PEQUEÑA IDEA PUEDE CAMBIARLO TODO"
            : "A SMALL IDEA CAN CHANGE EVERYTHING"
        }}</span>
        <h1>
          {{ title }}<br /><em>{{ spanish ? "MAÑANA." : "TOMORROW." }}</em>
        </h1>
        <p>
          {{
            spanish
              ? "Las historias que imaginamos. Las cosas que construimos."
              : "The stories we imagine. The things we build."
          }}
        </p>
        <button type="button" class="manga-enter" @click="travel('projects')">
          {{ spanish ? "Abrir el libro" : "Open the book"
          }}<ArrowUpRight :size="18" aria-hidden="true" />
        </button>
      </div>
      <div class="friend-symbol" aria-hidden="true">
        <svg viewBox="0 0 360 500">
          <defs>
            <pattern
              id="manga-dots"
              width="7"
              height="7"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="currentColor" opacity=".18" />
            </pattern>
          </defs>
          <circle cx="180" cy="263" r="155" fill="url(#manga-dots)" />
          <path
            d="M111 445 89 367 64 302Q48 268 72 260L111 303 113 81Q112 47 134 47T157 81L164 222 176 209Q193 200 204 220 221 204 238 227 260 222 271 248L285 321Q289 357 254 396L241 445Z"
            fill="var(--paper)"
            stroke="currentColor"
            stroke-width="7"
            stroke-linejoin="round"
          />
          <path
            d="M113 304 144 334m22-102 3 67m40-66 6 62m29-48 9 59m-125 82q48-14 91 1"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
          />
          <path
            d="M126 337q54-52 112 0-53 50-112 0Z"
            fill="none"
            stroke="currentColor"
            stroke-width="6"
          />
          <circle cx="182" cy="337" r="19" fill="currentColor" />
          <circle cx="177" cy="331" r="5" fill="var(--paper)" />
          <path
            d="m182 276 0 27m-61-12 18 18m102-17-19 19M99 336h20m129 0h21"
            stroke="currentColor"
            stroke-width="4"
          /></svg
        ><span>ともだち</span>
      </div>
      <span class="friend-page-number">20 / 21</span>
    </div>
    <div
      v-if="theme !== 'eva' && theme !== 'friend'"
      class="analog-grain"
      aria-hidden="true"
    />
    <SceneCaption />
  </section>
</template>
