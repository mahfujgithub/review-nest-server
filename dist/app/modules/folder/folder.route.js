"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FolderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const folder_controller_1 = require("./folder.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const folder_validation_1 = require("./folder.validation");
const multer_config_1 = __importDefault(require("../../../config/multer.config"));
const router = express_1.default.Router();
// Define multer fields dynamically for folders
const folderFields = [
    { name: 'images', maxCount: 100 }, // Allow up to 10 images for a single folder
];
router.post('/create', multer_config_1.default.fields(folderFields), // Handle multiple folder uploads dynamically
(0, validateRequest_1.default)(folder_validation_1.FolderValidation.FolderZodSchema), folder_controller_1.FolderController.createFolder);
router.get('/', folder_controller_1.FolderController.getAllFolders);
// // get single folder
router.get('/:foldername', folder_controller_1.FolderController.getSingleFolder);
// // delete single folder
router.delete('/:id', folder_controller_1.FolderController.removeFolder);
exports.FolderRoutes = router;
