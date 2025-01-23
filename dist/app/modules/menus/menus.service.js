"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenusService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const menus_model_1 = require("./menus.model");
const createMenus = async (blog) => {
    const httpStatus = await import('http-status-ts');
    // Normalize the input to avoid duplicate issues
    //   const normalizedMenu = menu.menu.trim().toLowerCase();
    //   const normalizedSubMenu = menu.subMenu.trim().toLowerCase();
    // Check if the `blog` already exists
    const existingBlog = await menus_model_1.Menus.findOne({ slug: blog.slug });
    if (existingBlog) {
        throw new ApiError_1.default(httpStatus.HttpStatus.CONFLICT, 'Blog is already exist!');
    }
    // If no `blog` exists, create a new one
    const newBlog = await menus_model_1.Menus.create(blog);
    return newBlog;
};
// get all blog
const getAllMenus = async (blog) => {
    const result = await menus_model_1.Menus.find(blog);
    return result;
};
// get single blog
const getSingleMenus = async (slug) => {
    const result = await menus_model_1.Menus.findOne({ slug: slug });
    return result;
};
// update single blog
const updateMenus = async (slug, payload) => {
    const httpStatus = await import('http-status-ts');
    const isExist = await menus_model_1.Menus.findOne({ slug: slug });
    if (!isExist) {
        throw new ApiError_1.default(httpStatus.HttpStatus.NOT_FOUND, 'Menu not found!');
    }
    const { ...blogData } = payload;
    const updatedBlogData = { ...blogData };
    const result = await menus_model_1.Menus.findOneAndUpdate({ slug }, updatedBlogData, {
        new: true,
    });
    return result;
};
// delete blog
const deleteMenus = async (slug) => {
    const result = await menus_model_1.Menus.findOneAndDelete({ slug });
    return result;
};
exports.MenusService = {
    createMenus,
    getAllMenus,
    getSingleMenus,
    updateMenus,
    deleteMenus,
};
