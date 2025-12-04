# Dockerfile
# Stage 1: Builder - Installs dependencies
FROM node:20-alpine AS builder 
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

# Node-based Health Check
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD node -e "const http = require('http'); http.get({host: 'localhost', port: 3001, path: '/health'}, (res) => { if (res.statusCode === 200) process.exit(0); else process.exit(1); }).on('error', () => process.exit(1));"

# Stage 2: Runner - Final production image
FROM node:20-alpine
WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json .
COPY --from=builder /app/server.js .

EXPOSE 3001
ENV NODE_ENV production
CMD ["node", "server.js"]