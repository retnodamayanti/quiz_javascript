FROM nginx:alpine

# Set working directory
WORKDIR /app

# Copy static asserts
COPY . /app/quiz

# Copy Nginx conf
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080