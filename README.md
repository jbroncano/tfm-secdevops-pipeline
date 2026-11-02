# Expense Tracker

Aplicación de validación (React + Express + MongoDB) del TFM SecDevOps.

El pipeline vive en [secdevops-pipeline](https://github.com/tfm-secdevops-unir/secdevops-pipeline). `.github/workflows/ci.yml` solo lo llama, fijado por SHA, y cualquier cambio en `.github/` requiere la revisión de `CODEOWNERS`.

## Ramas

- `feature/*`: trabajo diario, se integra por PR a `develop`.
- `develop`: integración. Rama por defecto.
- `release/*`: sale de `develop`, se integra por PR a `main`.
- `main`: solo acepta PR desde `release/*` (o `hotfix/*`). Cada integración se etiqueta `vX.Y.Z`.

`main` y `develop` están protegidas: sin push directo, PR obligatorio y pipeline en verde.

Después de clonar, activa los hooks del repo: `git config core.hooksPath .githooks`.

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
