import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  env: process.env.NODE_ENV,
  server_address: process.env.SERVER_ADDRESS,
  database_url: process.env.DATABASE_URL,
  port: process.env.PORT || 8080,
  defaultAdminPassword: process.env.DEFAULT_ADMIN_PASSWORD,
  bycrypt_salt_rounds: process.env.BYCRYPT_SALT_ROUNDS,
  jwt: {
    secret: process.env.JWT_SECRET,
    refresh_secret: process.env.JWT_REFRESH_SECRET,
    expires_in: process.env.JWT_EXPIRES_IN,
    refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
  },
  resetLink: process.env.RESET_LINK,
  email: process.env.EMAIL,
  appPass: process.env.APP_PASS,
  aws: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    bucketName: process.env.AWS_BUCKET_NAME,
  },
};
