FROM node:20.10.0-slim as base

RUN mkdir -p /app/
WORKDIR /app/
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY --link . .

FROM base AS dev
ENV HUSKY=0
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install && pnpm run build

FROM base
ENV HUSKY=0
RUN apt update && apt install -y --no-install-recommends libglib2.0-0 libnss3 libdbus-1-3 libatk1.0-0 libatk-bridge2.0-0 libcups2 libdrm2 libxcomposite1 libxdamage1 libxext6 libxfixes3 libxrandr2 libgbm1 libxkbcommon0 libpango-1.0-0 libcairo2 libasound2 && apt clean
RUN npm pkg delete scripts.prepare
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --prod
COPY --from=dev /app/.output /app/.output
COPY --from=dev /root/.cache/puppeteer /root/.cache/puppeteer

EXPOSE 3000
CMD [ "node", ".output/server/index.mjs" ]
