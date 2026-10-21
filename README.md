# Interactive Portfolio

A multilingual developer portfolio with a terminal-inspired interface, built with Nuxt and FastAPI.

## Overview

A personal website for presenting professional experience, projects and skills. The current design uses a dark palette, red accents and monospace typography.

## Features

- Interactive portfolio sections backed by a REST API.
- Persistent language selection.
- Localized interface copy and content fields.
- Containerized frontend, backend and database.

## Tech stack

| Layer | Technologies |
| --- | --- |
| Frontend | Nuxt 3, Vue 3, Pinia, PrimeVue, Chart.js, SCSS |
| Backend | Python, FastAPI, Motor, Pydantic |
| Database | MongoDB |
| Infrastructure | Docker Compose |

## Getting started

Review [docker-compose.yml](docker-compose.yml) and the backend settings in [config.py](backend/app/core/config.py). Create a local `.env` with the database and frontend API URLs appropriate for your environment.

The development services use ports 3000 for the frontend, 8000 for the API and 27017 for MongoDB. The Compose configuration includes development reload settings.

## Project structure

- `frontend/` — portfolio interface and translations.
- `backend/` — API, content and contact functionality.
- `docker-compose.yml` — local service configuration.

## Languages

Includes Spanish, English, German and Russian interface copy. This README is written in English. Translation definitions live in [usePortfolioCopy.ts](frontend/composables/usePortfolioCopy.ts).

## License

[MIT](LICENSE).

---

A project in [Javier Sepúlveda's portfolio](https://github.com/jsk11L).
