FROM node:7

# Create app directory
RUN mkdir -p /usr/src/app/relay
WORKDIR /usr/src/app/relay

COPY . .

# Install app dependencies
RUN npm install

# Setup environment
ENV WEPLAY_REDIS_URI "redis:6379"


# Run
CMD [ "node", "index.js" ]