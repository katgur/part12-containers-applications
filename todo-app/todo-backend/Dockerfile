FROM node:16
  
WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci --only=production
  
USER node

ENV NODE_ENV production

CMD npm start