<script setup lang="ts">
import type { ProjectItem } from "~/stores/cvStore";
defineProps<{ project: ProjectItem }>();
</script>
<template>
  <div class="project-artwork" :class="`identity-${project.id}`" :aria-label="`${project.title} · project identity`" role="img">
    <span class="project-artwork-orbit" aria-hidden="true" />
    <span class="project-mark" :style="{ maskImage: `url(${project.images[0]})` }" aria-hidden="true" />
    <span class="project-artwork-signature" aria-hidden="true">js.</span>
  </div>
</template>
