FROM node:24-alpine3.21 AS builder

RUN apk add --no-cache build-base vips-dev
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci && npm cache clean --force

COPY . .

RUN npm run build

FROM node:24-alpine3.21 AS runner

ENV NODE_ENV=production
RUN apk add --no-cache vips

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci && npm cache clean --force

COPY ./favicon.png ./favicon.png
COPY ./public ./public
COPY ./tsconfig.json ./tsconfig.json

COPY --from=builder /app/dist ./dist

# Custom Pluginlar uchun yoqib qo'yiladi 
COPY --from=builder /app/src ./src

CMD ["npm", "run", "start"]