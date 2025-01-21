"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const blog_service_1 = require("./blog.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
// create blog
const createBlog = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const blog = req.body;
    const result = await blog_service_1.BlogService.createBlog(blog);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Blog created successfully!`,
        data: result,
    });
});
// get all blog
const getAllBlog = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const blog = req.body;
    const result = await blog_service_1.BlogService.getAllBlog(blog);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Blog Get SuccessFully',
        data: result,
    });
});
// get single menu
const getSingleBlog = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { slug } = req.params;
    const result = await blog_service_1.BlogService.getSingleBlog(slug);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Get Single Blog SuccessFully',
        data: result,
    });
});
// update single blog
const updateBlog = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { id } = req.params;
    const updatedBlog = req.body;
    const result = await blog_service_1.BlogService.updateMenu(id, updatedBlog);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Update Single Blog SuccessFully',
        data: result,
    });
});
// delete single menu
const deleteBlog = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { slug } = req.params;
    const result = await blog_service_1.BlogService.deleteBlog(slug);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Delete Single Blog SuccessFully',
        data: result,
    });
});
exports.BlogController = {
    createBlog,
    getAllBlog,
    getSingleBlog,
    updateBlog,
    deleteBlog,
};
