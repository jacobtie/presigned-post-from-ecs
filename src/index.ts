import express from 'express';
import { S3Client } from '@aws-sdk/client-s3';
import { createPresignedPost } from '@aws-sdk/s3-presigned-post';

const app = express();

const s3 = new S3Client({
  region: 'us-east-1',
  endpoint: process.env.NODE_ENV === 'local' ? 'http://localhost:4566' : undefined
});

const password = process.env.PASSWORD || 'test';

app.get('/', async (req, res) => {
  try {
    if (req.headers.authorization !== `Bearer ${password}`) return res.sendStatus(401); 
    const { bucket, filename } = req.query;
    if (!bucket || !filename) return res.status(400).json({ error: 'bucket and filename are required query params' });
    const { url, fields } = await createPresignedPost(s3, {
      Bucket: bucket + '',
      Key: filename + ''
    });
    return res.json({ url, fields });
  } catch (err) {
    console.log('Failed to create presigned post', err);
    return res.status(500).json({ msg: 'Error occurred', err });
  }
});

app.get('/health', (req, res) => {
  return res.sendStatus(200);
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
