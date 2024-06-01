FROM node:20

WORKDIR /myapp

COPY . .

COPY package*.json ./
RUN npm install

EXPOSE 3000

CMD [ "npm", "dev" ]