"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuDataService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const menudata_model_1 = require("./menudata.model");
const createMenuData = async (blog) => {
    const httpStatus = await import('http-status-ts');
    // Normalize the input to avoid duplicate issues
    //   const normalizedMenu = menu.menu.trim().toLowerCase();
    //   const normalizedSubMenu = menu.subMenu.trim().toLowerCase();
    // Check if the `blog` already exists
    const existingMenuData = await menudata_model_1.MenuData.findOne({ slug: blog.slug });
    if (existingMenuData) {
        throw new ApiError_1.default(httpStatus.HttpStatus.CONFLICT, 'Menu Data is already exist!');
    }
    // If no `blog` exists, create a new one
    const newBlog = await menudata_model_1.MenuData.create(blog);
    return newBlog;
};
// get all blog
const getAllMenuData = async (blog) => {
    const result = await menudata_model_1.MenuData.find(blog);
    return result;
};
// get single blog
const getSingleMenuData = async (menu) => {
    const result = await menudata_model_1.MenuData.findOne({ menu: menu });
    return result;
};
// update single blog
const updateMenuData = async (slug, payload) => {
    const httpStatus = await import('http-status-ts');
    const isExist = await menudata_model_1.MenuData.findOne({ slug: slug });
    if (!isExist) {
        throw new ApiError_1.default(httpStatus.HttpStatus.NOT_FOUND, 'Menu Data not found!');
    }
    const { ...blogData } = payload;
    const updatedBlogData = { ...blogData };
    const result = await menudata_model_1.MenuData.findOneAndUpdate({ slug }, updatedBlogData, {
        new: true,
    });
    return result;
};
// delete blog
const deleteMenuData = async (slug) => {
    const result = await menudata_model_1.MenuData.findOneAndDelete({ slug });
    return result;
};
exports.MenuDataService = {
    createMenuData,
    getAllMenuData,
    getSingleMenuData,
    updateMenuData,
    deleteMenuData,
};
