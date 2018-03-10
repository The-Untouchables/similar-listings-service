############################################################
# Dockerfile to build similar-listings-service container images
# Based on node tip
############################################################

FROM node:carbon

# Set warning to debugging
ENV NPM_CONFIG_LOGLEVEL warn

# Create working directory for code
RUN mkdir -p /hackbnb/app

# Set working directory
WORKDIR /hackbnb/app

# Copy the the latest source code to CWD
ADD . /hackbnb/app

# Install all Deps
RUN npm install --only=production

# Expose PORT with outside world
EXPOSE 3007

RUN echo "Image build complete."

CMD [ "npm", "start" ]
