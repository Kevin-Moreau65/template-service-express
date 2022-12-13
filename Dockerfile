# Build Stage 1
FROM node:16-alpine AS appbuild
WORKDIR /app-src
COPY package.json .
RUN npm i
ADD ./src ./src
RUN npm run build

# Build Stage 2
FROM node:16-alpine
WORKDIR /app-build
COPY package.json .
RUN npm i --omit=dev
COPY --from=appbuild /app-src/build ./build
EXPOSE 8080
CMD npm run start