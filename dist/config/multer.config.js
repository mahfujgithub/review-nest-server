"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// Define the uploads directory
const UPLOADS_DIR = path_1.default.join(__dirname, '../../public/uploads/');
// Ensure the uploads directory exists
const ensureUploadsDirectoryExists = () => {
    if (!fs_1.default.existsSync(UPLOADS_DIR)) {
        fs_1.default.mkdirSync(UPLOADS_DIR, { recursive: true });
    }
};
// Set up storage for multer
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        ensureUploadsDirectoryExists(); // Ensure directory exists before storing files
        cb(null, UPLOADS_DIR); // Set destination to 'public/uploads'
    },
    filename: (req, file, cb) => {
        cb(null, `${file.originalname}`); // Generate unique file names
    },
});
// File filter for allowed image types
const fileFilter = (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif|webp|heic|svg|bmp|tiff/;
    const isValidExtName = fileTypes.test(path_1.default.extname(file.originalname).toLowerCase());
    const isValidMimeType = fileTypes.test(file.mimetype);
    if (isValidExtName && isValidMimeType) {
        cb(null, true); // Accept the file if valid
    }
    else {
        cb(new Error('Only image files are allowed (jpeg, jpg, png, gif, webp)')); // Reject invalid files
    }
};
// Multer configuration
const upload = (0, multer_1.default)({
    storage, // Use the custom storage configuration
    fileFilter, // Use the custom file filter
    limits: {
        fileSize: 5 * 1024 * 1024, // Set file size limit to 5MB
    },
});
exports.default = upload;
