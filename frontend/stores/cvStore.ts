/**
 * Centralized client state for CV data.
 *
 * Content is bundled at build time: no backend or database is required.
 */
import { defineStore } from "pinia";
import portfolio from "~/data/portfolio.json";

export interface PersonalInfo {
  name: string;
  title: string;
  summary: string;
  github_url: string;
  linkedin_url: string;
  email: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  position: string;
  start_date: string;
  end_date: string;
  description: string[];
  technologies: string[];
}

export interface SkillItem {
  category: string;
  items: string[];
  proficiency: number;
}

export interface ProjectLink {
  type: string;
  url: string;
  label: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  short_description: string;
  description: string;
  images: string[];
  technologies: string[];
  links: ProjectLink[];
  created_at: string;
  category?: string;
  highlights?: string[];
  role?: string;
  status?: string;
  source_note?: string;
}

export const useCvStore = defineStore("cv", {
  state: () => ({
    profile: portfolio.profile as PersonalInfo | null,
    experiences: portfolio.experiences as ExperienceItem[],
    skills: portfolio.skills as SkillItem[],
    projects: portfolio.projects as ProjectItem[],
    loading: false,
    error: null as string | null,
  }),
  actions: {
    async fetchProfile() {
      this.profile = portfolio.profile;
    },

    async fetchExperiences(tech?: string) {
      this.experiences = portfolio.experiences.filter(
        (item) =>
          !tech ||
          item.technologies.some((value) =>
            value.toLowerCase().includes(tech.toLowerCase()),
          ),
      );
    },

    async fetchSkills() {
      this.skills = portfolio.skills;
    },

    async fetchProjects() {
      this.projects = portfolio.projects;
    },

    /**
     * Load all data in parallel.
     * Sets loading=true while fetching, catches errors gracefully.
     */
    async loadAll() {
      this.loading = true;
      this.error = null;

      try {
        await Promise.all([
          this.fetchProfile(),
          this.fetchExperiences(),
          this.fetchSkills(),
          this.fetchProjects(),
        ]);
      } catch (err) {
        this.error =
          err instanceof Error ? err.message : "Unable to load curriculum data";
      } finally {
        this.loading = false;
      }
    },
  },
});
