"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const menu_service_1 = require("./menu.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
// create menu
const createMenu = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const menu = req.body;
    const result = await menu_service_1.MenuService.createMenu(menu);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Menu created successfully!`,
        data: result
    });
});
// get all menu
const getAllMenu = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const menu = req.body;
    const result = await menu_service_1.MenuService.getAllMenu(menu);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Menu Get SuccessFully',
        data: result
    });
});
// get single menu
const getSingleMenu = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { id } = req.params;
    const result = await menu_service_1.MenuService.getSingleMenu(id);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Get Single Menu SuccessFully',
        data: result
    });
});
// update single menu
const updateMenu = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { id } = req.params;
    const updatedMenu = req.body;
    const result = await menu_service_1.MenuService.updateMenu(id, updatedMenu);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Update Single Menu SuccessFully',
        data: result
    });
});
// delete single menu
const deleteMenu = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { id } = req.params;
    const result = await menu_service_1.MenuService.deleteMenu(id);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Delete Single Menu SuccessFully',
        data: result
    });
});
exports.MenuController = {
    createMenu,
    getAllMenu,
    getSingleMenu,
    updateMenu,
    deleteMenu
};
