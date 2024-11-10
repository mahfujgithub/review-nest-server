"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const jwtHelpers_1 = require("../../helpers/jwtHelpers");
const config_1 = __importDefault(require("../../config"));
const auth = (...requiredRoles) => async (req, res, next) => {
    const httpStatus = await import('http-status-ts');
    try {
        // get authorization token
        const token = req.headers.authorization;
        if (!token) {
            throw new ApiError_1.default(httpStatus.HttpStatus.UNAUTHORIZED, 'You are not authorized!');
        }
        // verify token
        let verifiedUser = null;
        verifiedUser = jwtHelpers_1.jwtHelpers.verifyToken(token, config_1.default.jwt.secret);
        req.user = verifiedUser; // role, id
        // role  guard
        if (requiredRoles.length && !requiredRoles.includes(verifiedUser.role)) {
            throw new ApiError_1.default(httpStatus.HttpStatus.FORBIDDEN, 'Forbidden!');
        }
        next();
    }
    catch (error) {
        next(error);
    }
};
exports.default = auth;
