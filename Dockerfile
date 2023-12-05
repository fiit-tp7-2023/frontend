FROM node:20.10.0

RUN npm install -g pnpm

RUN mkdir -p /usr/local/team07/presentation-web/frontend
WORKDIR /usr/local/team07/presentation-web/frontend

COPY . .

RUN pnpm install
RUN pnpm build

EXPOSE 3000

CMD [ "pnpm", "start" ]
