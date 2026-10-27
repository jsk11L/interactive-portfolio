import type { UniverseId } from "./universes";

type Section = "about" | "projects" | "experience";
export const compositions: Record<
  UniverseId,
  { layout: string; order: Section[]; catalog: "record" | "gallery" }
> = {
  dearly: {
    layout: "journal",
    order: ["about", "projects", "experience"],
    catalog: "gallery",
  },
  phantom: {
    layout: "poster-wall",
    order: ["projects", "about", "experience"],
    catalog: "gallery",
  },
  bloodborne: {
    layout: "archive",
    order: ["about", "experience", "projects"],
    catalog: "gallery",
  },
  daydream: {
    layout: "gatefold",
    order: ["projects", "about", "experience"],
    catalog: "record",
  },
  animals: {
    layout: "industrial-stories",
    order: ["projects", "experience", "about"],
    catalog: "gallery",
  },
  ferment: {
    layout: "print-essay",
    order: ["about", "projects", "experience"],
    catalog: "gallery",
  },
  redroom: {
    layout: "cinema",
    order: ["about", "projects", "experience"],
    catalog: "gallery",
  },
  eva: {
    layout: "terminal-grid",
    order: ["about", "projects", "experience"],
    catalog: "gallery",
  },
  edgerunner: {
    layout: "reversed-split",
    order: ["projects", "experience", "about"],
    catalog: "record",
  },
  friend: {
    layout: "manga-storyboard",
    order: ["about", "projects", "experience"],
    catalog: "gallery",
  },
};
