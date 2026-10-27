# Verificación de la segunda renovación

25 de octubre de 2026. Revisión local; no despliegue.

- `npm --prefix frontend run generate`: completado. Once páginas de contenido (inicio, contacto, CV y ocho proyectos), con sus payloads y páginas de recuperación, generan 24 rutas.
- `node scripts/check-static.mjs`: completado. Once páginas, 47 enlaces/recursos renderizados, diez universos registrados, imágenes de todos los proyectos y escenas, experiencias del CV y fechas mensuales.
- `git diff --check`: sin errores de espacios. Git informa únicamente de la normalización habitual de finales de línea de Windows.
- Navegador: los diez universos se revisaron a 1440 × 900 y 390 × 844. No se detectaron imágenes rotas ni desbordamiento horizontal en esas resoluciones.
- Interacciones: selección de estilo, modo aleatorio, pausa/reanudación, nota de inspiración, navegación por secciones, transición de Persona, filtros, búsqueda por LibGDX, cambio de portada, alternancia de vistas y ficha nueva de Block Breaker.
- Idiomas: se comprobó la traducción de la ficha de Block Breaker al inglés y el retorno al español. Las ocho fichas incluyen español, inglés, alemán y ruso; los textos creativos nuevos de las portadas usan español o inglés según el idioma.
- Teclado: el menú de KH2 permite recorrer las opciones con flechas y abrir el CV con Enter; el selector se cierra con Escape.
- La consola de la sesión revisada no mostró errores. El generador conserva advertencias no bloqueantes sobre Browserslist y una importación interna de Nitro durante la generación; la salida estática y su comprobación terminaron correctamente.

[Capturas de los diez universos, en escritorio y móvil](previews/v2/index.md).

Las imágenes de proyecto son conceptuales; no se ejecutaron los ocho proyectos para evaluar sus funciones o rendimiento. La verificación del contenido se basa en las [fuentes documentadas](project-sources.md).
