"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImagesRoutes = void 0;
const express_1 = __importDefault(require("express"));
const images_controller_1 = require("./images.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const images_validation_1 = require("./images.validation");
const router = express_1.default.Router();
let folderFields = [];
// Dynamically create fields for products (adjust based on max products expected)
const maxProducts = 10; // Maximum number of products you want to handle dynamically
for (let i = 0; i < maxProducts; i++) {
    folderFields.push({ name: `urls[${i}][productMainImage]`, maxCount: 1 }, { name: `allProducts[${i}][productImages][]`, maxCount: 10 });
}
router.post('/create', (0, validateRequest_1.default)(images_validation_1.FolderValidation.folderZodSchema), images_controller_1.FolderController.createFolder);
// router.get('/', ImageController.getAllMenu);
// // get single menu
// router.get('/:fileName', ImageController.getSingleMenu);
// // delete single menu
// router.delete('/:fileName', ImageController.deleteMenu);
exports.ImagesRoutes = router;
