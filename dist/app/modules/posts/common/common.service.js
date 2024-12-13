"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const common_model_1 = require("./common.model");
const createPost = async (post) => {
    // const httpStatus = await import('http-status-ts');
    const newPost = await common_model_1.Post.create(post);
    return newPost;
};
const getProductsByCategoryAndSubcategory = async (category, subcategory) => {
    const filter = {};
    if (category)
        filter.category = category;
    if (subcategory)
        filter.subcategory = subcategory;
    const products = await common_model_1.Post.find(filter);
    return products;
};
exports.PostService = {
    createPost,
    getProductsByCategoryAndSubcategory,
};
