FROM node:carbon
WORKDIR /var/www/node
COPY . /var/www/node
RUN yarn && \
	npm install
EXPOSE 3000