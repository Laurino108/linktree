# Production Dockerfile
# Use the file to build for production
FROM node:14-alpine

LABEL org.opencontainers.image.title="Laurin's Personal Portfolio" \
      org.opencontainers.image.description="Web Server showing the Portfolio Page of Laurin" \
      org.opencontainers.image.authors="@laurino108"

# Setting Work Directory to /app
WORKDIR /app

# Copying all files into /app
COPY . .

# Then run npm ci to install all dependencies
RUN npm ci; \ 
    # Compile the app
    npm run build; \
    # Install server globally for the container
    npm install -g serve


# React Port
EXPOSE 4000

# Start the app and listen to port 4000
CMD ["serve", "-s", "build", "-l", "4000"]
