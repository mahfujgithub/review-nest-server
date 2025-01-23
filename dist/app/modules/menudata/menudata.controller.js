"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuDataController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const menudata_service_1 = require("./menudata.service");
// create blog
const createMenuData = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const blog = req.body;
    const result = await menudata_service_1.MenuDataService.createMenuData(blog);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Menu data created successfully!`,
        data: result,
    });
});
// get all blog
const getAllMenuData = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const blog = req.body;
    const result = await menudata_service_1.MenuDataService.getAllMenuData(blog);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Menu data Get SuccessFully',
        data: result,
    });
});
// get single menu
const getSingleMenuData = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { slug } = req.params;
    const result = await menudata_service_1.MenuDataService.getSingleMenuData(slug);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Menu data Single Blog SuccessFully',
        data: result,
    });
});
// update single blog
const updateMenuData = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { id } = req.params;
    const updatedBlog = req.body;
    const result = await menudata_service_1.MenuDataService.updateMenuData(id, updatedBlog);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Update Single Menu data SuccessFully',
        data: result,
    });
});
// delete single menu
const deleteMenuData = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { slug } = req.params;
    const result = await menudata_service_1.MenuDataService.deleteMenuData(slug);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Delete Single Menu data SuccessFully',
        data: result,
    });
});
exports.MenuDataController = {
    createMenuData,
    getAllMenuData,
    getSingleMenuData,
    updateMenuData,
    deleteMenuData,
};
