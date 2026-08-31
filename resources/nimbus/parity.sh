#!/bin/bash

# Compare one documentation version between the published gh-pages tree and
# the nimbus build: page URLs, redirect pages, and heading ids (h2-h4).
#
#   resources/nimbus/parity.sh 5.20
#
# Prints the URLs that exist on one side only and the pages whose heading
# ids differ. Details go to resources/nimbus/work/parity-<version>/.

set -e

V="$1"
if [[ -z "${V}" ]]; then
    echo "Usage: ${0} <version>" >&2
    exit 1
fi

cd "$(dirname "$0")/../.."

WORK="resources/nimbus/work/parity-${V}"
mkdir -p "${WORK}"

# Page URLs: every index.html, as a path without the version prefix.
git ls-tree -r --name-only "origin/gh-pages:${V}" \
    | grep '/index.html$' | sed 's|/index.html$||' | sort > "${WORK}/old-urls.txt"
(cd "dist/${V}" && find . -name index.html \
    | sed 's|^\./||; s|/index.html$||' | grep -v '^index.html$' | sort) > "${WORK}/new-urls.txt"

echo "URLs only in gh-pages:"
comm -23 "${WORK}/old-urls.txt" "${WORK}/new-urls.txt" | sed 's/^/  /'
echo "URLs only in nimbus:"
comm -13 "${WORK}/old-urls.txt" "${WORK}/new-urls.txt" | sed 's/^/  /'

# Heading ids of the pages both sides have.
: > "${WORK}/anchors.txt"
same=0
different=0
while read -r page; do
    new_file="dist/${V}/${page}/index.html"
    [[ -f "${new_file}" ]] || continue
    old=$(git show "origin/gh-pages:${V}/${page}/index.html" 2>/dev/null \
        | grep -oE '<h[2-4][^>]* id="?[^" >]+"?' | grep -oE 'id="?[^" >]+' | tr -d '"' | grep -v 'version-picker-label' | sort -u)
    new=$(grep -oE '<h[2-4][^>]* id="?[^" >]+"?' "${new_file}" \
        | grep -oE 'id="?[^" >]+' | tr -d '"' | grep -v 'version-picker-label' | sort -u)
    if [[ "${old}" == "${new}" ]]; then
        same=$((same + 1))
    else
        different=$((different + 1))
        {
            echo "${page}"
            comm -23 <(echo "${old}") <(echo "${new}") | sed 's/^/  only old: /'
            comm -13 <(echo "${old}") <(echo "${new}") | sed 's/^/  only new: /'
        } >> "${WORK}/anchors.txt"
    fi
done < "${WORK}/old-urls.txt"

echo "Heading ids: ${same} pages identical, ${different} different (see ${WORK}/anchors.txt)"
