sima.dev — Cam Sima's portfolio site, built with [Next.js](https://nextjs.org/) 14 App Router.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Static build

This project is configured for static export (`output: "export"` in `next.config.js`). There is no server-side code — the contact form opens the visitor's email client via a `mailto:` link instead of calling an API route.

```bash
npm run build
```

This produces a fully static site in `out/`. Preview it locally with:

```bash
npm run start
# runs: npx serve out
```

## Deploying on Coolify

1. **Create a new resource** in Coolify → *Add Resource* → *Public Repository* (or connect your GitHub app) and point it at this repo/branch.
2. **Build pack**: choose **Static Site** (Coolify's Nixpacks-based static build pack), or configure it manually as below.
3. **Build settings**:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Publish/output directory: `out`
4. **Port**: not needed for a static site — Coolify serves the `out/` directory directly via its built-in static file server (Nginx/Caddy under the hood).
5. **Environment variables**: none are required. The site has no server-side secrets since the API route was removed.
6. **Domain**: attach `sima.dev` (or your domain) under the resource's *Domains* tab and let Coolify issue the Let's Encrypt certificate.
7. Click **Deploy**. Coolify will run the install/build steps in a container, then publish the contents of `out/` behind its static server.

### If you'd rather use a Dockerfile

Coolify also supports a plain static Dockerfile if you prefer full control over the serving layer:

```dockerfile
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/out /usr/share/nginx/html
EXPOSE 80
```

Set Coolify's build pack to **Dockerfile** and it will build and serve this image directly.

## Learn more

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Static Exports](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [Coolify Documentation](https://coolify.io/docs)
