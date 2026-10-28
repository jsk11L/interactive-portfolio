<script setup lang="ts">
const { text } = useStudioCopy();
useSeoMeta({ title: () => `${text.value.contact} · Javier Sepúlveda` });
</script>

<template>
  <div class="contact-page content-shell">
    <NuxtLink to="/" class="text-link back-link">← {{ text.back }}</NuxtLink
    ><span class="eyebrow">{{ text.contact }} / JAVIER SEPÚLVEDA</span>
    <h1>{{ text.contactTitle }}</h1>
    <p class="contact-page-lead">{{ text.contactBody }}</p>
    <ContactLinks />
  </div>
</template>
