"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StuffValidation = void 0;
const zod_1 = require("zod");
const updateStuffZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.object({
            firstName: zod_1.z.string().optional(),
            lastName: zod_1.z.string().optional(),
            middleName: zod_1.z.string().optional(),
        }),
        email: zod_1.z.string().email().optional(),
        image: zod_1.z.string().optional(),
        // contact: z.string().optional(),
        emergencyContact: zod_1.z.string().optional(),
        address: zod_1.z.string().optional(),
    }),
});
exports.StuffValidation = {
    updateStuffZodSchema,
};
