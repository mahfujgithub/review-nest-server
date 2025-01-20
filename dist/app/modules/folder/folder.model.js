"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Folder = void 0;
const mongoose_1 = require("mongoose");
// Define the FolderSchema schema
const FolderSchema = new mongoose_1.Schema({
    foldername: { type: String, required: true },
    images: {
        type: [String], // Array of image URLs
        required: true, // Ensures at least one image URL is present
        validate: {
            validator: (array) => array.length > 0,
            message: 'At least one image URL must be provided',
        },
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Folder = (0, mongoose_1.model)('Folder', FolderSchema);
