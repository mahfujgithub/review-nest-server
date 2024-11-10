"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const user_model_1 = require("./user.model");
const user_utils_1 = require("./user.utils");
const config_1 = __importDefault(require("../../../config"));
const mongoose_1 = __importDefault(require("mongoose"));
const admin_model_1 = require("../admin/admin.model");
const createAdmin = async (admin, user) => {
    const httpStatus = await import('http-status-ts');
    if (!user.password) {
        user.password = config_1.default.defaultAdminPassword;
    }
    let newUserAllData = null;
    // set role
    user.role = 'admin';
    const session = await mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const id = await (0, user_utils_1.generateAdminId)();
        user.id = id;
        admin.id = id;
        // array
        const newAdmin = await admin_model_1.Admin.create([admin], { session });
        if (!newAdmin.length) {
            throw new ApiError_1.default(httpStatus.HttpStatus.BAD_REQUEST, `Failed to create customer!`);
        }
        // set customer --> _id into user.customer
        user.admin = newAdmin[0]._id;
        const newUser = await user_model_1.User.create([user], { session });
        if (!newUser.length) {
            throw new ApiError_1.default(httpStatus.HttpStatus.BAD_REQUEST, `Failed to create user!`);
        }
        newUserAllData = newUser[0];
        await session.commitTransaction();
    }
    catch (error) {
        console.error('Error creating customer or user:', error);
        await session.abortTransaction();
        throw error;
    }
    finally {
        session.endSession();
    }
    if (newUserAllData) {
        newUserAllData = await user_model_1.User.findOne({ id: newUserAllData.id });
    }
    return newUserAllData;
};
exports.UserService = {
    createAdmin,
};
