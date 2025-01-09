"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const images_service_1 = require("./images.service");
const config_1 = __importDefault(require("../../../config"));
// create post
const createFolder = (0, catchAsync_1.default)(async (req, res) => {
    const httpStatus = await import('http-status-ts');
    const folder = req.body;
    // Base URL for the images (replace with your app's URL)
    const baseUrl = config_1.default.server_address;
    // Process uploaded files
    const files = req.files;
    // Loop through all folders dynamically based on the keys in files
    Object.keys(files).forEach(field => {
        // Check if the field corresponds to a product's image
        const match = field.match(/^images\[(\d+)]\[(urls)]/);
        if (match) {
            const folderIndex = match[1]; // Extract product index from the field
            const imageType = match[2]; // Either productMainImage or productImages
            if (!folder.images[folderIndex]) {
                folder.images[folderIndex] = {}; // Initialize the product if not yet set
            }
            if (imageType === 'urls' && files[field]) {
                folder.images[folderIndex].urls = files[field].map(file => `${baseUrl}uploads/${file.originalname}`);
            }
        }
    });
    const result = await images_service_1.FolderService.createFolder(folder);
    // Construct the full URLs for images in the response
    const constructImageUrl = (imagePath) => {
        return `${baseUrl}uploads/${imagePath}`; // Replace with your app's domain
    };
    if (folder.images) {
        folder.images.forEach((folder) => {
            if (folder.urls) {
                folder.urls = folder.urls.map(constructImageUrl);
            }
        });
    }
    (0, sendResponse_1.default)(res, {
        statusCode: httpStatus.HttpStatus.OK,
        success: true,
        message: 'Folder Created Successfully',
        data: result,
    });
});
// // get all post
// const getAllfolder = catchAsync(async (req: Request, res: Response) => {
//   const httpStatus = await import('http-status-ts');
//   const result = await folderervice.getAllfolder(paginationOptions, filters);
//   // console.log(filters)
//   sendResponse<IImages[]>(res, {
//     statusCode: httpStatus.HttpStatus.OK,
//     success: true,
//     message: `Get All Post SuccessFullly`,
//     meta: result.meta,
//     data: result.data,
//   });
// });
// // get single post by id
// const getSingleFolder = catchAsync(async (req: Request, res: Response) => {
//   const httpStatus = await import('http-status-ts');
//   const { slug } = req.params;
//   const result = await folderervice.getSingleFolder(slug);
//   sendResponse<IImages>(res, {
//     statusCode: httpStatus.HttpStatus.OK,
//     success: true,
//     message: `Get Single Post SuccessFully`,
//     data: result,
//   });
// });
// // remove post
// const removeFolder = catchAsync(async (req: Request, res: Response) => {
//   const httpStatus = await import('http-status-ts');
//   const { slug } = req.params;
//   const result = await folderervice.deleteFolder(slug);
//   sendResponse<IImages>(res, {
//     statusCode: httpStatus.HttpStatus.OK,
//     success: true,
//     message: `Remove Post SuccessFullly`,
//     data: result,
//   });
// });
exports.FolderController = {
    createFolder,
    //   getAllfolder,
    //   getSingleFolder,
    //   removeFolder
};
