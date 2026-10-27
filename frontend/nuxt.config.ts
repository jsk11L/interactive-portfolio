import portfolio from "./data/portfolio.json";

export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: false },
  modules: ["@pinia/nuxt"],
  css: ["~/assets/scss/portfolio.scss"],
  nitro: {
    prerender: {
      routes: [
        "/",
        "/contact",
        "/cv",
        ...portfolio.projects.map((project) => `/projects/${project.id}`),
      ],
      failOnError: true,
    },
  },
  build: {
    transpile: ["primevue"],
  },
  app: {
    head: {
      title: "Javier Sepúlveda — Software, música & otras ideas",
      htmlAttrs: { lang: "es" },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "El portafolio de Javier Sepúlveda. Desarrollo de software, investigación y proyectos personales. Diez universos de música, videojuegos, cine y manga para explorar la misma historia.",
        },
        { name: "theme-color", content: "#eeeae0" },
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    },
  },
});
