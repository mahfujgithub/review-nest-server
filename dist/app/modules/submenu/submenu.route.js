"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubMenuRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const submenu_validation_1 = require("./submenu.validation");
const submenu_controller_1 = require("./submenu.controller");
const router = express_1.default.Router();
router.post('/create', 
//   validateRequest(BlogValidation.SubMenuZodSchema),
submenu_controller_1.SubMenuController.createSubMenu);
router.get('/', submenu_controller_1.SubMenuController.getAllSubMenu);
// get single blog
router.get('/:subMenu', submenu_controller_1.SubMenuController.getSingleSubMenu);
// update single blog
router.patch('/:id', (0, validateRequest_1.default)(submenu_validation_1.SubMenuValidation.UpdateSubMenuSchema), submenu_controller_1.SubMenuController.updateSubMenu);
// delete single blog
router.delete('/:slug', submenu_controller_1.SubMenuController.deleteSubMenu);
exports.SubMenuRoute = router;
