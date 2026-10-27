<script setup lang="ts">
const store = useCvStore();
const { translateProfile } = usePortfolioCopy();
const { text } = useStudioCopy();
const profile = computed(() => translateProfile(store.profile));
</script>

<template>
  <section id="about" class="biography-section section-block" tabindex="-1">
    <div class="biography-heading">
      <span class="eyebrow">{{ text.sideB }}</span>
      <h2>{{ text.aboutTitle }}</h2>
      <img
        src="/images/profile.webp"
        alt="Javier Sepúlveda"
        width="900"
        height="1000"
        loading="lazy"
      /><span class="photo-caption"
        >JAVIER SEPÚLVEDA / {{ text.location }}</span
      >
    </div>
    <div class="biography-copy">
      <span class="eyebrow">{{ text.aboutLead }}</span>
      <p class="biography-summary">{{ profile?.summary }}</p>
      <p class="interests-note">{{ text.interests }}</p>
      <div class="education-note">
        <span class="eyebrow">{{ text.background }}</span>
        <h3>{{ text.degree }}</h3>
        <p>{{ text.university }}</p>
        <small>{{ text.educationStatus }}</small>
      </div>
      <div class="research-note">
        <span aria-hidden="true">✳</span>
        <div>
          <h3>{{ text.researchTitle }}</h3>
          <p>{{ text.researchBody }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
