"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const post_constant_1 = require("./post.constant");
const post_model_1 = require("./post.model");
const paginationHelper_1 = require("../../../helpers/paginationHelper");
// create post
const createPost = async (post) => {
    const httpStatus = await import('http-status-ts');
    const isExist = await post_model_1.PostModel.findOne({
        productSlug: post.slug,
    });
    if (isExist) {
        throw new ApiError_1.default(httpStatus.HttpStatus.CONFLICT, 'Post is Already Exits');
    }
    const existingMenu = await post_model_1.PostModel.findOne({ menu: post.menu });
    if (existingMenu) {
        // Check if the subMenu under the same menu already exists
        if (existingMenu.subMenu === post.subMenu) {
            throw new ApiError_1.default(httpStatus.HttpStatus.CONFLICT, 'SubMenu Duplication not allowed!');
        }
    }
    const newPost = await post_model_1.PostModel.create(post);
    return newPost;
};
// get all posts
const getAllPost = async (paginationOptions, filters) => {
    const { searchTerm, ...filtersData } = filters;
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            $or: post_constant_1.postSearchableFields.map(field => ({
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
    const result = await post_model_1.PostModel.find(whereConditions)
        .sort(sortConditions)
        .skip(skip)
        .limit(limit);
    const total = await post_model_1.PostModel.countDocuments(whereConditions);
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
};
// get single by id
const getSinglePost = async (slug) => {
    const httpStatus = await import('http-status-ts');
    const result = await post_model_1.PostModel.findById(slug);
    if (!result) {
        throw new ApiError_1.default(httpStatus.HttpStatus.NOT_FOUND, 'Post not found');
    }
    return result;
};
// update post
const updatePost = async (_id, payload) => {
    const httpStatus = await import('http-status-ts');
    const idExist = post_model_1.PostModel.findById(_id);
    if (!idExist) {
        throw new ApiError_1.default(httpStatus.HttpStatus.CONFLICT, 'Post Not Found');
    }
    const { ...postData } = payload;
    const updatedPostData = { ...postData };
    const result = await post_model_1.PostModel.findByIdAndUpdate({ _id }, updatedPostData, {
        new: true,
    });
    return result;
};
// remove post
const removePost = async (id) => {
    const result = await post_model_1.PostModel.findByIdAndDelete(id);
    return result;
};
exports.PostService = {
    createPost,
    getAllPost,
    getSinglePost,
    removePost,
    updatePost,
};
