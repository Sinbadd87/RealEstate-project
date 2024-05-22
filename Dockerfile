FROM node:latest AS builder

WORKDIR /app

COPY package*.json ./
RUN npm i

COPY client/package*.json client/
RUN npm i --prefix client 

COPY server/package*.json server/
RUN npm i --prefix server 

COPY client/ client/

COPY server/ server/

RUN npm run build --prefix client

USER node

CMD [ "npm", "run", "start" ]

EXPOSE 8000
