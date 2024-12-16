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
    // Normalize the input to avoid duplicate issues
    const normalizedMenu = menu.menu.trim().toLowerCase();
    const normalizedSubMenu = menu.subMenu.trim().toLowerCase();
    // Check if the `menu` already exists
    const existingMenu = await menu_model_1.Menu.findOne({ menu: normalizedMenu });
    if (existingMenu) {
        // Check if `subMenu` already exists in the array
        const subMenuExists = existingMenu.subMenu.includes(normalizedSubMenu);
        if (subMenuExists) {
            throw new ApiError_1.default(httpStatus.HttpStatus.CONFLICT, 'SubMenu already exists for this menu!');
        }
        // Append the new `subMenu` to the array
        existingMenu.subMenu.push(normalizedSubMenu);
        await existingMenu.save();
        return existingMenu;
    }
    // If no `menu` exists, create a new one
    const newMenu = await menu_model_1.Menu.create({
        menu: normalizedMenu,
        subMenu: [normalizedSubMenu],
    });
    return newMenu;
};
// get all menu
const getAllMenu = async (menu) => {
    const result = await menu_model_1.Menu.find(menu);
    return result;
};
// get single menu
const getSingleMenu = async (id) => {
    const result = await menu_model_1.Menu.findById(id);
    return result;
};
// update single menu
const updateMenu = async (_id, payload) => {
    const httpStatus = await import('http-status-ts');
    const isExist = await menu_model_1.Menu.findById(_id);
    if (!isExist) {
        throw new ApiError_1.default(httpStatus.HttpStatus.NOT_FOUND, 'Menu not found!');
    }
    const { ...menuData } = payload;
    const updatedMenuData = { ...menuData };
    const result = await menu_model_1.Menu.findByIdAndUpdate({ _id }, updatedMenuData, {
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
