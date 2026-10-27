<script setup lang="ts">
const { text } = useStudioCopy();
const { spanish } = useUniverse();
const { travel } = useJourney();
</script>
<template>
  <div class="eva-opening">
    <div class="eva-title-card">
      <p class="eva-card-caption">{{ text.portfolio }}<span>{{ text.location }}</span></p>
      <h1><span>JAVIER</span><span>SEPÚLVEDA</span></h1>
      <p class="eva-profession">{{ spanish ? "Desarrollo de software e investigación." : "Software development & research." }}</p>
      <p class="eva-profile-line">{{ spanish ? "Estudiante de Ingeniería Civil Informática. PUCV, Chile." : "Computer science engineering student. PUCV, Chile." }}</p>
      <NuxtLink to="/cv" class="text-link">{{ text.readCv }}</NuxtLink>
    </div>
    <nav class="eva-magi-nav" :aria-label="text.select">
      <p class="eva-magi-label"><span>MAGI</span><span>J. SEPÚLVEDA</span></p>
      <div class="eva-magi-cells">
        <button type="button" class="eva-magi-cell eva-melchior" @click="travel('projects')"><small>MELCHIOR · 1</small><strong>{{ text.projects }}</strong></button>
        <button type="button" class="eva-magi-cell eva-balthasar" @click="travel('skills')"><small>BALTHASAR · 2</small><strong>{{ text.skillsNav }}</strong></button>
        <button type="button" class="eva-magi-cell eva-casper" @click="travel('about')"><small>CASPER · 3</small><strong>{{ text.about }}</strong></button>
      </div>
      <svg class="eva-signal" viewBox="0 0 380 70" aria-hidden="true"><path d="M0 42h75l8-9 7 17 10-35 12 49 12-25 10 3h246" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M0 5h380M0 65h380" fill="none" stroke="currentColor" opacity=".3"/></svg>
    </nav>
  </div>
</template>
