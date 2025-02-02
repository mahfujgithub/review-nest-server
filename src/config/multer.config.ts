import multer, { FileFilterCallback } from 'multer';
import path from 'path';
import { Request } from 'express';
import config from '../config'
import multerS3 from 'multer-s3';
import { S3Client } from '@aws-sdk/client-s3';

export const r2 = new S3Client({
  region: config.r2.region || 'auto',
  endpoint: config.r2.endpoint,
  credentials: {
    accessKeyId: config.r2.accessKeyId as string,
    secretAccessKey: config.r2.secretAccessKey as string,
  },
});

// Multer-S3 storage configuration
const storage = multerS3({
  s3: r2,
  bucket: (req, file, cb) => {
    if (!config.r2.bucketName) {
      return cb(new Error('Bucket name is not defined in the configuration'));
    }
    cb(null, config.r2.bucketName); // Use bucket name from config
  },
  acl: 'public-read', // Set ACL to public-read for all uploaded files
  metadata: function (req: Request, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key: function (req, file, cb) {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    const extension = path.extname(file.originalname);
    const fileName = path.basename(file.originalname, extension);
    const finalName = `${fileName}-${uniqueSuffix}${extension}`;
    cb(null, finalName); // Generate a unique filename for each upload
  },
  contentType: multerS3.AUTO_CONTENT_TYPE, // Automatically detect content type
});

// File filter for allowed image types
const fileFilter = (
  req: Express.Request,
  file: Express.Multer.File,
  cb: FileFilterCallback,
) => {
  const fileTypes = /jpeg|jpg|png|gif|webp|heic|svg|bmp|tiff/;
  const isValidExtName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const isValidMimeType = fileTypes.test(file.mimetype);

  if (isValidExtName && isValidMimeType) {
    cb(null, true); // Accept the file if valid
  } else {
    cb(new Error('Only image files are allowed (jpeg, jpg, png, gif, webp, etc.)')); // Reject invalid files
  }
};

// Multer configuration
const upload = multer({
  storage, // Use the custom storage configuration
  fileFilter, // Use the custom file filter
  limits: {
    fileSize: 5 * 1024 * 1024, // Set file size limit to 5MB
  },
});

export default upload;
