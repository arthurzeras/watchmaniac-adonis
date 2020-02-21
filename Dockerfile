FROM node:10

WORKDIR /app

COPY package*.json ./

RUN npm i -g @adonisjs/cli

RUN npm i

COPY . /app

EXPOSE 3333

CMD [ "npm", "run", "serve" ]
