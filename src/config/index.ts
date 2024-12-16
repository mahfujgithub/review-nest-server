import dotenv, { config } from "dotenv";
import path from "path";
import { v2 as cloudinary } from "cloudinary";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  env: process.env.NODE_ENV,
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
  resetLink: process.env.RESET_PASS_UI_LINK,
  email: process.env.EMAIL,
  appPass: process.env.APP_PASS,

};


cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
  CLOUDINARY_URL: process.env.CLOUDINARY_URL
  });

  export { cloudinary };
