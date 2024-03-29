FROM node

WORKDIR /usr/app

COPY package*.json ./
COPY .env          ./

RUN yarn

COPY . .

EXPOSE 8080

CMD ["yarn", "start:dev"]