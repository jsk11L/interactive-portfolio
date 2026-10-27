<script setup lang="ts">
import { ArrowDown, ArrowUpRight } from "lucide-vue-next";
const { universe, labels, spanish } = useUniverse();
const { travel } = useJourney();
</script>
<template>
  <div class="scene-caption">
    <details class="inspiration-note">
      <summary>
        {{ labels.inspired }} <strong>{{ universe.source }}</strong
        ><span aria-hidden="true">↗</span>
      </summary>
      <div>
        <p>{{ spanish ? universe.note : universe.noteEn }}</p>
        <a :href="universe.href" target="_blank" rel="noopener noreferrer"
          >{{ universe.source }}<ArrowUpRight :size="12" aria-hidden="true"
        /></a>
      </div>
    </details>
    <button type="button" class="scene-scroll" @click="travel('projects')">
      <span>{{ labels.scroll }}</span
      ><ArrowDown :size="16" aria-hidden="true" />
    </button>
  </div>
</template>
