import multer from 'multer';

// Use Multer to store files temporarily before uploading them to Cloudinary
const storage = multer.memoryStorage(); // Store files in memory buffer
const upload = multer({ storage });

export default upload;
