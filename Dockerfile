FROM node:16.13-alpine

WORKDIR /usr/app

COPY package.json package.json

RUN npm install

COPY src src
COPY tsconfig.json tsconfig.json

RUN npm run build

CMD ["npm", "start"]
