"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtHelpers = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createToken = (payload, secret, // Ensure secret is explicitly a string
expireTime) => {
    return jsonwebtoken_1.default.sign(payload, secret, {
        expiresIn: '1d',
    });
};
const createResetToken = (payload, // Use a more specific type instead of 'any'
secret, // Ensure secret is explicitly a string
expireTime) => {
    return jsonwebtoken_1.default.sign(payload, secret, {
        expiresIn: '1d',
    });
};
const verifyToken = (token, secret) => {
    const decoded = jsonwebtoken_1.default.verify(token, secret);
    // Ensure the return type is always JwtPayload
    if (typeof decoded === 'string') {
        throw new Error('Invalid token payload'); // Handle string return case
    }
    return decoded;
};
exports.jwtHelpers = {
    createToken,
    verifyToken,
    createResetToken,
};
