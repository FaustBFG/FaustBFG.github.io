# FaustBFG.github.io

This repository contains a simple Flask application alongside a React project.

## Flask App

To run the Flask application:

```bash
pip install -r requirements.txt
python3 app.py
```

The application exposes a `/healthcheck` route which returns `OK`.

## Docker

If you prefer using Docker, build the image and run it:

```bash
docker build -t flask-app .
docker run -p 5000:5000 flask-app
```

The container exposes port `5000` by default, so it forwards that port to the host.

To build the image, create a network, and start the container in a single command use:

```bash
docker build -t flask-app . && \
docker network create flask-net && \
docker run --rm -p 5000:5000 --network flask-net flask-app
```

## Prebuilt Image

If you don't want to build locally, pull the prebuilt image which already
includes Flask:

```bash
docker pull ghcr.io/faustbfg/flask-app:latest
docker run -p 5000:5000 ghcr.io/faustbfg/flask-app:latest
```

