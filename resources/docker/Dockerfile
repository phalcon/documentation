FROM squidfunk/mkdocs-material:9

LABEL authors="team@phalcon.io"

# mike (versioned deploys) and markdown-include are the only packages the
# base image does not already ship. Everything else in the toolchain
# (mkdocs, mkdocs-material, minify, redirects, requests) comes from the base.
#
# click is pinned below 8.3: click 8.3.x silently disables the default
# --livereload behavior of `mkdocs serve` (no file watching, no rebuilds).
# Remove the pin once the upstream issue is resolved:
# https://github.com/squidfunk/mkdocs-material/issues/8478
RUN pip install --no-cache-dir \
    "click<8.3" \
    markdown-include \
    mike
