"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsValidation = void 0;
const zod_1 = require("zod");
const createPostZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        metaTitle: zod_1.z.string({
            required_error: 'Title is required!',
        }),
        metaDescription: zod_1.z.string({
            required_error: 'Title is required!',
        }),
        canonicalTag: zod_1.z.array(zod_1.z.string({
            required_error: 'Title is required!',
        })),
        slug: zod_1.z.string({
            required_error: 'Title is required!',
        }),
        featuresImg: zod_1.z.string({
            required_error: 'Title is required!',
        }),
        title: zod_1.z.string({
            required_error: 'Title is required!',
        }),
        subTitle: zod_1.z.string({
            required_error: 'SubTitle is required!',
        }),
        description: zod_1.z.array(zod_1.z.string(), {
            required_error: 'Description is required!',
        }),
        descriptionTwo: zod_1.z.array(zod_1.z.string(), {
            required_error: 'DescriptionTwo is required!',
        }),
        image: zod_1.z.array(zod_1.z.string(), {
            required_error: 'Image is required!',
        }),
        currentlyAvailable: zod_1.z.boolean({
            required_error: 'CurrentlyAvailable is required!',
        }),
        price: zod_1.z.number({
            required_error: 'Price is required!',
        }),
        details: zod_1.z.object({
            brand: zod_1.z.string().optional(),
            size: zod_1.z.array(zod_1.z.number()).optional(),
            productDimensions: zod_1.z.array(zod_1.z.string()).optional(),
            coverMetarial: zod_1.z.string().optional(),
            layersNumber: zod_1.z.number().optional(),
            fillMetarial: zod_1.z.string().optional(),
            specialFuture: zod_1.z.array(zod_1.z.string()).optional(),
            color: zod_1.z.array(zod_1.z.string()).optional(),
            coilType: zod_1.z.string().optional(),
            modelName: zod_1.z.string().optional(),
            itemWeight: zod_1.z.number().optional(),
            customerReview: zod_1.z.number().optional(),
            warrantySupport: zod_1.z.string().optional(),
        })
    }),
});
exports.postsValidation = {
    createPostZodSchema
};
