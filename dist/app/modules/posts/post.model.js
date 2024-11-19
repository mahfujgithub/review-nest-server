"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const mongoose_1 = require("mongoose");
// import { string } from "zod";
// import { number } from "zod";
const PostsSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    quantity: {
        type: Number
    },
    price: {
        type: Number
    },
    features: {
        type: String,
    },
    size: {
        type: Number
    },
    status: {
        type: String
    }
});
exports.Post = (0, mongoose_1.model)('Posts', PostsSchema);
