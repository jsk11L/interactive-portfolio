import { universes, type UniverseId } from "~/data/universes";
import { captureReadingPosition, pickNextTheme, restoreReadingPosition } from "~/utils/themeReadingPosition";
export const portfolioThemes = universes.map((universe) => universe.id);
export type PortfolioTheme = UniverseId;
const isTheme = (value: unknown): value is PortfolioTheme =>
  typeof value === "string" &&
  portfolioThemes.includes(value as PortfolioTheme);

export function usePortfolioTheme() {
  const theme = useState<PortfolioTheme>("portfolio-theme", () => "daydream");
  const paused = useState("portfolio-motion-paused", () => false);
  const initialized = useState("portfolio-theme-initialized", () => false);
  const switching = useState("portfolio-theme-switching", () => false);
  const route = useRoute();
  const router = useRouter();

  const read = (key: string) => {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  };
  const write = (key: string, value: string) => {
    try {
      localStorage.setItem(key, value);
    } catch {
      /* Private browsing works without persistence. */
    }
  };
  async function initialize() {
    if (!import.meta.client || initialized.value) return;
    paused.value = read("portfolio-motion") === "paused";
    initialized.value = true;
    // A fresh visit always draws a new world, including when an old theme is in the URL.
    await selectTheme(pickNextTheme(portfolioThemes, read("portfolio-last-theme") || undefined));
  }

  async function selectTheme(next: PortfolioTheme) {
    if (!isTheme(next) || switching.value) return;
    const position = captureReadingPosition();
    switching.value = true;
    try {
      theme.value = next;
      write("portfolio-last-theme", next);
      await router.replace({ query: { ...route.query, theme: next }, hash: route.hash });
      await nextTick();
      restoreReadingPosition(position);
      await new Promise<void>(resolve => requestAnimationFrame(() => resolve()));
      await document.fonts.ready;
      restoreReadingPosition(position);
    } finally {
      switching.value = false;
    }
  }

  async function shuffleTheme() {
    await selectTheme(pickNextTheme(portfolioThemes, theme.value));
  }

  function toggleMotion() {
    paused.value = !paused.value;
    write("portfolio-motion", paused.value ? "paused" : "playing");
  }

  return {
    theme,
    switching,
    paused,
    initialize,
    selectTheme,
    shuffleTheme,
    toggleMotion,
  };
}
