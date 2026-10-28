# Free hosting for the portfolio

Reviewed on 27 October 2026 against current official provider documentation. This is research and a deployment proposal; no hosting account, billing setting or cloud resource was changed.

## Recommendation for this build

Use **Cloudflare Pages Free** with the existing static output. The portfolio does not require a runtime server, database or Pages Functions. The approved build at `e9e0fd1` contains 146 files, totals about 29.13 MiB and has a largest asset of about 5.08 MiB. It fits comfortably inside the relevant static-host limits. All 101 generated assets that originate in `frontend/public` have tracked source files; no local-only image is required. No generated `_worker.js` or `frontend/functions` directory was found.

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
| Production branch for the approved version | `codex/distinct-universe-designs` |
| Root directory | `frontend` |
| Framework preset | None; set the explicit static build values below |
| Build command | `npm run generate && npm run check:static && node --test ../scripts/theme-navigation.test.mjs` |
| Output directory, relative to root | `.output/public` |
| Build environment variable | `NODE_VERSION=22` |
| Server/API/database environment variables | None |

Use the generated static directory rather than an SSR deployment preset. Do not add a Functions layer for the current contact page: it already uses email links. A root-domain deployment does not need the GitHub Pages project-path adjustment.

[Cloudflare's Git integration guide](https://developers.cloudflare.com/pages/get-started/git-integration/) documents root/build/output settings and automatic deployments from Git. Select the production branch intentionally: `main` still contains the older baseline. The provider can assign a public URL when a project is created; this document does not invent that future URL.

## Deployment sequence for the approved version

1. Push the approved commits to `codex/distinct-universe-designs`. During this review, a live remote-ref check found that branch at `3b6397f`, while the approved local application is `e9e0fd1`. Do not deploy the remote branch before synchronizing it. No merge into `main` is required to use the current branch as the production branch.
2. In the owner's Cloudflare dashboard, choose **Workers & Pages > Create application > Pages > Connect to Git**. Connect the GitHub repository `jsk11L/interactive-portfolio`. Select the Free offering and the settings above. The owner may need to complete sign-in or authorize repository access; no account or permission was changed during this research.
3. Deploy and use the assigned `https://<chosen-project-name>.pages.dev` address. That pattern is an example, not a reserved or verified address. A purchased custom domain is optional. Subsequent pushes to the selected production branch trigger builds automatically.
4. Check `/`, `/cv`, `/contact` and an individual project URL by opening and reloading them. Then check a random opening, the palette/shuffle buttons, scroll preservation, language controls and mobile layout. Confirm the deployment's commit matches the approved application. Keep the previous deployment available for rollback until these checks pass.

Use the current Pages build image and the `NODE_VERSION` override rather than depending on a changing default. [Cloudflare documents this setting](https://developers.cloudflare.com/pages/configuration/build-image/). Dependencies install from the `frontend` directory; its lockfile is committed.

The existing generated HTML files support direct route visits on Pages. Preserve the generated `404.html`; a blanket SPA redirect is unnecessary. Leave caching at the platform default for the initial deployment. [Pages route and cache behavior](https://developers.cloudflare.com/pages/configuration/serving-pages/) documents both decisions.

## Avoiding the old hosting cost pattern

This proposal publishes only `.output/public` on Pages Free. The ten themes, animations, language controls and content navigation run in the browser; publishing them does not require adding Workers, a database or the historical FastAPI/Docker services. Custom domains and optional paid services are outside the free deployment proposal.

Cloudflare currently makes static asset requests free and unlimited when they do not invoke Functions; build and file limits still apply. This is a statement about the current plan, not a guarantee that provider terms never change. See the pricing and limits sources above.

Deploying here does not cancel old Google Cloud Run resources or any related storage. Their current existence and billing were not inspected. The Cloudflare account's current plan was not inspected either.

## Readiness evidence

- The approved output passes `node scripts/check-static.mjs`: 11 pages, 73 rendered links/assets and all ten universes.
- `node --test scripts/theme-navigation.test.mjs` passes all three navigation tests.
- The final output contains no server worker and requires no runtime secrets.
- Source assets are tracked, but the latest local commits still need pushing before a Git-connected deployment can use them.
- This task researched and documented deployment; it did not create a hosting project, publish the site, grant GitHub permissions or change cloud billing.

Context7 was attempted for current platform documentation but its transport was unavailable; the provider's official documentation was consulted directly instead.

The local preview is independent of hosting: `http://127.0.0.1:3002/` is available only on this computer. It is intentionally left running for the owner to review the page. Moving the portfolio does not stop or delete any existing Google Cloud Run resources.
