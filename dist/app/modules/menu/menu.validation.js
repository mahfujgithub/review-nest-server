"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const createMenuZodSchema = zod_1.default.object({
    body: zod_1.default.object({
        menu: zod_1.default.string({
            required_error: 'field is required!',
        }),
        subMenu: zod_1.default.string({
            required_error: 'SubMenu is required!',
        }),
    }),
});
exports.MenuValidation = {
    createMenuZodSchema,
};
