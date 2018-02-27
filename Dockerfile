FROM node:carbon
WORKDIR /var/www/node
COPY ./package.json /var/www/node
COPY ./yarn.lock /var/www/node
RUN yarn && \
	npm install
COPY . /var/www/node