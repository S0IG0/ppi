FROM python:3.11-alpine3.17

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

COPY requirements.txt /temp/requirements.txt
COPY . /server
WORKDIR server

RUN pip install --no-cache-dir -r /temp/requirements.txt

EXPOSE 50051