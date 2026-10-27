export function useJourney() {
  const progress = useState("journey-progress", () => 0);
  const active = useState("journey-active", () => "intro");
  const pastIntro = useState("journey-past-intro", () => false);
  const transition = useState("journey-transition", () => 0);
  const { theme } = usePortfolioTheme();
  const route = useRoute();
  const router = useRouter();

  async function travel(id: string) {
    if (theme.value === "phantom") transition.value++;
    if (route.path !== "/") {
      await router.push({ path: "/", query: route.query, hash: `#${id}` });
    } else {
      await router.replace({ query: route.query, hash: `#${id}` });
      await nextTick();
      document
        .getElementById(id)
        ?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "instant"
            : "smooth",
        });
    }
  }
  return { progress, active, pastIntro, transition, travel };
}
