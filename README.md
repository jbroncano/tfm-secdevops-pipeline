# TFM SecDevOps: pipeline

Aplicación de validación (React + Express + MongoDB) y los pipelines de GitHub Actions del TFM.

| Workflow | Estado |
|---|---|
| `.github/workflows/base.yml` | Pipeline base, sin controles de seguridad |
| `.github/workflows/seguro.yml` | Pendiente: mismo pipeline con controles de seguridad |

## Ramas

- `feature/*`: trabajo diario, se integra por PR a `develop`.
- `develop`: integración. Rama por defecto.
- `release/*`: sale de `develop`, se integra por PR a `main`.
- `main`: solo acepta PR desde `release/*` (o `hotfix/*`). Cada integración se etiqueta `vX.Y.Z`.

`main` y `develop` están protegidas: sin push directo, PR obligatorio y pipeline en verde.

## Local

```bash
docker compose up --build   # http://localhost:8080
```

Tests del backend con una MongoDB local:

```bash
docker run -d --rm -p 27017:27017 mongo:7
cd backend && npm ci && MONGO_URL=mongodb://127.0.0.1:27017/expenses_test npm test
```

## Notificaciones

GitHub avisa por correo a quien lanzó el workflow cuando falla. Se configura en
<https://github.com/settings/notifications>, apartado "Actions".
