"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const blog_model_1 = require("./blog.model");
const createBlog = async (blog) => {
    const httpStatus = await import('http-status-ts');
    // Normalize the input to avoid duplicate issues
    //   const normalizedMenu = menu.menu.trim().toLowerCase();
    //   const normalizedSubMenu = menu.subMenu.trim().toLowerCase();
    // Check if the `blog` already exists
    const existingBlog = await blog_model_1.Blog.findOne({ slug: blog.slug });
    if (existingBlog) {
        throw new ApiError_1.default(httpStatus.HttpStatus.CONFLICT, 'Blog is already exist!');
    }
    // If no `blog` exists, create a new one
    const newBlog = await blog_model_1.Blog.create(blog);
    return newBlog;
};
// get all blog
const getAllBlog = async (blog) => {
    const result = await blog_model_1.Blog.find(blog);
    return result;
};
// get single blog
const getSingleBlog = async (slug) => {
    const result = await blog_model_1.Blog.findOne({ slug: slug });
    return result;
};
// update single blog
const updateMenu = async (slug, payload) => {
    const httpStatus = await import('http-status-ts');
    const isExist = await blog_model_1.Blog.findOne({ slug: slug });
    if (!isExist) {
        throw new ApiError_1.default(httpStatus.HttpStatus.NOT_FOUND, 'Menu not found!');
    }
    const { ...blogData } = payload;
    const updatedBlogData = { ...blogData };
    const result = await blog_model_1.Blog.findOneAndUpdate({ slug }, updatedBlogData, {
        new: true,
    });
    return result;
};
// delete blog
const deleteBlog = async (slug) => {
    const result = await blog_model_1.Blog.findOneAndDelete({ slug });
    return result;
};
exports.BlogService = {
    createBlog,
    getAllBlog,
    getSingleBlog,
    updateMenu,
    deleteBlog,
};
