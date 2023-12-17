FROM python:3
LABEL authors="team@phalcon.io"

WORKDIR /usr/src/app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
