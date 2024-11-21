"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const mongoose_1 = require("mongoose");
const PostsSchema = new mongoose_1.Schema({
    metaTitle: {
        type: String,
        required: true
    },
    metaDescription: {
        type: String,
        required: true
    },
    canonicalTag: {
        type: [String],
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    featuresImg: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true,
    },
    description: {
        type: [String],
        required: true
    },
    descriptionTwo: {
        type: [String],
        required: true
    },
    image: {
        type: [String],
        required: true
    },
    currentlyAvailable: {
        type: Boolean,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    brand: {
        type: String,
    },
    size: {
        type: [Number]
    },
    productDimensions: {
        type: [String],
    },
    coverMetarial: {
        type: String,
    },
    layersNumber: {
        type: Number,
    },
    fillMetarial: {
        type: String,
    },
    specialFuture: {
        type: [String],
    },
    color: {
        type: [String],
    },
    coilType: {
        type: String,
    },
    modelName: {
        type: String,
    },
    itemWeight: {
        type: Number,
    },
    customerReview: {
        type: Number,
    },
    warrantySupport: {
        type: String
    }
});
exports.Post = (0, mongoose_1.model)('Posts', PostsSchema);
