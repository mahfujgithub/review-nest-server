"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderValidation = void 0;
const zod_1 = require("zod");
const ImageZodSchema = zod_1.z.object({
    foldername: zod_1.z.string({ required_error: 'foldername is required' }),
    url: zod_1.z.array(zod_1.z.string().optional()).optional(),
});
const imagesZodSchema = zod_1.z.object({
    images: zod_1.z.array(ImageZodSchema).optional(),
});
const folderZodSchema = zod_1.z.object({
    body: imagesZodSchema,
});
exports.FolderValidation = {
    folderZodSchema,
};
