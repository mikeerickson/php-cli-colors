# Docker Info

## Description

Repo contains a simple `Dockerfile` to create simple node container which can be used to test message output (which will differ from running locally on macOS)

When building, note the tag name used `dev-node` to define container, this can be whatever you wish so long as it is also referenced when running container (see below)

## Important

Make sure to use the `Dockerfile` and `.dockerignore` files contained in the repo

## Usage

- Build Image

```bash
> docker build -f docker/Dockerfile -t dev-node .
               Dockerfile           tag         build directory
```

- Run container

```bash
> docker run  --name debug-ci -v$(pwd):/usr/src/app --rm -it dev-node ash -l
```

_--name_ is local name as displayed in `docker ps`

_-v_ is mounted volume so we can edit locally (destination is the same directory defined in `Dockerfile`)

`dev-node` is the same name which was defined in build process

```bash
> docker run  --name debug-ci -v$(pwd):/usr/src/app --rm -it dev-node ash -l
              instance name     $(pwd):work/dir              container ash (apline bash)  -l will load ~/.profile
```

### References
