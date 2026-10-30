FROM mcr.microsoft.com/playwright:v1.61.0-noble

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN mkdir -p reports

ENV CI=true
ENV PLAYWRIGHT_DOCKER=true

CMD ["npm", "run", "test:docker"]
