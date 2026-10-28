# Free hosting for the portfolio

Reviewed on 27 October 2026 against current official provider documentation. This is research and a deployment proposal; no hosting account, billing setting or cloud resource was changed.

## Recommendation for this build

Use **Cloudflare Pages Free** with the existing static output. The portfolio does not require a runtime server, database or Pages Functions. The checked build contains 134 files, totals about 28.62 MiB and has a largest asset of about 5.08 MiB. It fits comfortably inside the relevant static-host limits.

The repository already points to an existing [Vercel portfolio](https://javier-sepulveda-dev.vercel.app/), which returned HTTP 200 during review. Staying with Vercel is also reasonable if its account is on an appropriate free plan; that account's billing plan was not inspected. The public URL is not evidence that the new design branch has been deployed.

## Comparison

| Host | Relevant free limits | Fit for this portfolio |
| --- | --- | --- |
| Cloudflare Pages | Static requests are free and unlimited. Free plan: 500 builds/month, one concurrent build, 20,000 files, 25 MiB per asset. | Preferred for an image-rich static portfolio. Keep the deployment static; Functions use separate Workers quotas. |
| GitHub Pages | Available for public repositories on GitHub Free. Published site up to 1 GB; soft bandwidth limit of 100 GB/month. | Good if everything should stay on GitHub. A project-site subpath needs a matching Nuxt base URL. |
| Vercel Hobby | Free for personal, non-commercial projects. Usage caps apply; excess usage generally requires waiting for the allowance to reset. | Convenient because a public portfolio URL already exists here. The current account plan remains unverified. |
| Netlify Free | 300 credits/month, hard limit, no automatic recharge on Free. | Viable, but the shared credit budget is less attractive for this portfolio's images and frequent design iterations. |

Sources: [Cloudflare static pricing](https://developers.cloudflare.com/pages/functions/pricing/), [Cloudflare limits](https://developers.cloudflare.com/pages/platform/limits/), [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits), [Vercel Hobby](https://vercel.com/docs/plans/hobby), [Netlify Free](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans/).

## Concrete Cloudflare Pages settings

| Setting | Value |
| --- | --- |
| Repository | `jsk11L/interactive-portfolio` |
| Branch for reviewing the current redesign | `codex/distinct-universe-designs` |
| Root directory | `frontend` |
| Build command | `npm run generate` |
| Output directory, relative to root | `.output/public` |
| Runtime during build | Node.js 22+ |
| Server/API/database environment variables | None |

Use the generated static directory rather than an SSR deployment preset. Do not add a Functions layer for the current contact page: it already uses email links. A root-domain deployment does not need the GitHub Pages project-path adjustment.

[Cloudflare's Git integration guide](https://developers.cloudflare.com/pages/get-started/git-integration/) documents root/build/output settings and automatic deployments from Git. Select the production branch intentionally: `main` still contains the older baseline. The provider can assign a public URL when a project is created; this document does not invent that future URL.

The local preview is independent of hosting: `http://127.0.0.1:3002/` is available only on this computer. It is intentionally left running for the owner to review the page. Moving the portfolio does not stop or delete any existing Google Cloud Run resources.
