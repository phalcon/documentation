#!/bin/bash

# Start a new documentation version from an existing one.
#
#   scripts/new-version.sh 5.20 5.21
#
# Copies the content, the sidebar and the redirects of the source version,
# rewrites the version prefix of internal links, and registers the routes
# (resources/nimbus/convert.py --register, run in the converter image).
#
# Afterwards: edit the new content, and update STABLE_VERSIONS or
# PRERELEASES in src/lib/site.mjs when the version is published.

set -e

FROM="$1"
TO="$2"
if [[ -z "${FROM}" || -z "${TO}" ]]; then
    echo "Usage: ${0} <from-version> <to-version>" >&2
    exit 1
fi

cd "$(dirname "$0")/.."

if [[ ! -d "src/content/docs-${FROM}" ]]; then
    echo "src/content/docs-${FROM} does not exist" >&2
    exit 1
fi
if [[ -e "src/content/docs-${TO}" ]]; then
    echo "src/content/docs-${TO} exists already" >&2
    exit 1
fi

cp -R "src/content/docs-${FROM}" "src/content/docs-${TO}"
cp "src/sidebar/${FROM}.mjs" "src/sidebar/${TO}.mjs"
cp "src/redirects/${FROM}.mjs" "src/redirects/${TO}.mjs"

# Internal links and redirects carry the version as URL prefix.
grep -rl "/${FROM}/" "src/content/docs-${TO}" "src/sidebar/${TO}.mjs" "src/redirects/${TO}.mjs" \
    | xargs sed -i "s|/${FROM}/|/${TO}/|g"
sed -i "s|version ${FROM}\.|version ${TO}.|" "src/sidebar/${TO}.mjs" "src/redirects/${TO}.mjs"

docker image inspect phalcon-docs-converter > /dev/null 2>&1 \
    || docker build -t phalcon-docs-converter resources/docker/converter
docker run --rm -v "$PWD":/docs phalcon-docs-converter resources/nimbus/convert.py --register

echo "Version ${TO} created from ${FROM}: src/content/docs-${TO}, src/sidebar/${TO}.mjs, src/redirects/${TO}.mjs, src/pages/${TO}"
