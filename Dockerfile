# Sử dụng image node 18 làm base image
FROM node:18

# Set working directory 
WORKDIR /app

# Copy app source code
COPY . .

# Cài đặt dependencies
RUN npm install

# Build app
RUN npm run build

# Expose port
EXPOSE 3000 

# Start app
CMD ["npm", "start"]
