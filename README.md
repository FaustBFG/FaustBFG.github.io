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

