<script setup lang="ts">
import { ArrowLeft, Printer } from "lucide-vue-next";
const store = useCvStore();
const {
  translateProfile,
  translateExperience,
  translateProject,
  translateSkillCategory,
  translateSoftSkills,
  isSoftSkillsCategory,
  formatRange,
} = usePortfolioCopy();
const { text } = useStudioCopy();
const profile = computed(() => translateProfile(store.profile));
const printCv = () => window.print();
useSeoMeta({ title: () => `${text.value.cvTitle} — Javier Sepúlveda` });
</script>

<template>
  <div class="cv-page content-shell">
    <div class="cv-toolbar no-print">
      <NuxtLink to="/" class="text-link"
        ><ArrowLeft :size="16" aria-hidden="true" />{{ text.back }}</NuxtLink
      ><button type="button" class="button-solid" @click="printCv">
        <Printer :size="16" aria-hidden="true" />{{ text.print }}
      </button>
    </div>
    <article v-if="profile" class="cv-document">
      <header>
        <span class="eyebrow">{{ text.cvTitle }}</span>
        <h1>{{ profile.name }}</h1>
        <p>{{ profile.title }}</p>
        <div class="cv-contact">
          <a :href="`mailto:${profile.email}`">{{ profile.email }}</a
          ><a :href="profile.github_url">github.com/jsk11L</a
          ><a :href="profile.linkedin_url">LinkedIn / jasepulvedaca</a>
        </div>
      </header>
      <section>
        <h2>{{ text.about }}</h2>
        <p>{{ profile.summary }}</p>
      </section>
      <section>
        <h2>{{ text.background }}</h2>
        <h3>{{ text.degree }}</h3>
        <p>{{ text.university }}</p>
        <p>{{ text.educationStatus }}</p>
      </section>
      <section>
        <h2>{{ text.experience }}</h2>
        <article
          v-for="item in store.experiences.map(translateExperience)"
          :key="item.id"
          class="cv-experience"
        >
          <h3>{{ item.position }}</h3>
          <p>
            {{ item.company }} ·
            {{ formatRange(item.start_date, item.end_date) }}
          </p>
          <ul>
            <li v-for="line in item.description" :key="line">{{ line }}</li>
          </ul>
        </article>
      </section>
      <section>
        <h2>{{ text.skills }}</h2>
        <p v-for="skill in store.skills" :key="skill.category">
          <strong>{{ translateSkillCategory(skill.category) }}:</strong>
          {{
            (isSoftSkillsCategory(skill.category)
              ? translateSoftSkills(skill.items)
              : skill.items
            ).join(", ")
          }}
        </p>
      </section>
      <section>
        <h2>{{ text.researchTitle }}</h2>
        <p>{{ text.researchBody }}</p>
      </section>
      <section>
        <h2>{{ text.projects }}</h2>
        <article
          v-for="project in store.projects.map(translateProject)"
          :key="project.id"
          class="cv-project"
        >
          <h3>{{ project.title }}</h3>
          <p>{{ project.short_description }}</p>
          <p>{{ project.technologies.join(" · ") }}</p>
          <a v-for="link in project.links" :key="link.url" :href="link.url">{{
            link.url
          }}</a>
        </article>
      </section>
    </article>
  </div>
</template>
