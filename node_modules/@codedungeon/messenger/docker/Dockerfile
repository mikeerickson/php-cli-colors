FROM node:alpine

LABEL name="Mike Erickson"
LABEL maintainer="codedungeon@gmail.com"

COPY ./docker/.profile /root/.profile
COPY ./docker/aliases.sh /root/aliases.sh

# create directory in container
RUN mkdir -p /usr/code/app
WORKDIR /usr/code/app

# copy any files necessary for including modules
COPY package.json /usr/code/app/
COPY yarn.lock /usr/code/app/

# install node modules, this should be done with yarn instead
RUN yarn install

# copy over files to container (node_modules should be ignored as deifned in .dockerignore)
COPY . /usr/code/app

# this is not required as the container is not hosting any network resoruces
# ENV PORT 3000
# EXPOSE ${PORT}

# kick off the tests
CMD [ "yarn","run", "test" ]

# run container as follows
# make sure to use the -l so it will load profile
# docker run  --name debug-ci -v$(pwd):/usr/code/app --rm -it dev-node ash -l