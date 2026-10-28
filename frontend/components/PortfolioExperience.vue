<script setup lang="ts">
const store = useCvStore();
const {
  translateExperience,
  formatRange,
} = usePortfolioCopy();
const { text } = useStudioCopy();
const experiences = computed(() => store.experiences.map(translateExperience));
</script>

<template>
  <section
    id="experience"
    class="experience-section section-block"
    tabindex="-1"
  >
    <div class="section-heading">
      <div>
        <span class="eyebrow">{{ text.background }}</span>
        <h2>{{ text.experience }}</h2>
      </div>
      <NuxtLink to="/cv" class="text-link">{{ text.readCv }} ↗</NuxtLink>
    </div>
    <div class="experience-list">
      <article
        v-for="item in experiences"
        :key="item.id"
        class="experience-entry"
        :data-reading-anchor="`experience-${item.id}`"
      >
        <span class="experience-date">{{
          formatRange(item.start_date, item.end_date)
        }}</span>
        <div>
          <h3>{{ item.position }}</h3>
          <p class="experience-company">{{ item.company }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
