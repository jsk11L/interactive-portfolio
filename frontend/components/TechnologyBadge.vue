<script setup lang="ts">
import { Code2 } from "lucide-vue-next";
import { technologyIcons } from "~/data/technologyIcons";
defineProps<{ name: string }>();
</script>
<template>
  <span class="technology-badge">
    <span class="technology-icon" aria-hidden="true">
      <img v-if="technologyIcons[name]" :src="`/images/technologies/${technologyIcons[name]}.svg`" alt="" width="28" height="28" loading="lazy" />
      <Code2 v-else :size="24" />
    </span>
    <span>{{ name }}</span>
  </span>
</template>
