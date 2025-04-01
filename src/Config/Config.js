const ENVIRONMENT = process.env.NEXT_PUBLIC_ENVIRONMENT;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const ENCRYPT_KEY = process.env.NEXT_PUBLIC_ENCRYPT_KEY;
// S3 bucket
const ACCESS_KEY_ID = process.env.NEXT_PUBLIC_ACCESS_KEY_ID;
const SECRET_ACCESS_KEY = process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY;
const BUCKET = process.env.NEXT_PUBLIC_BUCKET;
const REGION = process.env.NEXT_PUBLIC_REGION;
const SOCKET_SERVER_URL = "https://api.sasantourism.com";

const config = {
  base: {
    url: BASE_URL,
  },
  s3: {
    bucket: BUCKET,
    region: REGION,
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
  },
  ENVIRONMENT,
  ENCRYPT_KEY,
  SOCKET_SERVER_URL,
};

export default config;
