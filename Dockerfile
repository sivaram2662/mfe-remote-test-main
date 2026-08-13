# Use Node 20 on Alpine Linux as the builder base image
FROM node:20-alpine AS builder
 
# Set working directory in the container to /app
WORKDIR /app
 
# Copy package.json and package-lock.json to the container
COPY package*.json ./
# Install all npm dependencies
RUN npm ci

# IMPORTANT: copy env BEFORE build
COPY .env .env
 
# Copy the rest of the application source code
COPY . .
# Build the Next.js application
RUN npm run build
 
# Use Node 20 on Alpine Linux as the production base image
FROM node:20-alpine
 
# Set the working directory in the container to /app
WORKDIR /app
 
# Copy package files from the builder stage
COPY --from=builder /app/package*.json ./
# Copy Next.js build output from the builder stage
COPY --from=builder /app/.next ./.next
# Copy public folder from builder stage
COPY --from=builder /app/public ./public
# Copy installed node modules from builder
COPY --from=builder /app/node_modules ./node_modules
 
# Expose port 3002 for the application
EXPOSE 3002
 
# Start the application using npm start
CMD ["npm", "start"]
 