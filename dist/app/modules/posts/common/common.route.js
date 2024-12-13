"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRouter = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../../middlewares/validateRequest"));
const common_validation_1 = require("./common.validation");
const common_controller_1 = require("./common.controller");
const router = express_1.default.Router();
router.post('/create-post', (0, validateRequest_1.default)(common_validation_1.postsValidation.createPostZodSchema), common_controller_1.postController.createPosts);
router.get('/get-products', common_controller_1.postController.getProducts);
exports.PostRouter = router;
