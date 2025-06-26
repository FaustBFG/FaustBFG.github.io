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

Because the container exposes port `5000`, you can forward it to the host.

Use this one-liner to build the image, create a network, and start the container:

```bash
docker build -t flask-app . && \
docker network create flask-net && \
docker run --rm -p 5000:5000 --network flask-net flask-app
```

## Prebuilt Image

If you don't want to build locally, pull the prebuilt image. It already
includes Flask and all dependencies:

```bash
docker pull ghcr.io/faustbfg/flask-app:latest
docker run -p 5000:5000 ghcr.io/faustbfg/flask-app:latest
```

