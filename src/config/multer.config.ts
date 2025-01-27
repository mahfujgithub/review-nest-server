import multer, { FileFilterCallback } from 'multer';
import path from 'path';
import fs from 'fs';
import express, { Request } from 'express';
import config from '../config'
import multerS3 from 'multer-s3';
import { S3Client } from '@aws-sdk/client-s3';
// Set up AWS S3 configuration using environment variables
// if (!config.aws.accessKeyId || !config.aws.secretAccessKey) {
//   throw new Error('AWS credentials are not defined in the configuration');
// }

const s3 = new S3Client({
  region: config.aws.region,
  endpoint: `https://s3.${config.aws.region}.amazonaws.com`,
  credentials: {
    accessKeyId: config.aws.accessKeyId as string,
    secretAccessKey: config.aws.secretAccessKey as string,
  },
});

// Define the uploads directory
// const UPLOADS_DIR = path.join(__dirname, '../../public/uploads/');

// Ensure the uploads directory exists
// const ensureUploadsDirectoryExists = () => {
//   if (!fs.existsSync(UPLOADS_DIR)) {
//     fs.mkdirSync(UPLOADS_DIR, { recursive: true });
//   }
// };

// Set up storage for multer - S3 or Local storage
const storage = multerS3({
  s3: s3,
  bucket: (req, file, cb) => {
    if (!config.aws.bucketName) {
      return cb(new Error('Bucket name is not defined in the configuration'));
    }
    cb(null, config.aws.bucketName);
  }, // Use bucket name from config
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
