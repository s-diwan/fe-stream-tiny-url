FROM node:alpine as builder
WORKDIR '/client'
COPY package.json .
RUN npm install 
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=builder /client/dist/tiny-client /usr/share/nginx/html