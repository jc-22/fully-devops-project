FROM node:14
WORKDIR /usr/app
COPY package.sjon .
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node", "app.js"]