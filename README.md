# Presigned POST From ECS

Experiment to sign a form POST to upload a file to S3.

## Dependencies

To run this project locally, you will need:

- [NodeJS](https://nodejs.org/en/)
- [Docker](https://www.docker.com/)

## Local Instructions

You can run this locally with a localstack mock S3 bucket.

First, install dependencies with npm

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

To hit the only endpoint running locally, use the following cURL command or equivalent:

```bash
curl --location --request GET 'http://localhost:8080' \
--header 'Authorization: Bearer test'
```
