FROM node:20-alpine

RUN npm install -g http-server

WORKDIR /app

COPY . .

EXPOSE 8080

CMD ["http-server", "-p", "8080"]
