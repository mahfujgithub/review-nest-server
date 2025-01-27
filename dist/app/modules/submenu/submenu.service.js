"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubMenuService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const submenu_model_1 = require("./submenu.model");
const createSubMenu = async (blog) => {
    const httpStatus = await import('http-status-ts');
    // Normalize the input to avoid duplicate issues
    //   const normalizedMenu = menu.menu.trim().toLowerCase();
    //   const normalizedSubMenu = menu.subMenu.trim().toLowerCase();
    // Check if the `blog` already exists
    const existingBlog = await submenu_model_1.SubMenu.findOne({ slug: blog.slug });
    if (existingBlog) {
        throw new ApiError_1.default(httpStatus.HttpStatus.CONFLICT, 'Blog is already exist!');
    }
    // If no `blog` exists, create a new one
    const newBlog = await submenu_model_1.SubMenu.create(blog);
    return newBlog;
};
// get all blog
const getAllSubMenu = async (blog) => {
    const result = await submenu_model_1.SubMenu.find(blog);
    return result;
};
// get single blog
const getSingleSubMenu = async (subMenu) => {
    const result = await submenu_model_1.SubMenu.findOne({ subMenu: subMenu });
    return result;
};
// update single blog
const updateSubMenu = async (slug, payload) => {
    const httpStatus = await import('http-status-ts');
    const isExist = await submenu_model_1.SubMenu.findOne({ slug: slug });
    if (!isExist) {
        throw new ApiError_1.default(httpStatus.HttpStatus.NOT_FOUND, 'Menu not found!');
    }
    const { ...blogData } = payload;
    const updatedBlogData = { ...blogData };
    const result = await submenu_model_1.SubMenu.findOneAndUpdate({ slug }, updatedBlogData, {
        new: true,
    });
    return result;
};
// delete blog
const deleteSubMenu = async (slug) => {
    const result = await submenu_model_1.SubMenu.findOneAndDelete({ slug });
    return result;
};
exports.SubMenuService = {
    createSubMenu, getAllSubMenu, getSingleSubMenu, updateSubMenu, deleteSubMenu
};
