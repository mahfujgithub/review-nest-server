"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuRoutes = void 0;
const express_1 = __importDefault(require("express"));
const menu_controller_1 = require("./menu.controller");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const menu_validation_1 = require("./menu.validation");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const router = express_1.default.Router();
router.post('/create', (0, validateRequest_1.default)(menu_validation_1.MenuValidation.createMenuZodSchema), menu_controller_1.MenuController.createMenu);
router.get('/', (0, auth_1.default)("admin" /* ENUM_USER_ROLE.ADMIN */), menu_controller_1.MenuController.getAllMenu);
// get single menu
router.get('/:id', menu_controller_1.MenuController.getSingleMenu);
// update single menu
router.patch('/:id', (0, validateRequest_1.default)(menu_validation_1.MenuValidation.createMenuZodSchema), menu_controller_1.MenuController.updateMenu);
// delete single menu
router.delete('/:id', menu_controller_1.MenuController.deleteMenu);
exports.MenuRoutes = router;
