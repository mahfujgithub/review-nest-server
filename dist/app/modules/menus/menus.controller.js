"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenusController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const menus_service_1 = require("./menus.service");
// create blog
const createMenus = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const blog = req.body;
    const result = await menus_service_1.MenusService.createMenus(blog);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Menus created successfully!`,
        data: result,
    });
});
// get all blog
const getAllMenus = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const blog = req.body;
    const result = await menus_service_1.MenusService.getAllMenus(blog);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Menus Get SuccessFully',
        data: result,
    });
});
// get single menu
const getSingleMenus = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { slug } = req.params;
    const result = await menus_service_1.MenusService.getSingleMenus(slug);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Get Single Menus SuccessFully',
        data: result,
    });
});
// update single blog
const updateMenus = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { id } = req.params;
    const updatedBlog = req.body;
    const result = await menus_service_1.MenusService.updateMenus(id, updatedBlog);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Update Single Menus SuccessFully',
        data: result,
    });
});
// delete single menu
const deleteMenus = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { slug } = req.params;
    const result = await menus_service_1.MenusService.deleteMenus(slug);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Delete Single Menus SuccessFully',
        data: result,
    });
});
exports.MenusController = {
    createMenus, getAllMenus, getSingleMenus, updateMenus, deleteMenus
};
