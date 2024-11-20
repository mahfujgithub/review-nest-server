"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const stuff_service_1 = require("./stuff.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const stuff_constant_1 = require("./stuff.constant");
const pagination_1 = require("../../../constants/pagination");
const pick_1 = __importDefault(require("../../../shared/pick"));
const getAllStuff = (0, catchAsync_1.default)(async (req, res) => {
    //   console.log(req.headers.authorization);
    //   console.log(req.user);
    const httpStatus = await import('http-status-ts');
    const filters = (0, pick_1.default)(req.query, stuff_constant_1.stuffFilterableFields);
    const paginationOptions = (0, pick_1.default)(req.query, pagination_1.paginationFields);
    const result = await stuff_service_1.AdminService.getAllStuff(paginationOptions, filters);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Admins Retrieved successfully!',
        meta: result.meta,
        data: result.data,
    });
});
const getSingleStuff = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { id } = req.params;
    const result = await stuff_service_1.AdminService.getSingleStuff(id);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Admin Retrieved successfully!',
        data: result,
    });
});
const updateStuff = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { id } = req.params;
    const updatedAdmin = req.body;
    const result = await stuff_service_1.AdminService.updateStuff(id, updatedAdmin);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Admin Updated successfully!',
        data: result,
    });
});
const removeStuff = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const id = req.params.id;
    const result = await stuff_service_1.AdminService.deleteStuff(id);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Admin Deleted successfully!',
        data: result,
    });
});
exports.AdminController = {
    getAllStuff,
    getSingleStuff,
    updateStuff,
    removeStuff,
};
