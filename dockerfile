# ---- Stage 1: Build ----
FROM node:18-alpine AS builder

WORKDIR /app

# Cài các dependencies
COPY package*.json ./
COPY tsconfig.json ./
COPY next.config.ts ./
COPY .eslintrc* ./
COPY src ./src
COPY public ./public

RUN npm install

# Build Next.js App
RUN npm run build

# ---- Stage 2: Run (Production) ----
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Chỉ copy những gì cần thiết để chạy
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/next.config.ts ./next.config.ts

EXPOSE 3000

CMD ["npm", "start"]
