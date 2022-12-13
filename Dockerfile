# Build Stage 1
FROM node:16-alpine AS appbuild
WORKDIR /app-src
COPY package.json .
COPY tsconfig.json .
RUN npm i
ADD ./src ./src
RUN npm run build && mkdir /temp && cp -r ./build ./temp/build

# Build Stage 2
FROM node:16-alpine
WORKDIR /app-build
COPY package.json --from=appbuild /app-src/temp .
RUN npm i --omit=dev
EXPOSE 8080
CMD npm run start