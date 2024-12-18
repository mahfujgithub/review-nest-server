"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const auth_service_1 = require("./auth.service");
const config_1 = __importDefault(require("../../../config"));
const loginUser = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { ...loginData } = req.body;
    const result = await auth_service_1.AuthService.loginUser(loginData);
    const { refreshToken, ...others } = result;
    const cookieOptions = {
        secure: config_1.default.env === 'production',
        httpOnly: true,
    };
    // set refresh token into cookie
    res.cookie('refreshToken', refreshToken, cookieOptions);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `User Logged in successfully!`,
        data: others,
    });
});
const refreshToken = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { refreshToken } = req.cookies;
    const result = await auth_service_1.AuthService.refreshToken(refreshToken);
    const cookieOptions = {
        secure: config_1.default.env === 'production',
        httpOnly: true,
    };
    // set refresh token into cookie
    res.cookie('refreshToken', refreshToken, cookieOptions);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'User Logged in successfully!',
        data: result,
    });
});
const changePassword = (0, catchAsync_1.default)(async (req, res) => {
    const user = req.user;
    const { ...passwordData } = req.body;
    await auth_service_1.AuthService.changePassword(user, passwordData);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Password changed successfully !',
    });
});
const forgotPass = (0, catchAsync_1.default)(async (req, res) => {
    await auth_service_1.AuthService.forgotPass(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Check your email!',
    });
});
const resetPassword = (0, catchAsync_1.default)(async (req, res) => {
    const token = req.headers.authorization || '';
    console.log(token);
    await auth_service_1.AuthService.resetPassword(req.body, token);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        success: true,
        message: 'Account recovered!',
    });
});
const logout = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    // Clear the refresh token from the cookie
    res.clearCookie('refreshToken', {
        secure: config_1.default.env === 'production',
        httpOnly: true,
    });
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'User logged out successfully!',
    });
});
exports.AuthController = {
    loginUser,
    refreshToken,
    changePassword,
    forgotPass,
    resetPassword,
    logout,
};
