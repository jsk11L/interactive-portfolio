import { universes, type UniverseId } from "~/data/universes";
export const portfolioThemes = universes.map((universe) => universe.id);
export type PortfolioTheme = UniverseId;
const isTheme = (value: unknown): value is PortfolioTheme =>
  typeof value === "string" &&
  portfolioThemes.includes(value as PortfolioTheme);

export function usePortfolioTheme() {
  const theme = useState<PortfolioTheme>("portfolio-theme", () => "daydream");
  const random = useState("portfolio-random", () => true);
  const paused = useState("portfolio-motion-paused", () => false);
  const initialized = useState("portfolio-theme-initialized", () => false);
  const route = useRoute();
  const router = useRouter();

  const read = (key: string, session = false) => {
    try {
      return (session ? sessionStorage : localStorage).getItem(key);
    } catch {
      return null;
    }
  };
  const write = (key: string, value: string, session = false) => {
    try {
      (session ? sessionStorage : localStorage).setItem(key, value);
    } catch {
      /* Private browsing works without persistence. */
    }
  };
  const draw = (exclude?: PortfolioTheme) => {
    const choices = portfolioThemes.filter((item) => item !== exclude);
    return choices[Math.floor(Math.random() * choices.length)]!;
  };

  function initialize() {
    if (!import.meta.client || initialized.value) return;
    const preferred = read("portfolio-theme");
    const session = read("portfolio-session-theme", true);
    // Static payload hydration can initially expose the prerendered route query.
    // Read the real URL once, after mounting, so shared theme links take priority.
    const requested = new URLSearchParams(window.location.search).get("theme");
    random.value = !isTheme(preferred);
    if (isTheme(requested)) {
      theme.value = requested;
      write("portfolio-session-theme", theme.value, true);
    } else if (isTheme(preferred)) {
      theme.value = preferred;
    } else {
      theme.value = isTheme(session) ? session : draw();
      write("portfolio-session-theme", theme.value, true);
    }
    paused.value = read("portfolio-motion") === "paused";
    initialized.value = true;
  }

  async function selectTheme(next: PortfolioTheme) {
    theme.value = next;
    random.value = false;
    write("portfolio-theme", next);
    await router.replace({
      query: { ...route.query, theme: next },
      hash: route.hash,
    });
  }

  async function shuffleTheme() {
    theme.value = draw(theme.value);
    random.value = true;
    write("portfolio-theme", "random");
    write("portfolio-session-theme", theme.value, true);
    const query = { ...route.query };
    delete query.theme;
    await router.replace({ query, hash: route.hash });
  }

  function toggleMotion() {
    paused.value = !paused.value;
    write("portfolio-motion", paused.value ? "paused" : "playing");
  }

  return {
    theme,
    random,
    paused,
    initialize,
    selectTheme,
    shuffleTheme,
    toggleMotion,
  };
}
