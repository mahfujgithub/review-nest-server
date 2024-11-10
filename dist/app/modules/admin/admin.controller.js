"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const admin_service_1 = require("./admin.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const admin_constant_1 = require("./admin.constant");
const pagination_1 = require("../../../constants/pagination");
const pick_1 = __importDefault(require("../../../shared/pick"));
const getAllAdmins = (0, catchAsync_1.default)(async (req, res) => {
    //   console.log(req.headers.authorization);
    //   console.log(req.user);
    const httpStatus = await import('http-status-ts');
    const filters = (0, pick_1.default)(req.query, admin_constant_1.adminFilterableFields);
    const paginationOptions = (0, pick_1.default)(req.query, pagination_1.paginationFields);
    const result = await admin_service_1.AdminService.getAllAdmins(paginationOptions, filters);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Admins Retrieved successfully!',
        meta: result.meta,
        data: result.data,
    });
});
const getSingleAdmin = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { id } = req.params;
    const result = await admin_service_1.AdminService.getSingleAdmin(id);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Admin Retrieved successfully!',
        data: result,
    });
});
const removeAdmin = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const id = req.params.id;
    const result = await admin_service_1.AdminService.deleteAdmin(id);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Admin Deleted successfully!',
        data: result,
    });
});
exports.AdminController = {
    getAllAdmins,
    getSingleAdmin,
    removeAdmin
};