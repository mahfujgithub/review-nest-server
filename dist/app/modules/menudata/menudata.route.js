"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuDataRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const menudata_validation_1 = require("./menudata.validation");
const menudata_controller_1 = require("./menudata.controller");
const router = express_1.default.Router();
router.post('/create', 
//   validateRequest(MenuDataValidation.MenuDataZodSchema),
menudata_controller_1.MenuDataController.createMenuData);
router.get('/', menudata_controller_1.MenuDataController.getAllMenuData);
// get single blog
router.get('/:slug', menudata_controller_1.MenuDataController.getSingleMenuData);
// update single blog
router.patch('/:id', (0, validateRequest_1.default)(menudata_validation_1.MenuDataValidation.UpdateMenuDataSchema), menudata_controller_1.MenuDataController.updateMenuData);
// delete single blog
router.delete('/:slug', menudata_controller_1.MenuDataController.deleteMenuData);
exports.MenuDataRoutes = router;
