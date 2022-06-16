FROM node:16

WORKDIR /build

COPY package.json /build
RUN yarn

COPY ./ ./
RUN yarn build

FROM nginx

RUN sed -i 's|/usr/share/nginx/html|/var/www|g' /etc/nginx/conf.d/default.conf

WORKDIR /var/www

COPY --chown=www-data:www-data --from=0 /build/build/ ./
