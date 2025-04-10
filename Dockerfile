# Etapa base: instalación de dependencias
FROM node:18-alpine AS base
WORKDIR /app

COPY package*.json ./
COPY tsconfig.json ./
COPY jest.config.js ./
RUN npm install

# ----------------------------------------------------------
# Etapa de desarrollo: código con hot reload (ts-node-dev)
FROM base AS dev
WORKDIR /app

COPY . .
RUN npm install -g ts-node-dev

# Expone el puerto del servidor backend
EXPOSE 3030

CMD ["ts-node-dev", "--respawn", "--transpile-only", "src/server.ts"]

# ----------------------------------------------------------
# Etapa de producción: build optimizado y ejecución con Node
FROM base AS prod
WORKDIR /app

COPY . .

RUN npm run build

# Expone el puerto del servidor backend
EXPOSE 3030

CMD ["node", "dist/server.js"]
