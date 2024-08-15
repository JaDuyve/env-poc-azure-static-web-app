FROM node:20.11.1-alpine3.19 AS build

WORKDIR /app

COPY package.json ./

RUN npm install

ENV PATH /app/node_modules/.bin:$PATH

COPY . .

RUN npm run build

FROM nginx:1.25.4-alpine3.18

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /var/www/html/

EXPOSE 3000

WORKDIR /var/www/html
COPY ./env.sh .
COPY .env .

# Add bash
RUN apk add --no-cache bash

# Make our shell script executable
RUN chmod +x env.sh

# Start Nginx server
CMD ["/bin/bash", "-c", "/var/www/html/env.sh && nginx -g \"daemon off;\""]
