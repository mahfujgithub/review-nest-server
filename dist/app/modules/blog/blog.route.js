"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogRoutes = void 0;
const express_1 = __importDefault(require("express"));
const blog_controller_1 = require("./blog.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const blog_validation_1 = require("./blog.validation");
const router = express_1.default.Router();
router.post('/create', 
//   validateRequest(BlogValidation.BlogZodSchema),
blog_controller_1.BlogController.createBlog);
router.get('/', blog_controller_1.BlogController.getAllBlog);
// get single blog
router.get('/:menu', blog_controller_1.BlogController.getSingleBlog);
// update single blog
router.patch('/:id', (0, validateRequest_1.default)(blog_validation_1.BlogValidation.UpdateBlogSchema), blog_controller_1.BlogController.updateBlog);
// delete single blog
router.delete('/:slug', blog_controller_1.BlogController.deleteBlog);
exports.BlogRoutes = router;
