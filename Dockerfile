FROM node:10

WORKDIR /app

RUN npm i -g @adonisjs/cli

COPY . /app

RUN npm i

EXPOSE 3333
