############################################################
# Dockerfile to build similar-listings-service container images
# Based on node tip
############################################################

FROM node:latest

# Set warning to debugging
ENV NPM_CONFIG_LOGLEVEL warn

# Create working directory for code
RUN mkdir -p /hackbnb/app

# Set working directory
WORKDIR /hackbnb/app

# Copy the the latest source code from GitHub to CWD
RUN git clone https://github.com/The-Untouchables/similar-listings-service.git /hackbnb/app

# Install all Deps
RUN npm install

# Expose PORT with outside world
EXPOSE 3007

RUN echo "Image build complete."

CMD [ "npm", "start" ]
