"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.r2 = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const config_1 = __importDefault(require("../config"));
const multer_s3_1 = __importDefault(require("multer-s3"));
const client_s3_1 = require("@aws-sdk/client-s3");
exports.r2 = new client_s3_1.S3Client({
    region: config_1.default.r2.region || 'auto',
    endpoint: config_1.default.r2.endpoint,
    credentials: {
        accessKeyId: config_1.default.r2.accessKeyId,
        secretAccessKey: config_1.default.r2.secretAccessKey,
    },
});
// Multer-S3 storage configuration
const storage = (0, multer_s3_1.default)({
    s3: exports.r2,
    bucket: (req, file, cb) => {
        if (!config_1.default.r2.bucketName) {
            return cb(new Error('Bucket name is not defined in the configuration'));
        }
        cb(null, config_1.default.r2.bucketName); // Use bucket name from config
    },
    acl: 'public-read', // Set ACL to public-read for all uploaded files
    metadata: function (req, file, cb) {
        cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        const extension = path_1.default.extname(file.originalname);
        const fileName = path_1.default.basename(file.originalname, extension);
        const finalName = `${fileName}-${uniqueSuffix}${extension}`;
        cb(null, finalName); // Generate a unique filename for each upload
    },
    contentType: multer_s3_1.default.AUTO_CONTENT_TYPE, // Automatically detect content type
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
        cb(new Error('Only image files are allowed (jpeg, jpg, png, gif, webp, etc.)')); // Reject invalid files
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
