"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderValidation = void 0;
const zod_1 = require("zod");
const FolderZodSchema = zod_1.z.object({
    foldername: zod_1.z
        .string({
        required_error: 'foldername is required',
    })
        .optional(), // Makes foldername optional
    images: zod_1.z
        .array(zod_1.z.string().url().min(1, { message: 'Image URL cannot be empty' }))
        .min(1, { message: 'At least one image URL must be provided' })
        .optional(), // Makes images optional
});
exports.FolderValidation = {
    FolderZodSchema,
};
