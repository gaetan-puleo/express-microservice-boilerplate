FROM ubuntu:latest

RUN apt-get update && \
    apt-get install -y mongodb \
    curl \
 && curl -sL https://deb.nodesource.com/setup_12.x | bash - \
 && apt install -y nodejs \
 && rm -rf /var/lib/apt/lists/* \
    apt-get clean

RUN mkdir -p /data/db
RUN npm install -g yarn
COPY ./ /app
WORKDIR /app
RUN yarn

CMD mongod --fork ;yarn start:docker
