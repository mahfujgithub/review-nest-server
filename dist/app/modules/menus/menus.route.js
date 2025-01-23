"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenusRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const menus_controller_1 = require("./menus.controller");
const menu_validation_1 = require("../menu/menu.validation");
const router = express_1.default.Router();
router.post('/create', 
//   validateRequest(BlogValidation.MenusZodSchema),
menus_controller_1.MenusController.createMenus);
router.get('/menus', menus_controller_1.MenusController.getAllMenus);
// get single blog
router.get('/:slug', menus_controller_1.MenusController.getSingleMenus);
// update single blog
router.patch('/:id', (0, validateRequest_1.default)(menu_validation_1.MenuValidation.UpdateMenusSchema), menus_controller_1.MenusController.updateMenus);
// delete single blog
router.delete('/:slug', menus_controller_1.MenusController.deleteMenus);
exports.MenusRoute = router;
