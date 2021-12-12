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
  if (req.headers.authorization !== `Bearer ${password}`) return res.sendStatus(401); 
  const { url, fields } = await createPresignedPost(s3, {
    Bucket: 'test-bucket',
    Key: 'test-file.csv'
  });
  return res.json({ url, fields });
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
