FROM python:3.13-alpine

LABEL authors="team@phalcon.io"

# The converter (resources/nimbus/convert.py) turns MkDocs pages into nimbus
# pages. It reads mkdocs.yml with PyYAML.
RUN pip install --no-cache-dir pyyaml

# Run as uid 1000 so that files written into the bind mount belong to the
# host user.
USER 1000:1000

WORKDIR /docs

ENTRYPOINT ["python"]
