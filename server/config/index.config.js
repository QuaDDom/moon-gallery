import { config } from 'dotenv';

config();

export default {
    BucketName: process.env.BUCKET_NAME || '',
    Endpoint: process.env.ENDPOINT || ''
}