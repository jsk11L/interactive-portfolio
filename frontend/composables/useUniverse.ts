import { universes, universeGroups } from "~/data/universes";

export function useUniverse() {
  const { theme } = usePortfolioTheme();
  const { locale } = usePortfolioCopy();
  const universe = computed(
    () => universes.find((item) => item.id === theme.value) ?? universes[3],
  );
  const spanish = computed(() => locale.value === "es");
  const labels = computed(() => ({
    inspired: {
      es: "Inspirado en",
      en: "Inspired by",
      de: "Inspiriert von",
      ru: "Вдохновлено",
    }[locale.value],
    scroll: {
      es: "Desliza para descubrir",
      en: "Scroll to discover",
      de: "Scrollen und entdecken",
      ru: "Листайте дальше",
    }[locale.value],
    games: { es: "Juegos", en: "Games", de: "Spiele", ru: "Игры" }[
      locale.value
    ],
    albums: { es: "Álbumes", en: "Albums", de: "Alben", ru: "Альбомы" }[
      locale.value
    ],
    screen: {
      es: "Cine & animación",
      en: "Film & animation",
      de: "Film & Animation",
      ru: "Кино и анимация",
    }[locale.value],
    manga: "Manga",
    allUniverses: {
      es: "Diez universos. Una historia.",
      en: "Ten universes. One story.",
      de: "Zehn Welten. Eine Geschichte.",
      ru: "Десять миров. Одна история.",
    }[locale.value],
  }));
  return { universe, universes, universeGroups, labels, spanish };
}
