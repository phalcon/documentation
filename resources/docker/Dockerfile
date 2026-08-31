FROM node:22-alpine

LABEL authors="team@phalcon.io"

# git: nimbus reads the git history for "last updated" dates and edit links.
# pnpm: the package manager that the nimbus scaffold uses.
RUN apk add --no-cache git \
    && npm install -g pnpm@10

# The container runs as the "node" user (uid 1000). Files that the build
# writes into the bind mount (node_modules, dist, .astro) then belong to
# the host user.
USER node

WORKDIR /docs

EXPOSE 4321

CMD ["pnpm", "dev", "--host", "0.0.0.0", "--port", "4321"]
