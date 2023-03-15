FROM node:18-alpine as deps

ENV NODE_ENV=production

RUN apk add --no-cache libc6-compat

WORKDIR /webApp

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:18-alpine AS builder

ENV NODE_ENV = production

WORKDIR /webApp

COPY next.config.js ./
COPY package.json yarn.lock ./
COPY --from=deps /webApp/node_modules ./node_modules

COPY src ./src

RUN yarn build

FROM node:18-alpine AS runner
WORKDIR /webApp

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY  --from=builder --chown=nextjs:nodejs /webApp/.next/standalone ./
COPY  --from=builder --chown=nextjs:nodejs /webApp/.next/static ./.next/static

USER nextjs

ENV PORT=3000

CMD [ "node", "server.js" ]