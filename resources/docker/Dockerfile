FROM squidfunk/mkdocs-material:9

LABEL authors="team@phalcon.io"

# mike (versioned deploys) and markdown-include are the only packages the
# base image does not already ship. Everything else in the toolchain
# (mkdocs, mkdocs-material, minify, redirects, requests) comes from the base.
RUN pip install --no-cache-dir \
    markdown-include \
    mike
