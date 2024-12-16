"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadToCloudinary = void 0;
const cloudinary_kit_1 = __importDefault(require("./cloudinary.kit")); // Import cloudinary.v2
// Upload an image to Cloudinary
const uploadToCloudinary = async (fileBuffer, folder) => {
    return new Promise((resolve, reject) => {
        cloudinary_kit_1.default.uploader
            .upload_stream({
            folder,
        }, (error, result) => {
            if (error) {
                reject(new Error('Failed to upload image to Cloudinary'));
            }
            else if (result) {
                resolve(result); // Only resolve if result is defined
            }
            else {
                reject(new Error('Cloudinary returned undefined result'));
            }
        })
            .end(fileBuffer); // Write the file buffer to Cloudinary stream
    });
};
exports.uploadToCloudinary = uploadToCloudinary;
