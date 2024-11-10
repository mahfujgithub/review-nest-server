"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const config_1 = __importDefault(require("../../../config"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const user_model_1 = require("../users/user.model");
const loginUser = async (payload) => {
    const httpStatus = await import('http-status-ts');
    const { id, password } = payload;
    //   check user existence
    const isUserExist = await user_model_1.User.isUserExist(id);
    if (!isUserExist) {
        throw new ApiError_1.default(httpStatus.HttpStatus.NOT_FOUND, 'User does not exist!');
    }
    if (isUserExist.password &&
        !(await user_model_1.User.isPasswordMatched(password, isUserExist.password))) {
        throw new ApiError_1.default(httpStatus.HttpStatus.UNAUTHORIZED, 'Password is incorrect!');
    }
    //   create access token & refresh token
    const { id: userId, role } = isUserExist;
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({ userId, role }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    const refreshToken = jwtHelpers_1.jwtHelpers.createToken({ id, role }, config_1.default.jwt.refresh_secret, config_1.default.jwt.refresh_expires_in);
    return {
        accessToken,
        refreshToken,
    };
};
const refreshToken = async (token) => {
    const httpStatus = await import('http-status-ts');
    let verifiedToken = null;
    try {
        verifiedToken = jwtHelpers_1.jwtHelpers.verifyToken(token, config_1.default.jwt.refresh_secret);
    }
    catch (err) {
        throw new ApiError_1.default(httpStatus.HttpStatus.FORBIDDEN, 'Invalid refresh token!');
    }
    const { userId } = verifiedToken;
    const isUserExist = await user_model_1.User.isUserExist(userId);
    if (!isUserExist) {
        throw new ApiError_1.default(httpStatus.HttpStatus.NOT_FOUND, 'User does not exist!');
    }
    // generate new token
    const newAccessToken = jwtHelpers_1.jwtHelpers.createToken({
        id: isUserExist.id,
        role: isUserExist.role,
    }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    return {
        accessToken: newAccessToken,
    };
};
exports.AuthService = {
    loginUser,
    refreshToken,
};
