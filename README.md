# sound-round-client

## Platform

Express.js + Vue.js + Heroku

## Setup

### Develop environment

```bash
## Frontend
cd frontend && npm run build-dev

## .. or `npm run serve` for frontend-only development

## Middle (backend at now)
cd middle && npm run start 

## open http://localhost:3000/
```

### Production

```bash

## Frontend
cd frontend && npm run build

## then git push and deploy to Heroku
## To change production backend URL fix `./envs/env.prod` and rebuild front
```

Current service: https://sound-round.herokuapp.com