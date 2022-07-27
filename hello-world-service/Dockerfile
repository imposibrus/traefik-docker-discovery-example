FROM node:16.14.2-alpine

WORKDIR /app

COPY package.json package-lock.json /app/

RUN npm clean-install --no-fund --no-audit -q

COPY . /app/

CMD ["npm", "start"]
