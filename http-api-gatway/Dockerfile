# 1. Use official Node.js base image
FROM node:18

# 2. Set the working directory
WORKDIR /usr/src/app

# 3. Copy package.json and package-lock.json
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy all the source code
COPY . .


