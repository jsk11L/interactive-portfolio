import type { UniverseId } from "./universes";

type Section = "about" | "projects" | "experience";
export const compositions: Record<
  UniverseId,
  { layout: string; order: Section[]; catalog: "record" | "gallery" }
> = {
  dearly: {
    layout: "journal",
    order: ["about", "projects", "experience"],
    catalog: "record",
  },
  phantom: {
    layout: "poster-wall",
    order: ["projects", "about", "experience"],
    catalog: "record",
  },
  bloodborne: {
    layout: "archive",
    order: ["about", "experience", "projects"],
    catalog: "record",
  },
  daydream: {
    layout: "gatefold",
    order: ["projects", "about", "experience"],
    catalog: "record",
  },
  animals: {
    layout: "industrial-stories",
    order: ["projects", "experience", "about"],
    catalog: "record",
  },
  ferment: {
    layout: "print-essay",
    order: ["about", "projects", "experience"],
    catalog: "record",
  },
  redroom: {
    layout: "cinema",
    order: ["about", "projects", "experience"],
    catalog: "record",
  },
  eva: {
    layout: "terminal-grid",
    order: ["about", "projects", "experience"],
    catalog: "record",
  },
  edgerunner: {
    layout: "reversed-split",
    order: ["projects", "experience", "about"],
    catalog: "record",
  },
  friend: {
    layout: "manga-storyboard",
    order: ["about", "projects", "experience"],
    catalog: "record",
  },
};
