# base layer
FROM node:18-alpine AS base

# dependency layer
FROM base AS dependencies

## https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine
RUN apk add --no-cache libc6-compat

WORKDIR /app

## install dependencies
COPY package.json yarn.lock ./
RUN yarn cache clean
RUN yarn install --frozen-lockfile

# build source code
FROM base AS builder
WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

RUN yarn build

FROM base as runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]