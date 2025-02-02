"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteObjectFromR2 = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
const config_1 = __importDefault(require("../config"));
const multer_config_1 = require("../config/multer.config");
const deleteObjectFromR2 = async (key) => {
    const command = new client_s3_1.DeleteObjectCommand({
        Bucket: config_1.default.r2.bucketName,
        Key: key,
    });
    try {
        await multer_config_1.r2.send(command);
    }
    catch (error) {
        throw error; // Re-throw the error if needed
    }
};
exports.deleteObjectFromR2 = deleteObjectFromR2;
