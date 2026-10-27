<script setup lang="ts">
import { ArrowDownRight, ArrowUpRight } from "lucide-vue-next";
const { spanish } = useUniverse();
const { theme } = usePortfolioTheme();
const { text } = useStudioCopy();
const { travel, progress } = useJourney();
const art = computed(
  () =>
    (
      ({
        bloodborne: "bloodborne-night",
        animals: "animals-factory",
        ferment: "ferment-perspective-v3",
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
      width="1672"
      height="941"
      fetchpriority="high"
    />
    <div v-if="theme === 'bloodborne'" class="hunter-scene">
      <div class="hunter-rune" aria-hidden="true">†</div>
      <span class="scene-eyebrow">{{ text.degree }}</span>
      <h1>Javier<br />Sepúlveda.</h1>
      <p>{{ text.description }}</p>
      <button type="button" class="hunter-enter" @click="travel('projects')">
        <span aria-hidden="true">✥</span>{{ text.projects
        }}<span aria-hidden="true">✥</span>
      </button>
      <div class="hunter-fog" aria-hidden="true" />
      <div class="hunter-lantern-glow" aria-hidden="true" />
    </div>
    <div v-else-if="theme === 'animals'" class="animals-scene">
      <span class="scene-eyebrow">{{ text.degree }} / {{ text.location }}</span>
      <h1>Javier<br />Sepúlveda.</h1>
      <FactorySmoke />
      <button type="button" class="animals-play" @click="travel('projects')">
        <span aria-hidden="true">▶</span>{{ text.explore }}
      </button>
      <span class="animals-label">{{
        spanish
          ? "Desarrollo de software / Investigación"
          : "Software development / Research"
      }}</span>
    </div>
    <div v-else-if="theme === 'ferment'" class="ferment-scene">
      <span class="scene-eyebrow"
        >{{ text.location }} / {{ text.portfolio }}</span
      >
      <h1>Javier<br />Sepúlveda.</h1>
      <p>{{ text.description }}</p>
      <nav class="ferment-track-menu" :aria-label="text.select">
        <button type="button" @click="travel('projects')">
          <strong>{{ text.projects }}</strong> ↗
        </button>
        <button type="button" @click="travel('about')">
          <strong>{{ text.about }}</strong> ↗
        </button>
        <NuxtLink to="/cv"
          ><strong>{{ text.cvTitle }}</strong> ↗</NuxtLink
        >
      </nav>
      <svg class="headphone-cable" viewBox="0 0 1000 500" aria-hidden="true">
        <path
          d="M1000 30C550 20 850 400 480 370S180 150 40 400"
          fill="none"
          stroke="currentColor"
          stroke-width="3"
        />
      </svg>
    </div>
    <div v-else-if="theme === 'redroom'" class="redroom-scene">
      <span class="scene-eyebrow">{{ text.portfolio }}</span>
      <h1>JAVIER<br />SEPÚLVEDA</h1>
      <p>{{ text.degree }}</p>
      <button type="button" class="redroom-enter" @click="travel('projects')">
        {{ text.explore }}<ArrowUpRight :size="16" aria-hidden="true" />
      </button>
      <div class="curtain-opening" aria-hidden="true"><i /><i /></div>
      <div class="velvet-light" aria-hidden="true" />
    </div>
    <div v-else-if="theme === 'eva'" class="eva-scene">
      <div class="eva-hazard" aria-hidden="true" />
      <div class="eva-grid" aria-hidden="true" />
      <div class="eva-episode">
        <span>{{ text.portfolio }}</span
        ><span>{{ text.location }}</span
        ><span>CV / 2026</span>
      </div>
      <div class="eva-title">
        <h1>JAVIER<br />SEPÚLVEDA</h1>
        <p>
          {{
            spanish
              ? "Desarrollo de software e investigación"
              : "Software development and research"
          }}
        </p>
      </div>
      <div class="magi-system">
        <div class="magi-caption">MAGI / {{ text.select }}</div>
        <button
          type="button"
          class="magi-cell melchior"
          @click="travel('projects')"
        >
          <span>MELCHIOR</span><strong>{{ text.projects }}</strong>
        </button>
        <button
          type="button"
          class="magi-cell balthasar"
          @click="travel('experience')"
        >
          <span>BALTHASAR</span><strong>{{ text.experience }}</strong>
        </button>
        <button type="button" class="magi-cell casper" @click="travel('about')">
          <span>CASPER</span><strong>{{ text.about }}</strong>
        </button>
        <div class="eva-sync">
          <span>{{ spanish ? "Progreso de lectura" : "Reading progress" }}</span
          ><strong>{{ Math.round(progress * 100) }}<small>%</small></strong
          ><i :style="{ width: `${progress * 100}%` }" />
        </div>
      </div>
      <div class="eva-acquisition" aria-hidden="true" />
    </div>
    <div v-else-if="theme === 'edgerunner'" class="edgerunner-scene">
      <span class="scene-eyebrow">{{ text.degree }} / {{ text.location }}</span>
      <h1 data-title="JAVIER SEPÚLVEDA">JAVIER<br />SEPÚLVEDA</h1>
      <p>{{ text.description }}</p>
      <button type="button" class="cyber-enter" @click="travel('projects')">
        {{ text.explore }}<ArrowDownRight :size="21" aria-hidden="true" />
      </button>
      <svg class="sandevistan-mark" viewBox="0 0 200 80" aria-hidden="true">
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
    <MangaOpening v-else />
    <div
      v-if="!['eva', 'friend'].includes(theme)"
      class="analog-grain"
      aria-hidden="true"
    />
    <SceneCaption />
  </section>
</template>
