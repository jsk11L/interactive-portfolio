# Curriculum Interactivo

Portafolio de Javier Sepúlveda, construido con Nuxt 3, Vue 3 y Pinia. Se genera como una web estática: el visitante no necesita FastAPI, MongoDB ni un servicio en Cloud Run.

## Desarrollo y vista previa

```powershell
cd frontend
npm ci
npm run dev
```

Para revisar exactamente los archivos que se publicarán:

```powershell
cd frontend
npm run generate
npm run check:static
npm run preview:static
```

La vista previa estática escucha en `http://127.0.0.1:3000`. Puede elegirse otro puerto desde la raíz con `node scripts/serve-static.mjs 3001`.

## Diez universos

- Juegos: **Dearly / II** (menú blanco de Kingdom Hearts II, viajero y helado azul), **Phantom** (Persona 5, máscara, tarjeta, estrellas y transición de combate) y **The Hunter** (Bloodborne, ciudad gótica, farol y niebla).
- Álbumes: **Daydream** (pantalla completa de vela a la derecha, llama y humo; información debajo), **Animals** (cuatro chimeneas, humo y un pequeño cerdo sobre la fábrica) y **Ferment** (MASS OF THE FERMENTING DREGS, tinta, auriculares, acuarela y cable rojo).
- Pantalla: **The Red Room** (Twin Peaks, telones, suelo de espiga y silla vacía), **MAGI** (Evangelion, terminales, tipografía condensada y franjas de alerta) y **Edgerunner** (Cyberpunk Edgerunners, chaqueta amarilla y estelas verdes).
- Manga: **Friend** (20th Century Boys, papel, tramas, viñeta y símbolo de una mano con ojo).

El selector agrupa los diez estilos y permite fijar uno, volver a selección aleatoria o pausar las animaciones. En modo aleatorio se elige un universo por sesión. Los enlaces `?theme=dearly`, `phantom`, `bloodborne`, `daydream`, `animals`, `ferment`, `redroom`, `eva`, `edgerunner` y `friend` abren una versión concreta. La elección manual y el idioma se guardan en el navegador, con funcionamiento alternativo si el almacenamiento está bloqueado. Se respeta `prefers-reduced-motion`.

Cada portada muestra su influencia y una nota desplegable con la referencia. El contenido permanece accesible al desplazarse en todos los estilos. El catálogo ofrece filtros, búsqueda por tecnología y dos vistas: pistas con portada seleccionable y galería de carteles. Una barra de progreso conecta portada, proyectos, biografía y experiencia.

La página `/cv` reúne el currículum y permite imprimirlo o guardarlo como PDF desde el navegador. `/contact` ofrece correo, LinkedIn, GitHub y copia de la dirección. No simula el envío de un formulario: no hay un servicio de correo contratado.

## Contenido

- `frontend/data/portfolio.json`: perfil, experiencias, habilidades y proyectos. Fuente compartida para los diez diseños.
- `frontend/composables/usePortfolioCopy.ts`: traducciones existentes del contenido.
- `frontend/data/projectEditorial.ts`: ocho fichas actualizadas en los cuatro idiomas, con contexto y aspectos destacados.
- `frontend/composables/useStudioCopy.ts`: textos de la nueva interfaz en español, inglés, alemán y ruso.
- `frontend/data/universes.ts`: registro, referencias y notas de los diez universos.
- `frontend/assets/scss/_studio-*.scss`, `_universe-*.scss` y `_catalog.scss`: estilos compartidos, escenas, catálogo y adaptación móvil.

La experiencia, formación y fechas del CV se conservan. Se reformuló el perfil y se revisaron los proyectos contra sus repositorios. Se añadieron University Timetabling y Block Breaker a SimulaPUCV, OmniDesk, JamSpace, InteriorTwin, LoopMania y Judge Bot. Los prototipos se identifican como tales y los enlaces históricos que devolvían 404 se retiraron. Evidencia y límites de cada ficha: [docs/project-sources.md](docs/project-sources.md). Sigue pendiente precisar la referencia bibliográfica de la publicación del CV.

Las ocho portadas nuevas son ilustraciones conceptuales originales, identificadas como tales en la interfaz; no se presentan como capturas del producto. Pesan aproximadamente 1,23 MB en total. Hay seis ilustraciones nuevas para las escenas; Persona, Evangelion y manga también usan elementos construidos en SVG/CSS. Las fuentes se sirven localmente, con sus licencias. Procedencia y prompts: [escenas](docs/universe-artwork.md), [proyectos](docs/project-artwork.md) y [vela original](docs/artwork.md). Referencias visuales: [docs/visual-references.md](docs/visual-references.md).

## Publicar gratis en Cloudflare Pages

1. Conectar este repositorio a un proyecto **Pages** del plan gratuito.
2. Configurar directorio raíz: `frontend`.
3. Comando de compilación: `npm run generate`.
4. Directorio de salida: `.output/public`.
5. Usar Node.js 22 o superior compatible con las dependencias del lockfile.
6. Publicar en el subdominio `pages.dev` asignado. No hacen falta variables de API, base de datos, Functions ni secretos.

La salida también puede alojarse en GitHub Pages. Para un sitio de proyecto bajo `/Curriculum-Interactivo/`, habría que configurar `app.baseURL` antes de compilar; en un dominio propio o un sitio de usuario se puede usar `/`.

Esta renovación no crea un despliegue ni elimina recursos de Google Cloud. Los recursos anteriores deben revisarse por separado para detener posibles cobros.

## Verificación

[Capturas de los diez estilos](docs/previews/v2/index.md) y [registro de verificación de esta revisión](docs/verification-v2.md).

`npm run generate` prerenderiza todas las fichas, el inicio, el contacto y el CV, con fallo si una ruta no puede generarse. `npm run check:static` comprueba once páginas, sus enlaces y recursos internos, las imágenes de proyectos y escenas, el registro de diez universos y las experiencias del CV. También verifica que las fechas mensuales no cambian al usar la zona horaria de Chile.

El código anterior de `backend/`, Docker y los componentes de la versión terminal se conserva como referencia; no se usa para servir esta versión.
