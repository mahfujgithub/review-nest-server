"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const menu_model_1 = require("./menu.model");
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
exports.MenuService = {
    createMenu,
};
