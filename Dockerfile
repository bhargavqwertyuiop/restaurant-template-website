# Use the official Nginx image from the Docker Hub
FROM nginx:alpine

# Copy the contents of the current directory to the Nginx html directory
COPY . /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
