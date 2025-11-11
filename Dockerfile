FROM node:20 AS build
ARG VITE_BACKEND_URL=https://glorious-space-waddle-9grv5qvpvpv2xx4q-3000.app.github.dev/api/v1
WORKDIR /build
COPY package.json .
COPY package-lock.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
# Start the SSR server
CMD ["npm", "start"]