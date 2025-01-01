"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRouter = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const post_validation_1 = require("./post.validation");
const post_controller_1 = require("./post.controller");
const router = express_1.default.Router();
// create post
router.post('/create-post', 
// upload.single('allProducts[ogImage]'),
(0, validateRequest_1.default)(post_validation_1.postsValidation.createPostZodSchema), post_controller_1.postController.createPosts);
// get all post
router.get('/', post_controller_1.postController.getAllPosts);
// get single post
router.get('/:id', post_controller_1.postController.getSinglePosts);
// update post
router.patch('/:id', post_controller_1.postController.updatePosts);
// remove post
router.delete('/:id', post_controller_1.postController.removePosts);
exports.PostRouter = router;
