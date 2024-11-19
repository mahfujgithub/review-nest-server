"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const post_model_1 = require("./post.model");
const createPost = async (post) => {
    // const httpStatus = await import('http-status-ts');
    const newPost = await post_model_1.Post.create(post);
    return newPost;
};
exports.PostService = {
    createPost
};
