FROM node:14-alpine as build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# React app for production
RUN npm run build

# Using Nginx for serving static files
FROM nginx:alpine

# Copying the built files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]