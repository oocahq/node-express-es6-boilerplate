FROM node:10-alpine as builder 
RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh
    
WORKDIR /app
ADD package.json .
ADD yarn.lock . 
RUN yarn
ADD . . 
RUN yarn build 

CMD ["yarn", "start"]
