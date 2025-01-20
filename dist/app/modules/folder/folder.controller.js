"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const folder_service_1 = require("./folder.service");
const config_1 = __importDefault(require("../../../config"));
// Create Folder
const createFolder = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { foldername } = req.body;
    const files = req.files;
    // Ensure images are present in the 'images' field
    const imageFiles = files['images']; // Adjust field name if needed
    // Process files or URLs
    const imageUrls = imageFiles
        ? imageFiles.map(file => `${config_1.default.server_address}/uploads/${file.filename}`)
        : [];
    const folder = { foldername, images: imageUrls };
    // Call FolderService to create folder with the folder data
    const result = await folder_service_1.FolderService.createFolder(folder);
    // Send success response
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Folder created successfully',
        data: result,
    });
});
// get all folders
const getAllFolders = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const folder = req.body;
    const result = await folder_service_1.FolderService.getAllFolders(folder);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Folders Get SuccessFully',
        data: result,
    });
});
// // get single post by id
const getSingleFolder = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { foldername } = req.params;
    const result = await folder_service_1.FolderService.getSingleFolder(foldername);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Get Single Post SuccessFully`,
        data: result,
    });
});
// // remove folder
const removeFolder = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const { id } = req.params;
    const result = await folder_service_1.FolderService.deleteFolder(id);
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: `Remove Post SuccessFullly`,
        data: result,
    });
});
exports.FolderController = {
    createFolder,
    getAllFolders,
    getSingleFolder,
    removeFolder
};
