"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const createAdminZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z.string().optional(),
        admin: zod_1.z.object({
            name: zod_1.z.object({
                firstName: zod_1.z.string({
                    required_error: 'field is required!',
                }),
                lastName: zod_1.z.string({
                    required_error: 'field is required!',
                }),
                middleName: zod_1.z.string().optional(),
            }),
            email: zod_1.z
                .string({
                required_error: 'field is required!',
            })
                .email(),
            image: zod_1.z.string().optional(),
            contact: zod_1.z.string({
                required_error: 'field is required!',
            }),
            emergencyContact: zod_1.z.string().optional(),
            address: zod_1.z.string({
                required_error: 'field is required!',
            }),
        }),
    }),
});
exports.UserValidation = {
    createAdminZodSchema,
};
