# Interactive Portfolio

Javier Sepúlveda’s personal portfolio: software development, research, education and eight project case studies. Nuxt 3 generates a static website; the published site needs no application server, database or Cloud Run service.

## Preview

From the repository root:

```powershell
npm --prefix frontend ci
npm --prefix frontend run generate
npm --prefix frontend run check:static
npm --prefix frontend run preview:static
```

Open the local address printed by the preview command. For live development, use `npm --prefix frontend run dev`. The static preview binds only to `127.0.0.1`.

## Ten compositions

The selector keeps the same verified content while changing its structure and visual language. Open a specific direction with `/?theme=<id>`.

| ID           | Inspiration                  | Reading structure                                                         |
| ------------ | ---------------------------- | ------------------------------------------------------------------------- |
| `dearly`     | Kingdom Hearts II            | White journal with chapter index and illustrated project index            |
| `phantom`    | Persona 5                    | Asymmetric poster wall, diagonal biography and career bands               |
| `bloodborne` | Bloodborne                   | Biographical archive, vertical chronology and project inventory           |
| `daydream`   | Daydream Nation              | Full-screen candle, then an open record gatefold and liner notes          |
| `animals`    | Pink Floyd’s Animals         | Alternating wide project stories and four-column career structure         |
| `ferment`    | MASS OF THE FERMENTING DREGS | Overhead ink illustration, offset image essay and open margins            |
| `redroom`    | Twin Peaks                   | Centered interlude and uninterrupted widescreen case studies              |
| `eva`        | Evangelion                   | Biographical sidebar and compact terminal grid                            |
| `edgerunner` | Cyberpunk Edgerunners        | Large project names opposite a sticky selected illustration               |
| `friend`     | 20th Century Boys            | Javier’s ink portrait, hand-drawn panels and irregular project storyboard |

The references stay in the artwork, small visual details and the inspiration caption. Main copy describes Javier, his résumé and his projects. `/cv` also adapts its screen composition; printing retains a clean document. `/contact` uses email links and copying, without pretending to submit to an email service.

English is the initial language. The floating language button is available from the first screen and on every route. Explicit choices are remembered under `portfolio-language`; Spanish, English, German and Russian content is available, with newer creative copy currently using Spanish or English. Theme selection and motion preferences are remembered separately. Decorative animation respects reduced-motion settings and the pause control.

## Source map

- `frontend/data/portfolio.json`: shared profile, experience, skills and projects.
- `frontend/data/projectEditorial.ts`: verified project descriptions in four languages.
- `frontend/data/compositions.ts`: each theme’s section order and default catalog view.
- `frontend/data/universes.ts`: inspiration registry and source notes.
- `frontend/components/PortfolioComposition.vue`: composition shell; biography, projects and experience remain shared content components.
- `frontend/components/LanguageControl.vue`: floating language menu.
- `frontend/components/*Hero.vue`, `UniverseScene.vue`, `MangaOpening.vue`, `FactorySmoke.vue`: opening scenes and illustration details.
- `frontend/assets/scss/_compositions.scss`: ten content compositions.
- `frontend/assets/scss/_atmospheres.scss`: scene typography and motion.
- `frontend/assets/scss/_compositions-responsive.scss`: responsive compositions.
- `frontend/assets/scss/_resume-compositions.scss`: screen résumé layouts, leaving print styles intact.
- Existing `_studio-*`, `_universe-*`, `_catalog.scss`: base typography, route styles and original scene vocabulary.
- `scripts/`: local asset preparation, static preview and validation.
- `.github/workflows/validate.yml`: static build and content/resource validation on pushes and pull requests.

The older terminal components, backend and Docker setup remain as historical source. They are not used by the current static site. Generated output, dependencies, environment files and secrets are ignored by Git.

## Content, artwork and review

- [Design direction and palette plan](docs/design-v3.md)
- [Project evidence and limitations](docs/project-sources.md)
- [Visual references](docs/visual-references.md)
- [Original scene prompts](docs/universe-artwork.md) and [project artwork](docs/project-artwork.md)
- New artwork: [Ferment perspective](docs/ferment-art-v3.md), [Javier’s manga portrait](docs/manga-art-v3.md), [photographic flame](docs/flame-art-v3.md)
- [Previous review screenshots](docs/previews/v2/index.md)
- [Current comparison: openings, projects, mobile and résumé](docs/previews/v3/index.md)
- [Current verification report](docs/verification-v3.md)

Project covers are original conceptual illustrations, labeled as such, rather than product screenshots. Fonts are self-hosted with their license files. The résumé’s publication still needs a precise bibliographic reference.

## Static hosting

For Cloudflare Pages, use root `frontend`, build command `npm run generate`, output `.output/public`, and a compatible Node.js 22+ runtime. No API or database environment variables are required. The generated output can also be served by other static hosts. A GitHub Pages project path requires the appropriate Nuxt `app.baseURL` before generation.

Building or committing does not deploy the site or change existing Google Cloud resources.

## Validation

`npm --prefix frontend run generate` prerenders the home page, contact, résumé and eight project pages, failing if a route cannot be generated. `npm --prefix frontend run check:static` checks initial English markup, the language control, internal resources, scene/project art, CV experience, month-only dates and ten distinct composition definitions that retain every CV section.
