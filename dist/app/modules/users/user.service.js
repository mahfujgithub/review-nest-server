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
const stuff_model_1 = require("../stuff/stuff.model");
const createAdmin = async (stuff, user) => {
    const httpStatus = await import('http-status-ts');
    if (!user.password) {
        user.password = config_1.default.defaultAdminPassword;
    }
    let newUserAllData = null;
    // let id:string;
    // Validate the role field
    if (user.role !== 'admin' && user.role !== 'content-writer') {
        throw new ApiError_1.default(httpStatus.HttpStatus.BAD_REQUEST, 'Invalid role!');
    }
    const session = await mongoose_1.default.startSession();
    try {
        session.startTransaction();
        let id;
        switch (user.role) {
            case 'admin':
                id = await (0, user_utils_1.generateAdminId)();
                break;
            case 'content-writer':
                id = await (0, user_utils_1.generateContentWriterId)();
                break;
            default:
                throw new Error('Invalid role');
        }
        user.id = id;
        stuff.id = id;
        // array
        const newStuff = await stuff_model_1.Stuff.create([stuff], { session });
        if (!newStuff.length) {
            throw new ApiError_1.default(httpStatus.HttpStatus.BAD_REQUEST, `Failed to create customer!`);
        }
        // set customer --> _id into user.customer
        user.stuff = newStuff[0]._id;
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
        newUserAllData = await user_model_1.User.findOne({ id: newUserAllData.id }).populate({
            path: 'stuff',
            strictPopulate: false,
        });
    }
    return newUserAllData;
};
exports.UserService = {
    createAdmin,
};
