"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Folder = void 0;
const mongoose_1 = require("mongoose");
// Define the ImageSchema schema
const ImageSchema = new mongoose_1.Schema({
    foldername: { type: String, required: true },
    urls: {
        type: [String],
        required: false,
        validate: {
            validator: (array) => array.length > 0,
            message: 'urls must contain at least one item',
        },
    },
});
// Define the IPosts schema
const FolderSchema = new mongoose_1.Schema({
    images: {
        type: [ImageSchema],
        required: false,
        validate: {
            validator: (array) => array.length > 0,
            message: 'image must contain at least one item',
        },
    },
});
exports.Folder = (0, mongoose_1.model)('Folders', FolderSchema);
