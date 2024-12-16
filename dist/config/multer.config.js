"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
// Use Multer to store files temporarily before uploading them to Cloudinary
const storage = multer_1.default.memoryStorage(); // Store files in memory buffer
const upload = (0, multer_1.default)({ storage });
exports.default = upload;
