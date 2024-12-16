"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsValidation = void 0;
const zod_1 = require("zod");
const createPostZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        seoTitle: zod_1.z.string({
            required_error: 'Title is required!',
        }),
        slug: zod_1.z.string({
            required_error: 'Field is required!',
        }),
        metaDescription: zod_1.z.string({
            required_error: 'Field is required!',
        }),
        canonicalUrl: zod_1.z.string({
            required_error: 'Field is required!',
        }),
        keywords: zod_1.z.string({
            required_error: 'Field is required!',
        }),
        ogTitle: zod_1.z.string({
            required_error: 'Field is required!',
        }),
        ogImage: zod_1.z.string({
            required_error: 'Field is required!',
        }),
        ogDescription: zod_1.z.string({
            required_error: 'Field is required!',
        }),
        structuredData: zod_1.z.string({
            required_error: 'Field is required!',
        }),
        productTitle: zod_1.z.string({
            required_error: 'Field is required!',
        }),
        subTitle: zod_1.z.string({
            required_error: 'Field is required!',
        }),
        images: zod_1.z.array(zod_1.z.any()).optional(),
        authorName: zod_1.z.string({
            required_error: 'Field is required!',
        }),
        price: zod_1.z.string({
            required_error: 'Field is required!',
        }),
        review: zod_1.z.string({
            required_error: 'Field is required!',
        }),
        availability: zod_1.z.string({
            required_error: 'Field is required!',
        }),
        tags: zod_1.z.string({
            required_error: 'Field is required!'
        }),
        menu: zod_1.z.string({
            required_error: 'Field is required!',
        }),
        subMenu: zod_1.z.string({
            required_error: 'Field is required!',
        }),
        editorData: zod_1.z.string({
            required_error: 'Field is required!',
        }),
    }),
});
exports.postsValidation = {
    createPostZodSchema,
};
