FROM node:14.5.0

WORKDIR /usr/app

COPY ./tsconfig.json .
COPY ./package* .
COPY ./build ./build

RUN npm ci --production

CMD ["npm", "start"]