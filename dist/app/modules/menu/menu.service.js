"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const menu_model_1 = require("./menu.model");
//  create menu
const createMenu = async (menu) => {
    const httpStatus = await import('http-status-ts');
    const existingMenu = await menu_model_1.Menu.findOne({
        category: menu.category,
        subcategory: menu.subcategory,
    });
    // If a duplicate is found, throw an error or handle it as needed
    if (existingMenu) {
        throw new ApiError_1.default(httpStatus.HttpStatus.CONFLICT, 'Menu already exists!');
    }
    // Create the new menu item if no duplicate is found
    const result = await menu_model_1.Menu.create(menu);
    return result;
};
// get all menu
const getAllMenu = async (menu) => {
    // const httpStatus = await import('http-status-ts');
    const result = await menu_model_1.Menu.find(menu);
    return result;
};
// get signle menu
const getSingleMenu = async (id) => {
    const result = await menu_model_1.Menu.findById(id);
    return result;
};
// update single menu
const updateMenu = async (id, payload) => {
    const httpStatus = await import('http-status-ts');
    const isExist = await menu_model_1.Menu.findOne({ id });
    if (!isExist) {
        throw new ApiError_1.default(httpStatus.HttpStatus.NOT_FOUND, 'Menu not found!');
    }
    const { ...menuData } = payload;
    const updatedMenuData = { ...menuData };
    const result = await menu_model_1.Menu.findByIdAndUpdate({ id }, updatedMenuData, {
        new: true
    });
    return result;
};
// delete menu
const deleteMenu = async (id) => {
    const result = await menu_model_1.Menu.findByIdAndDelete(id);
    return result;
};
exports.MenuService = {
    createMenu,
    getAllMenu,
    getSingleMenu,
    updateMenu,
    deleteMenu
};
