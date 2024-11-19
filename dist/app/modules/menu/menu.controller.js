"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const menu_service_1 = require("./menu.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
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
exports.MenuController = {
    createMenu
};
