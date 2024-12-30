"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const post_service_1 = require("./post.service");
const pick_1 = __importDefault(require("../../../shared/pick"));
const post_constant_1 = require("./post.constant");
const pagination_1 = require("../../../constants/pagination");
// create post
const createPosts = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const post = req.body;
    // Assuming files are in req.files, you'll process them here:
    // const imageUrls = [];
    // if (Array.isArray(req.files) && req.files.length > 0) {
    //   // Loop through the files, upload each to Cloudinary, and save the URLs
    //   for (const file of req.files) {
    //     const cloudinaryResponse = await uploadToCloudinary(
    //       file.buffer,
    //       '/assets',
    //     );
    //     imageUrls.push(cloudinaryResponse.secure_url); // Store Cloudinary URL
    //   }
    // }
    // console.log(post)
    // const productImages = post.allProducts.map((product: any) => console.log(product.productImages)) 
    // console.log(productImages)
    // Add the image URLs to your post data
    // imageUrls;
    // Call the service to create the post
    const result = await post_service_1.PostService.createPost(post);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Post Created SuccessFullly`,
        data: result,
    });
});
// get all post
const getAllPosts = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const filters = (0, pick_1.default)(req.query, post_constant_1.postFilterableFields);
    const paginationOptions = (0, pick_1.default)(req.query, pagination_1.paginationFields);
    const result = await post_service_1.PostService.getAllPost(paginationOptions, filters);
    // console.log(filters)
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Get All Post SuccessFullly`,
        meta: result.meta,
        data: result.data,
    });
});
// get single post by id
const getSinglePosts = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { slug } = req.params;
    const result = await post_service_1.PostService.getSinglePost(slug);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Get Single Post SuccessFully`,
        data: result,
    });
});
// update post
const updatePosts = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { id } = req.params;
    const updatedPost = req.body;
    const result = await post_service_1.PostService.updatePost(id, updatedPost);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Update Post SuccessFullly`,
        data: result,
    });
});
// remove post
const removePosts = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { id } = req.params;
    const result = await post_service_1.PostService.removePost(id);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Remove Post SuccessFullly`,
        data: result,
    });
});
exports.postController = {
    createPosts,
    getAllPosts,
    getSinglePosts,
    removePosts,
    updatePosts
};
