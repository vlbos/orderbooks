FROM node:16-alpine

ENV NPM_CONFIG_LOGLEVEL info
ENV NODE_ENV development

ADD dist /home/node/app/dist
ADD package.json /home/node/app/package.json

ENV MONGODB_URI mongodb://db:27017
ENV JWT_SECRET ashdfjhasdlkjfhalksdjhflak
ENV SALT_SECRET 8

RUN chown -R node:node /home/node/app 

USER node
WORKDIR /home/node/app
RUN yarn

EXPOSE 8000

CMD yarn start
