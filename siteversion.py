# Workflow inspiration and adaptation came from Andruino-Cli
# https://github.com/arduino/tooling-project-assets/blob/main/workflow-templates/assets/deploy-mkdocs-versioned/siteversion/siteversion.py

import os
import re
import json

from git import Repo

# `master` is never to be touched. We can use that as a dev version.
#
# As with andruino-cli, we have the same versioning scheme for the documentation.
# The branches that are for deployment are the ones that have the format `0.99.x`.


DEV_BRANCHES = ["master"]  # Name of the branch used for the "dev" website source content

# Get the docs version, setting the latest release as the 'latest' alias.
def get_docs_version(ref_name, release_branches):
    if ref_name in DEV_BRANCHES:
        return {"version": "dev", "alias": ""}

    if ref_name in release_branches:
        # if version is latest, add an alias
        alias = "latest" if ref_name == release_branches[0] else ""
        # strip `.x` suffix from the branch name to get the version: 0.3.x -> 0.3
        return {"version": ref_name[:-2], "alias": alias}

    return {"version": None, "alias": None}


# Get the names of the release branches, sorted from newest to older.
def get_rel_branch_names(blist):
    pattern = re.compile(r"origin/(\d+\.\d+\.x)")
    names = []
    for b in blist:
        res = pattern.search(b.name)
        if res is not None:
            names.append(res.group(1))

    # Since sorting is stable, first sort by major...
    names = sorted(names, key=lambda x: int(x.split(".")[0]), reverse=True)
    # ...then by minor
    return sorted(names, key=lambda x: int(x.split(".")[1]), reverse=True)


def main():
    # Detect repo root folder
    here = os.path.dirname(os.path.realpath(__file__))
    repo_dir = os.path.join(here, "..", "..")

    # Get current repo
    repo = Repo(repo_dir)

    # Get the list of release branch names
    rel_br_names = get_rel_branch_names(repo.refs)

    # Deduce docs version from current branch.
    versioning_data = get_docs_version(repo.active_branch.name, rel_br_names)

    # Return the data as JSON on stdout
    print(json.dumps(versioning_data))


# Usage:
#     To run the script (must be run from within the repo tree):
#         $python siteversion.py
#
if __name__ == "__main__":
    main()
