FROM node:12
WORKDIR /app
COPY package.json /app
RUN yarn install --only=production
RUN yarn run build
COPY . /app
EXPOSE 5001
CMD "cd /app; yarn start"