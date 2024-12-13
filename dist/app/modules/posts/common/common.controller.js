"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postController = exports.getProducts = void 0;
const catchAsync_1 = __importDefault(require("../../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../../shared/sendResponse"));
const common_service_1 = require("./common.service");
const createPosts = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const post = req.body;
    const result = await common_service_1.PostService.createPost(post);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Post Created SuccessFullly`,
        data: result,
    });
});
exports.getProducts = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { category, subcategory } = req.query; // Extract query parameters
    const result = await common_service_1.PostService.getProductsByCategoryAndSubcategory(category, subcategory);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Products fetched successfully`,
        data: result,
    });
});
exports.postController = {
    createPosts,
    getProducts: exports.getProducts,
};
