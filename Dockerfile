FROM node:18-alpine3.14 as builder

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install --silent --only=development

COPY . .

RUN npm run build

FROM node:18-alpine3.14

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install --silent --only=production

COPY . .

COPY --from=builder /usr/src/app/dist ./dist

EXPOSE 3000

CMD ["npm", "start"]
