const readingAnchors = "#intro, #summary, #skills, #about, #projects, #experience, #contact, [data-reading-anchor]";

export function pickNextTheme<T extends string>(themes: readonly T[], previous?: string, chance = Math.random()): T {
  const choices = themes.filter(theme => theme !== previous);
  return choices[Math.floor(chance * choices.length)]!;
}

export function captureReadingPosition() {
  const anchors = [...document.querySelectorAll<HTMLElement>(readingAnchors)]
    .map(element => ({ key: element.dataset.readingAnchor || element.id, top: element.getBoundingClientRect().top }))
    .filter(anchor => anchor.top <= 120)
    .sort((a, b) => b.top - a.top);
  return { anchor: anchors[0], scrollY: window.scrollY };
}

export function restoreReadingPosition(position: ReturnType<typeof captureReadingPosition>) {
  const element = [...document.querySelectorAll<HTMLElement>(readingAnchors)]
    .find(element => (element.dataset.readingAnchor || element.id) === position.anchor?.key);
  const top = element && position.anchor
    ? window.scrollY + element.getBoundingClientRect().top - position.anchor.top
    : position.scrollY;
  window.scrollTo({ left: window.scrollX, top: Math.max(0, top), behavior: "instant" });
}
