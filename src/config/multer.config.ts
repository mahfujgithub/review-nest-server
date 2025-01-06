import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Set up storage for multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Ensure the 'public/uploads' folder exists, and if not, create it
    const uploadPath = path.join(__dirname, '../../public/uploads');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath); // Set destination to 'public/uploads'
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(
      null,
      `${file.fieldname}-${uniqueSuffix}${path.extname(file.originalname)}`,
    ); // Generate unique file names
  },
});

// Multer configuration
const upload = multer({
  storage, // Use the custom storage configuration
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif|webp/;
    const extName = fileTypes.test(
      path.extname(file.originalname).toLowerCase(),
    );
    const mimeType = fileTypes.test(file.mimetype);

    if (extName && mimeType) {
      cb(null, true); // Accept the file if valid
    } else {
      cb(new Error('Only images are allowed')); // Reject if not an image
    }
  },
});

export default upload;
