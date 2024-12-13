"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const mongoose_1 = require("mongoose");
const PostsSchema = new mongoose_1.Schema({
    seoTitle: {
        type: String,
        require: true
    },
    slug: {
        type: String,
        required: true
    },
    metaDescription: {
        type: String,
        required: true
    },
    canonicalUrl: {
        type: String,
        required: true
    },
    keywords: {
        type: String,
        required: true
    },
    ogTitle: {
        type: String,
        required: true
    },
    ogImage: {
        type: String,
        required: true
    },
    ogDescription: {
        type: String,
        required: true
    },
    structuredData: {
        type: String,
        required: true
    },
    productTitle: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },
    availability: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    menu: {
        type: String,
        required: true
    },
    subMenu: {
        type: String,
        required: true
    },
    editorData: {
        type: String,
        required: true
    }
});
exports.Post = (0, mongoose_1.model)('Posts', PostsSchema);
