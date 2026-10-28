<script setup lang="ts">
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-vue-next";
const route = useRoute();
const store = useCvStore();
const { translateProject, formatDate, locale } = usePortfolioCopy();
const { text } = useStudioCopy();
const project = computed(() =>
  store.projects.find((item) => item.id === route.params.id),
);
if (!project.value)
  throw createError({ statusCode: 404, statusMessage: "Project not found" });
const localized = computed(() =>
  project.value ? translateProject(project.value) : null,
);
const nextProject = computed(
  () =>
    store.projects[
      (store.projects.findIndex((item) => item.id === project.value?.id) + 1) %
        store.projects.length
    ],
);
useSeoMeta({
  title: () => `${localized.value?.title} · Javier Sepúlveda`,
  description: () => localized.value?.short_description,
  ogImage: () => localized.value?.images[0],
});
</script>

<template>
  <article v-if="localized" class="project-detail content-shell">
    <NuxtLink to="/#projects" class="text-link back-link"
      ><ArrowLeft :size="16" aria-hidden="true" />{{ text.back }}</NuxtLink
    >
    <header class="project-detail-heading">
      <span class="eyebrow"
        >{{ text.projects }} /
        {{
          String(
            store.projects.findIndex((item) => item.id === localized.id) + 1,
          ).padStart(2, "0")
        }}</span
      >
      <h1>{{ localized.title }}</h1>
      <p>{{ localized.short_description }}</p>
      <span v-if="localized.status" class="project-status">{{
        localized.status
      }}</span>
    </header>
    <figure class="project-detail-art">
      <ProjectArtwork :project="localized" />
      <figcaption>{{ text.cover }}</figcaption>
    </figure>
    <div class="project-detail-body">
      <section>
        <span class="eyebrow">{{ text.projectNotes }}</span>
        <p>{{ localized.description }}</p>
        <ul v-if="localized.highlights?.length" class="detail-highlights">
          <li v-for="line in localized.highlights" :key="line">{{ line }}</li>
        </ul>
      </section>
      <aside>
        <template v-if="localized.role"
          ><h2>
            {{
              locale === "es" ? "Participación / contexto" : "Role / context"
            }}
          </h2>
          <p class="project-role">{{ localized.role }}</p></template
        >
        <h2>{{ text.tech }}</h2>
        <div class="technology-list">
          <TechnologyBadge v-for="tech in localized.technologies" :key="tech" :name="tech" />
        </div>
        <h2>{{ text.links }}</h2>
        <a
          v-for="link in localized.links"
          :key="link.url"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
          class="project-external"
          >{{ link.label }}<ArrowUpRight :size="17" aria-hidden="true"
        /></a>
        <p v-if="localized.created_at" class="project-date">
          {{ formatDate(localized.created_at) }}
        </p>
      </aside>
    </div>
    <div v-if="localized.images.length > 1" class="detail-gallery">
      <img
        v-for="image in localized.images.slice(1)"
        :key="image"
        :src="image"
        :alt="localized.title"
        loading="lazy"
      />
    </div>
    <NuxtLink
      v-if="nextProject"
      :to="`/projects/${nextProject.id}`"
      class="next-project"
      ><span
        >{{ text.next }}<strong>{{ nextProject.title }}</strong></span
      ><ArrowRight :size="32" aria-hidden="true"
    /></NuxtLink>
  </article>
</template>
