"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubMenuController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const submenu_service_1 = require("./submenu.service");
// create blog
const createSubMenu = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const blog = req.body;
    const result = await submenu_service_1.SubMenuService.createSubMenu(blog);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Sub Menu created successfully!`,
        data: result,
    });
});
// get all blog
const getAllSubMenu = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const blog = req.body;
    const result = await submenu_service_1.SubMenuService.getAllSubMenu(blog);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Sub Menu Get SuccessFully',
        data: result,
    });
});
// get single menu
const getSingleSubMenu = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { slug } = req.params;
    const result = await submenu_service_1.SubMenuService.getSingleSubMenu(slug);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Get Single Sub Menu SuccessFully',
        data: result,
    });
});
// update single blog
const updateSubMenu = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { id } = req.params;
    const updatedBlog = req.body;
    const result = await submenu_service_1.SubMenuService.updateSubMenu(id, updatedBlog);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Update Single Sub Menu SuccessFully',
        data: result,
    });
});
// delete single menu
const deleteSubMenu = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { slug } = req.params;
    const result = await submenu_service_1.SubMenuService.deleteSubMenu(slug);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Delete Single Sub Menu SuccessFully',
        data: result,
    });
});
exports.SubMenuController = {
    createSubMenu, getAllSubMenu, getSingleSubMenu, updateSubMenu, deleteSubMenu
};
