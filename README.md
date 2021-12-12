# Presigned POST From ECS

Experiment to sign a form POST to upload a file to S3.

## Local Instructions

You can run this locally with a localstack mock S3 bucket.

First, install dependencies with NodeJS v16.13.X

```bash
npm install
```

Next, spin up the localstack mock service with

```bash
make s3
```

or if you don't have `make` installed:

```bash
docker-compose -f docker-compose.s3.yml down --remove-orphans
docker-compose -f docker-compose.s3.yml up --build --remove-orphans
```

Finally, simply run the server with

```bash
npm run dev
```

To test the actual Dockerfile and how the app would behave in production, run

```bash
make sim-prod
```

or if you don't have `make` installed:

```bash
docker-compose down --remove-orphans
docker-compose up --build --remove-orphans
```
