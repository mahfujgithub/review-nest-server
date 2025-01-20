"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
const mongoose_1 = require("mongoose");
const BlogSchema = new mongoose_1.Schema({
    seoTitle: {
        type: String,
        required: true,
        trim: true,
    },
    slug: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    metaDescription: {
        type: String,
        required: true,
        trim: true,
    },
    canonicalUrl: {
        type: String,
        required: true,
        trim: true,
    },
    keywords: {
        type: String,
        required: true,
        trim: true,
    },
    ogTitle: {
        type: String,
        required: true,
        trim: true,
    },
    ogImage: {
        type: String,
        required: true,
        trim: true,
    },
    ogDescription: {
        type: String,
        required: true,
        trim: true,
    },
    structuredData: {
        type: String,
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    blogData: {
        type: String,
        required: true,
    },
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
    toJSON: {
        virtuals: true,
    },
});
exports.Blog = (0, mongoose_1.model)('Blog', BlogSchema);
