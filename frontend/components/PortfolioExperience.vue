<script setup lang="ts">
const store = useCvStore();
const {
  translateExperience,
  translateSkillCategory,
  translateSoftSkills,
  isSoftSkillsCategory,
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
        <span class="eyebrow">{{ text.sideC }}</span>
        <h2>{{ text.experience }}</h2>
      </div>
      <NuxtLink to="/cv" class="text-link">{{ text.readCv }} ↗</NuxtLink>
    </div>
    <div class="experience-list">
      <article
        v-for="item in experiences"
        :key="item.id"
        class="experience-entry"
      >
        <span class="experience-date">{{
          formatRange(item.start_date, item.end_date)
        }}</span>
        <div>
          <h3>{{ item.position }}</h3>
          <p class="experience-company">{{ item.company }}</p>
          <ul>
            <li v-for="line in item.description" :key="line">{{ line }}</li>
          </ul>
          <div class="project-technologies">
            <span v-for="tech in item.technologies" :key="tech">{{
              tech
            }}</span>
          </div>
        </div>
      </article>
    </div>
    <div class="toolkit">
      <h2>{{ text.skills }}<span aria-hidden="true">↘</span></h2>
      <div class="toolkit-grid">
        <article v-for="skill in store.skills" :key="skill.category">
          <h3>{{ translateSkillCategory(skill.category) }}</h3>
          <p>
            {{
              (isSoftSkillsCategory(skill.category)
                ? translateSoftSkills(skill.items)
                : skill.items
              ).join(" · ")
            }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
