FROM node:20.10.0

RUN apt-get update
RUN apt-get install -y ca-certificates fonts-liberation fonts-noto-color-emoji libasound2 libatk-bridge2.0-0 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm1 libgcc1 libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 lsb-release wget xdg-utils

RUN npm install -g pnpm

RUN mkdir -p /usr/local/team07/presentation-web/frontend
WORKDIR /usr/local/team07/presentation-web/frontend

COPY . .

RUN pnpm install
RUN pnpm build

EXPOSE 3000

CMD [ "node", ".output/server/index.mjs" ]
