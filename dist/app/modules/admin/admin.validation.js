"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminValidation = void 0;
const zod_1 = require("zod");
const updateAdminZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.object({
            firstName: zod_1.z.string().optional(),
            lastName: zod_1.z.string().optional(),
            middleName: zod_1.z.string().optional(),
        }),
        email: zod_1.z.string().email().optional(),
        image: zod_1.z.string().optional(),
        contact: zod_1.z.string().optional(),
        emergencyContact: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
    }),
});
exports.AdminValidation = {
    updateAdminZodSchema,
};
