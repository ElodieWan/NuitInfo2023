FROM node:14

WORKDIR /usr/src/app
COPY package*.json ./
COPY . .

RUN npm install && npm run build

EXPOSE 80
CMD ["npm", "start"]