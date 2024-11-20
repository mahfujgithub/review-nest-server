"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StuffRoutes = void 0;
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const stuff_controller_1 = require("./stuff.controller");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const stuff_validation_1 = require("./stuff.validation");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
// Get All Admin Info (Admin Route)
router.get('/', (0, auth_1.default)("admin" /* ENUM_USER_ROLE.ADMIN */), stuff_controller_1.AdminController.getAllStuff);
// Get Stuff Info Himself/Herself
router.get('/:id', stuff_controller_1.AdminController.getSingleStuff);
// Update Stuff Info Himself/Herself
router.patch('/:id', (0, validateRequest_1.default)(stuff_validation_1.StuffValidation.updateStuffZodSchema), stuff_controller_1.AdminController.updateStuff);
// Delete Admin Info (Admin Route)
router.delete('/:id', (0, auth_1.default)("admin" /* ENUM_USER_ROLE.ADMIN */), stuff_controller_1.AdminController.removeStuff);
exports.StuffRoutes = router;
