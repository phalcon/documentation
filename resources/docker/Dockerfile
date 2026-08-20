FROM zensical/zensical:0.0.56

LABEL authors="team@phalcon.io"

# The Zensical-compatible fork of mike handles versioned deploys (it shells out
# to `zensical build` instead of `mkdocs build`). It is not published on PyPI,
# so pip installs it from git. git is also required at runtime for mike's
# gh-pages branch operations, and the base (Alpine) image does not ship it.
# requests is used by update-nfr.py (the NFR list step) and is not in the base.
#
# The base image already provides the right entrypoint/CMD/workdir
# (`/sbin/tini -- zensical`, `serve --dev-addr=0.0.0.0:8000`, `/docs`), so the
# serve script and the CI deploy step work unchanged.
RUN apk add --no-cache git \
    && pip install --no-cache-dir requests "git+https://github.com/squidfunk/mike.git"
