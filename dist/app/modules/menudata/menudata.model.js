"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuData = void 0;
const mongoose_1 = require("mongoose");
const MenuDataSchema = new mongoose_1.Schema({
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
    menuData: {
        type: String,
        required: true,
    },
    menu: {
        type: String,
        required: true
    }
}, {
    timestamps: true, // Adds createdAt and updatedAt fields
    toJSON: {
        virtuals: true,
    },
});
exports.MenuData = (0, mongoose_1.model)('menudata', MenuDataSchema);
