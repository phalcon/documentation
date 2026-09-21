#!/bin/bash

# Update the dependencies and check that the site still builds.
#
#   scripts/update-dependencies.sh            # updates in the ranges of package.json
#   scripts/update-dependencies.sh --latest   # also takes new major versions
#
# 1. Checks and builds the current code. This build is the baseline.
# 2. Updates package.json and pnpm-lock.yaml.
# 3. Checks and builds again, and compares the build with the baseline.
#
# The checks are `pnpm test`, `pnpm typecheck` and `pnpm build`. The run
# takes about ten minutes (two builds). The baseline and the comparison go
# to resources/nimbus/work/update/.
#
# @cloudflare/nimbus-docs is not updated: the patch in patches/ applies to
# its exact version. See "Upgrade nimbus" in AGENT.md.

set -e

IMAGE="phalcon-docs"
LATEST="no"
UPDATED="no"

if [[ "$1" == "--latest" ]]; then
    LATEST="yes"
elif [[ -n "$1" ]]; then
    echo "Usage: ${0} [--latest]" >&2
    exit 1
fi

if ! command -v docker > /dev/null 2>&1; then
    echo "docker is required but was not found in PATH" >&2
    exit 1
fi

cd "$(dirname "$0")/.."

WORK="resources/nimbus/work/update"

run_pnpm() {
    docker run --rm -v "$PWD":/docs "${IMAGE}" pnpm "$@"
}

check_and_build() {
    run_pnpm install --frozen-lockfile
    run_pnpm test
    run_pnpm typecheck
    run_pnpm build
}

# On a failure after the update, show how to go back.
on_exit() {
    local status=$?
    if [[ ${status} -ne 0 && "${UPDATED}" == "yes" ]]; then
        echo "The update failed. To go back:" >&2
        echo "  git restore package.json pnpm-lock.yaml" >&2
        echo "  docker run --rm -v \"\$PWD\":/docs ${IMAGE} pnpm install --frozen-lockfile" >&2
    fi
}
trap on_exit EXIT

if [[ -n "$(git status --porcelain package.json pnpm-lock.yaml)" ]]; then
    echo "package.json or pnpm-lock.yaml has uncommitted changes. Commit or stash them first." >&2
    exit 1
fi

# The build and ./serve use the same .astro/ cache.
if [[ -n "$(docker ps -q --filter "ancestor=${IMAGE}")" ]]; then
    echo "A ${IMAGE} container is running (./serve?). Stop it first." >&2
    exit 1
fi

docker image inspect "${IMAGE}" > /dev/null 2>&1 || docker build -t "${IMAGE}" resources/docker

echo "==> Check and build the current code (baseline)"
check_and_build
rm -rf "${WORK}"
mkdir -p "${WORK}"
mv dist "${WORK}/dist"

echo "==> Update the dependencies"
UPDATED="yes"
if [[ "${LATEST}" == "yes" ]]; then
    run_pnpm update --latest '!@cloudflare/nimbus-docs'
else
    run_pnpm update
fi

if git diff --quiet package.json pnpm-lock.yaml; then
    mv "${WORK}/dist" dist
    echo "==> Nothing to update"
    exit 0
fi

echo "==> Check and build the updated code"
check_and_build

echo "==> Compare the build with the baseline"
# The file names in _astro/ and pagefind/ contain content hashes, and all
# pages refer to them. Thus, for pages, compare only that they exist. For
# all other files, compare the content too.
diff -rq --exclude=_astro --exclude=pagefind "${WORK}/dist" dist \
    | grep -v '\.html differ$' > "${WORK}/diff.txt" || true
if [[ -s "${WORK}/diff.txt" ]]; then
    echo "Differences: $(wc -l < "${WORK}/diff.txt") (all of them are in ${WORK}/diff.txt)"
    head -n 50 "${WORK}/diff.txt" | sed 's/^/  /'
else
    echo "No differences"
fi

echo "==> Packages that are still outdated"
run_pnpm outdated || true

echo "==> Done. Look at the site with ./serve, then commit package.json and pnpm-lock.yaml"
