FROM node:8

COPY . /app

WORKDIR /app

RUN mkdir -p /app/public/uploads/

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]