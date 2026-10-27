<script setup lang="ts">
const { text } = useStudioCopy();
const { theme } = usePortfolioTheme();
const { spanish } = useUniverse();
</script>

<template>
  <section id="about" class="biography-section section-block" tabindex="-1">
    <div class="biography-heading">
      <span class="eyebrow">{{ text.about }}</span>
      <h2>{{ text.aboutTitle }}</h2>
      <img
        :src="
          theme === 'friend'
            ? '/images/artwork/javier-manga-v3.webp'
            : '/images/profile.webp'
        "
        alt="Javier Sepúlveda"
        width="900"
        height="1000"
        loading="lazy"
      /><span class="photo-caption"
        >JAVIER SEPÚLVEDA / {{ text.location }}</span
      >
    </div>
    <div class="biography-copy">
      <p class="biography-summary">{{ text.description }}</p>
      <p class="interests-note">{{ text.interests }}</p>
      <div class="research-note">
        <span aria-hidden="true">✳</span>
        <div>
          <h3>{{ text.researchTitle }}</h3>
          <p>{{ spanish ? "Coautor de una publicación sobre optimización de cronogramas hospitalarios." : "Coauthor of a publication on hospital scheduling optimization." }}</p>
        </div>
      </div>
      <NuxtLink to="/cv" class="text-link">{{ text.readCv }}</NuxtLink>
    </div>
  </section>
</template>
