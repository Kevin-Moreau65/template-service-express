FROM node:16-alpine

ADD . /app

WORKDIR /app

RUN npm i

EXPOSE 8080

CMD npm run start