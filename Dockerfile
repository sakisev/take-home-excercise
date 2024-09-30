ARG NODE_VERSION=20.14.0

FROM node:${NODE_VERSION}-alpine as build

WORKDIR /app

# Copy package.json so that package manager commands can be used.
COPY package.json .

RUN npm install

COPY . .
# Run the build script.
RUN npm run build

# Expose the port that the application listens on.
EXPOSE 3000

# Run the application.
CMD npm run preview
