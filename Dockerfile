FROM node
WORKDIR /app
COPY . .
RUN yarn install
EXPOSE 8080
CMD ["yarn", "start"]
