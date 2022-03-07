FROM node:lts-alpine
# ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm install --production --silent && mv node_modules ../
RUN apk add busybox-extras curl
RUN npm install -g @nestjs/cli
RUN npm install
COPY . .
EXPOSE 5000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]
