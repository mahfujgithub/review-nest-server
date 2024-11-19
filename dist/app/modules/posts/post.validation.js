"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsValidation = void 0;
const zod_1 = require("zod");
const createPostZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        id: zod_1.z.string({
            required_error: 'field is required!',
        }),
        title: zod_1.z.string({
            required_error: 'field is required!',
        }),
        description: zod_1.z.string({
            required_error: 'field is required!',
        }),
        image: zod_1.z.string({
            required_error: 'field is required!',
        }),
        category: zod_1.z.string({
            required_error: 'field is required!',
        }),
        brand: zod_1.z.string({
            required_error: 'field is required!',
        }),
        quantity: zod_1.z.number().optional(),
        price: zod_1.z.number().optional(),
        features: zod_1.z.string().optional(),
        size: zod_1.z.number().optional(),
        status: zod_1.z.string().optional()
    }),
});
exports.postsValidation = {
    createPostZodSchema
};
