"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const images_model_1 = require("./images.model");
const createFolder = async (folder) => {
    const httpStatus = await import('http-status-ts');
    const isExistFolder = await images_model_1.Folder.findOne({
        foldername: folder.foldername
    });
    if (isExistFolder) {
        throw new ApiError_1.default(httpStatus.HttpStatus.CONFLICT, 'Folder Duplication not allowed!');
    }
    // If no `menu` exists, create a new one
    const newFolder = await images_model_1.Folder.create(folder);
    return newFolder;
};
// // get all menu
// const getAllFolders = async (uploads: IImages) => {
//   const result = await Upload.find(uploads);
//   return result;
// };
// // get single menu
// const getSingleFolder = async (foldername: string) => {
//   const result = await Upload.findOne({ foldername: foldername });
//   return result;
// };
// // delete menu
// const deleteFolder = async (id: string) => {
//   const result = await Upload.findByIdAndDelete(id);
//   return result;
// };
exports.FolderService = {
    createFolder,
    //   getAllFolders,
    //   getSingleFolder,
    //   deleteFolder,
};
