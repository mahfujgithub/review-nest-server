"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const folder_model_1 = require("./folder.model");
const createFolder = async (folder) => {
    const httpStatus = await import('http-status-ts');
    const isExistFolder = await folder_model_1.Folder.findOne({
        foldername: folder.foldername,
    });
    if (isExistFolder) {
        throw new ApiError_1.default(httpStatus.HttpStatus.CONFLICT, 'Folder Duplication not allowed!');
    }
    // If no `menu` exists, create a new one
    const newFolder = await folder_model_1.Folder.create(folder);
    return newFolder;
};
// // get all menu
const getAllFolders = async (folder) => {
    const result = await folder_model_1.Folder.find(folder);
    return result;
};
// // get single folder
const getSingleFolder = async (foldername) => {
    const result = await folder_model_1.Folder.findOne({ foldername: foldername });
    return result;
};
// // delete folder
const deleteFolder = async (foldername) => {
    const result = await folder_model_1.Folder.findByIdAndDelete(foldername);
    return result;
};
exports.FolderService = {
    createFolder,
    getAllFolders,
    getSingleFolder,
    deleteFolder,
};
