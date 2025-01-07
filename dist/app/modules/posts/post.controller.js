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
const config_1 = __importDefault(require("../../../config"));
const nested_query_1 = __importDefault(require("../../../helpers/nested.query"));
// create post
const createPosts = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const post = req.body;
    // Base URL for the images (replace with your app's URL)
    const baseUrl = config_1.default.server_address;
    // Process uploaded files
    const files = req.files;
    // Handle the ogImage
    if (files['ogImage']) {
        post.ogImage = `${baseUrl}uploads/${files['ogImage'][0].originalname}`;
    }
    // Handle the productFeaturesImage
    if (files['productFeaturesImage']) {
        post.productFeaturesImage = `${baseUrl}uploads/${files['productFeaturesImage'][0].originalname}`;
    }
    // Loop through all allProducts dynamically based on the keys in files
    Object.keys(files).forEach(field => {
        // Check if the field corresponds to a product's image
        const match = field.match(/^allProducts\[(\d+)]\[(productMainImage|productImages)]/);
        if (match) {
            const productIndex = match[1]; // Extract product index from the field
            const imageType = match[2]; // Either productMainImage or productImages
            if (!post.allProducts[productIndex]) {
                post.allProducts[productIndex] = {}; // Initialize the product if not yet set
            }
            // Assign the image(s) to the correct product
            if (imageType === 'productMainImage' && files[field]) {
                post.allProducts[productIndex].productMainImage =
                    `${baseUrl}uploads/${files[field][0].originalname}`;
            }
            else if (imageType === 'productImages' && files[field]) {
                post.allProducts[productIndex].productImages = files[field].map(file => `${baseUrl}uploads/${file.originalname}`);
            }
        }
    });
    // Call the service to create the post
    const result = await post_service_1.PostService.createPost(post);
    // Construct the full URLs for images in the response
    const constructImageUrl = (imagePath) => {
        return `${baseUrl}uploads/${imagePath}`; // Replace with your app's domain
    };
    // Modify the post object to include full URLs for image paths
    if (post.ogImage)
        post.ogImage = constructImageUrl(post.ogImage);
    if (post.productFeaturesImage)
        post.productFeaturesImage = constructImageUrl(post.productFeaturesImage);
    if (post.allProducts) {
        post.allProducts.forEach((product) => {
            if (product.productMainImage)
                product.productMainImage = constructImageUrl(product.productMainImage);
            if (product.productImages) {
                product.productImages = product.productImages.map(constructImageUrl);
            }
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Post Created Successfully',
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
    const { slug } = req.params;
    const updatedPost = req.body;
    const nestedUpdateQuery = (0, nested_query_1.default)(updatedPost);
    const result = await post_service_1.PostService.updatePost(slug, nestedUpdateQuery);
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
    const { slug } = req.params;
    const result = await post_service_1.PostService.removePost(slug);
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
    updatePosts,
};
