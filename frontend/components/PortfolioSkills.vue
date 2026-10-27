<script setup lang="ts">
const store = useCvStore();
const { isSoftSkillsCategory, translateSkillCategory } = usePortfolioCopy();
const { text } = useStudioCopy();
const { spanish } = useUniverse();
const groups = computed(() => store.skills.filter(skill => !isSoftSkillsCategory(skill.category)));
</script>
<template>
  <section id="skills" class="skills-showcase content-shell" tabindex="-1">
    <div class="skills-heading">
      <h2>{{ text.skills }}</h2>
      <NuxtLink to="/cv#skills" class="text-link">{{ spanish ? "Ver todas las habilidades" : "View all skills" }}</NuxtLink>
    </div>
    <div class="skills-groups">
      <article v-for="group in groups" :key="group.category" class="skills-group">
        <h3>{{ translateSkillCategory(group.category) }}</h3>
        <ul>
          <li v-for="name in group.items" :key="name"><TechnologyBadge :name="name" /></li>
        </ul>
      </article>
    </div>
  </section>
</template>
