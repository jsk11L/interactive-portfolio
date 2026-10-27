<script setup lang="ts">
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Grid2X2,
  List,
  Search,
} from "lucide-vue-next";
import type { ProjectItem } from "~/stores/cvStore";
import { compositions } from "~/data/compositions";
const store = useCvStore();
const { translateProject } = usePortfolioCopy();
const { text } = useStudioCopy();
const { theme, paused } = usePortfolioTheme();
const { transition } = useJourney();
const { spanish } = useUniverse();
const filter = useState("portfolio-project-filter", () => "all");
const query = useState("portfolio-project-search", () => "");
const selectedId = useState(
  "portfolio-selected-project",
  () => store.projects[0]?.id || "",
);
const view = ref<"record" | "gallery">("record");
watch(
  theme,
  (value) => {
    view.value = compositions[value].catalog;
  },
  { immediate: true },
);
const categories = ["all", "web", "games", "research", "tools"] as const;
const projects = computed(() =>
  store.projects
    .map(translateProject)
    .filter(
      (project) =>
        (filter.value === "all" || project.category === filter.value) &&
        `${project.title} ${project.short_description} ${project.technologies.join(" ")}`
          .toLocaleLowerCase()
          .includes(query.value.trim().toLocaleLowerCase()),
    ),
);
const selected = computed(
  () =>
    projects.value.find((project) => project.id === selectedId.value) ||
    projects.value[0],
);
const selectedIndex = computed(() =>
  projects.value.findIndex((project) => project.id === selected.value?.id),
);
function step(direction: number) {
  if (projects.value.length)
    selectedId.value =
      projects.value[
        (selectedIndex.value + direction + projects.value.length) %
          projects.value.length
      ]!.id;
}
async function openProject(event: MouseEvent, project: ProjectItem) {
  if (
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    event.button !== 0
  )
    return;
  if (
    theme.value === "phantom" &&
    !paused.value &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    event.preventDefault();
    transition.value++;
    await new Promise((resolve) => setTimeout(resolve, 420));
    await navigateTo(`/projects/${project.id}`);
  }
}
const resultLabel = computed(() =>
  spanish.value
    ? `${projects.value.length} de ${store.projects.length} proyectos`
    : `${projects.value.length} of ${store.projects.length} projects`,
);
</script>
<template>
  <section
    id="projects"
    class="projects-section section-block interactive-catalog"
    tabindex="-1"
  >
    <div class="section-heading">
      <div>
        <span class="eyebrow">{{ text.collection }}</span>
        <h2>
          {{ text.projects
          }}<sup>({{ String(store.projects.length).padStart(2, "0") }})</sup>
        </h2>
      </div>
      <p>{{ text.selected }}</p>
    </div>
    <div class="catalog-toolbar">
      <div class="project-filters" role="group" :aria-label="text.collection">
        <button
          v-for="category in categories"
          :key="category"
          type="button"
          :aria-pressed="filter === category"
          :class="{ selected: filter === category }"
          @click="filter = category"
        >
          {{ text[category] }}
        </button>
      </div>
      <div class="catalog-controls">
        <label class="project-search"
          ><Search :size="14" aria-hidden="true" /><span class="sr-only">{{
            spanish ? "Buscar proyectos" : "Search projects"
          }}</span
          ><input
            v-model="query"
            name="project-search"
            autocomplete="off"
            type="search"
            :placeholder="
              spanish
                ? 'Buscar proyecto, tecnología…'
                : 'Find a project, technology…'
            "
        /></label>
        <div
          class="catalog-view-controls"
          role="group"
          :aria-label="spanish ? 'Vista del catálogo' : 'Catalog view'"
        >
          <button
            type="button"
            :aria-pressed="view === 'record'"
            :aria-label="spanish ? 'Vista de pistas' : 'Track view'"
            @click="view = 'record'"
          >
            <List :size="17" aria-hidden="true" /></button
          ><button
            type="button"
            :aria-pressed="view === 'gallery'"
            :aria-label="spanish ? 'Vista de galería' : 'Gallery view'"
            @click="view = 'gallery'"
          >
            <Grid2X2 :size="16" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
    <div class="catalog-result-count" role="status">{{ resultLabel }}</div>
    <div v-if="view === 'record' && selected" class="record-catalog">
      <div class="record-stage">
        <div :key="selected.id" class="record-sleeve">
          <NuxtLink
            :to="`/projects/${selected.id}`"
            @click="openProject($event, selected)"
            ><img
              :src="selected.images[0]"
              :alt="`${selected.title} — ${text.cover}`"
              width="1200"
              height="800"
              loading="lazy" /><span class="record-art-caption">{{
              text.cover
            }}</span
            ><span class="record-open"
              ><ArrowUpRight :size="24" aria-hidden="true" /></span
          ></NuxtLink>
        </div>
        <div class="record-stage-controls">
          <button
            type="button"
            :aria-label="spanish ? 'Proyecto anterior' : 'Previous project'"
            @click="step(-1)"
          >
            <ArrowLeft :size="17" /></button
          ><span
            >TRACK {{ String(selectedIndex + 1).padStart(2, "0") }} /
            {{ String(projects.length).padStart(2, "0") }}</span
          ><button type="button" :aria-label="text.next" @click="step(1)">
            <ArrowRight :size="17" />
          </button>
        </div>
        <div class="selected-project-note" :key="`note-${selected.id}`">
          <h3>{{ selected.title }}</h3>
          <p>{{ selected.description }}</p>
          <ul v-if="selected.highlights?.length">
            <li v-for="line in selected.highlights.slice(0, 3)" :key="line">
              {{ line }}
            </li>
          </ul>
          <NuxtLink
            :to="`/projects/${selected.id}`"
            class="text-link"
            @click="openProject($event, selected)"
            >{{ text.openProject }}<ArrowUpRight :size="15" aria-hidden="true"
          /></NuxtLink>
        </div>
      </div>
      <div
        class="track-list"
        role="group"
        :aria-label="text.collection"
        @keydown.left.prevent="step(-1)"
        @keydown.right.prevent="step(1)"
      >
        <button
          v-for="(project, index) in projects"
          :key="project.id"
          type="button"
          class="project-track"
          :aria-pressed="selected.id === project.id"
          :class="{ selected: selected.id === project.id }"
          @click="selectedId = project.id"
        >
          <span class="track-index">{{
            String(index + 1).padStart(2, "0")
          }}</span
          ><span class="track-text"
            ><small>{{
              text[
                (project.category || "web") as
                  | "web"
                  | "games"
                  | "research"
                  | "tools"
              ]
            }}</small
            ><strong>{{ project.title }}</strong
            ><span>{{ project.short_description }}</span
            ><span class="track-tech">{{
              project.technologies.slice(0, 3).join(" / ")
            }}</span></span
          ><span class="track-play" aria-hidden="true">{{
            selected.id === project.id ? "◼" : "↗"
          }}</span>
        </button>
      </div>
    </div>
    <div v-else-if="view === 'gallery'" class="poster-catalog">
      <NuxtLink
        v-for="(project, index) in projects"
        :key="project.id"
        :to="`/projects/${project.id}`"
        class="project-poster"
        @click="openProject($event, project)"
        ><div class="poster-image">
          <img
            :src="project.images[0]"
            :alt="`${project.title} — ${text.cover}`"
            width="1200"
            height="800"
            loading="lazy"
          /><span class="poster-stamp">{{
            String(index + 1).padStart(2, "0")
          }}</span
          ><span class="poster-open"
            ><ArrowUpRight :size="25" aria-hidden="true"
          /></span>
        </div>
        <div class="poster-copy">
          <span class="eyebrow">{{
            text[
              (project.category || "web") as
                | "web"
                | "games"
                | "research"
                | "tools"
            ]
          }}</span>
          <h3>{{ project.title }}</h3>
          <p>{{ project.short_description }}</p>
          <div class="project-technologies">
            <span
              v-for="tech in project.technologies.slice(0, 4)"
              :key="tech"
              >{{ tech }}</span
            >
          </div>
          <span v-if="project.status" class="project-status">{{
            project.status
          }}</span>
        </div></NuxtLink
      >
    </div>
    <p v-if="!projects.length" class="empty-state">{{ text.noResults }}</p>
    <a
      class="github-index text-link"
      href="https://github.com/jsk11L?tab=repositories"
      target="_blank"
      rel="noopener noreferrer"
      >{{ text.githubMore }}<ArrowUpRight :size="17" aria-hidden="true"
    /></a>
  </section>
</template>
