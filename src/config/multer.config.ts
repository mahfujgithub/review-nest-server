import multer, { FileFilterCallback } from 'multer';
import path from 'path';
import fs from 'fs';
import express, { Request } from 'express';
const app = express();

// Define the uploads directory
const UPLOADS_DIR = path.join(__dirname, '../../public/uploads');

// Ensure the uploads directory exists
const ensureUploadsDirectoryExists = () => {
  if (!fs.existsSync(UPLOADS_DIR)) {
    fs.mkdirSync(UPLOADS_DIR, { recursive: true });
  }
};

// Set up storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    ensureUploadsDirectoryExists(); // Ensure directory exists before storing files
    cb(null, UPLOADS_DIR); // Set destination to 'public/uploads'
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(
      null,
      `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`,
    ); // Generate unique file names
  },
});

// File filter for allowed image types
const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback,
) => {
  const fileTypes = /jpeg|jpg|png|gif|webp/;
  const isValidExtName = fileTypes.test(
    path.extname(file.originalname).toLowerCase(),
  );
  const isValidMimeType = fileTypes.test(file.mimetype);

  if (isValidExtName && isValidMimeType) {
    cb(null, true); // Accept the file if valid
  } else {
    cb(new Error('Only image files are allowed (jpeg, jpg, png, gif, webp)')); // Reject invalid files
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
