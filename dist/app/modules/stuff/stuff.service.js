"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminService = void 0;
const stuff_model_1 = require("./stuff.model");
const stuff_constant_1 = require("./stuff.constant");
const paginationHelper_1 = require("../../../helpers/paginationHelper");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const getAllStuff = async (paginationOptions, filters) => {
    const { searchTerm, ...filtersData } = filters;
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            $or: stuff_constant_1.stuffSearchableFields.map(field => ({
                [field]: {
                    $regex: searchTerm,
                    $options: 'i',
                },
            })),
        });
    }
    if (Object.keys(filtersData).length) {
        andConditions.push({
            $and: Object.entries(filtersData).map(([field, value]) => ({
                [field]: value,
            })),
        });
    }
    const { page, limit, skip, sortBy, sortOrder } = paginationHelper_1.paginationHelpers.calculatePagination(paginationOptions);
    const sortConditions = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    const whereConditions = andConditions.length > 0 ? { $and: andConditions } : {};
    const result = await stuff_model_1.Stuff.find(whereConditions)
        .sort(sortConditions)
        .skip(skip)
        .limit(limit);
    const total = await stuff_model_1.Stuff.countDocuments(whereConditions);
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
};
const getSingleStuff = async (id) => {
    const result = await stuff_model_1.Stuff.findById(id);
    return result;
};
const updateStuff = async (id, payload) => {
    const httpStatus = await import('http-status-ts');
    const isExist = await stuff_model_1.Stuff.findOne({ id });
    if (!isExist) {
        throw new ApiError_1.default(httpStatus.HttpStatus.NOT_FOUND, 'Admin not found!');
    }
    if (Object.hasOwn(payload, 'email')) {
        throw new ApiError_1.default(httpStatus.HttpStatus.BAD_REQUEST, "Updating the 'email' is not allowed!");
    }
    const { name, ...adminData } = payload;
    const updatedAdminData = { ...adminData };
    if (name && Object.keys(name).length > 0) {
        Object.keys(name).forEach(key => {
            const nameKey = `name.${key}`;
            updatedAdminData[nameKey] = name[key];
        });
    }
    const result = await stuff_model_1.Stuff.findOneAndUpdate({ id }, updatedAdminData, {
        new: true,
    });
    return result;
};
const deleteStuff = async (id) => {
    const result = await stuff_model_1.Stuff.findByIdAndDelete(id);
    return result;
};
exports.AdminService = {
    getAllStuff,
    getSingleStuff,
    updateStuff,
    deleteStuff,
};
