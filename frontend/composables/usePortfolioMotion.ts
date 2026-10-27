export function usePortfolioMotion() {
  const { paused } = usePortfolioTheme();
  const reduced = ref(true);
  let media: MediaQueryList | undefined;
  function update() {
    reduced.value = media?.matches ?? true;
  }
  onMounted(() => {
    media = window.matchMedia("(prefers-reduced-motion: reduce)");
    update();
    media.addEventListener("change", update);
  });
  onBeforeUnmount(() => media?.removeEventListener("change", update));
  return { motionAllowed: computed(() => !paused.value && !reduced.value) };
}
