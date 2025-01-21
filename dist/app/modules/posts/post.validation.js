"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostValidation = void 0;
const zod_1 = require("zod");
// Define the schema for BuyingOption
const BuyingOptionZodSchema = zod_1.z.object({
    sourceName: zod_1.z.string({ required_error: 'sourceName is required' }),
    source: zod_1.z.string({ required_error: 'source is required' }),
    price: zod_1.z.string({ required_error: 'price is required' }),
    availability: zod_1.z.string({ required_error: 'availability is required' }),
});
// Define the schema for Product
const ProductZodSchema = zod_1.z.object({
    label: zod_1.z.string({ required_error: 'label is required' }),
    title: zod_1.z.string({ required_error: 'title is required' }),
    introDes: zod_1.z.string({ required_error: 'introDes is required' }),
    productMainImage: zod_1.z.string().optional(),
    productImages: zod_1.z.array(zod_1.z.string().optional()).optional(),
    buyingOptions: zod_1.z
        .array(BuyingOptionZodSchema)
        .nonempty({ message: 'buyingOptions must have at least one item' }),
    productDes: zod_1.z.string({ required_error: 'productDes is required' }),
    actualDes: zod_1.z.string({ required_error: 'actualDes is required' }),
});
// Define the schema for AllProduct (Post)
const createPostZodSchema = zod_1.z.object({
    seoTitle: zod_1.z.string({ required_error: 'slug is required' }),
    slug: zod_1.z.string({ required_error: 'slug is required' }),
    metaDescription: zod_1.z.string({ required_error: 'metaDescription is required' }),
    canonicalUrl: zod_1.z.string({ required_error: 'canonicalUrl is required' }),
    keywords: zod_1.z.string({ required_error: 'keywords is required' }),
    ogTitle: zod_1.z.string({ required_error: 'ogTitle is required' }),
    ogImage: zod_1.z.string().optional(),
    ogDescription: zod_1.z.string({ required_error: 'ogDescription is required' }),
    structuredData: zod_1.z.string({ required_error: 'structuredData is required' }),
    tags: zod_1.z
        .array(zod_1.z.string({ required_error: 'Each tag must be a string' }))
        .nonempty({ message: 'tags must have at least one item' }),
    productTitle: zod_1.z.string({ required_error: 'productTitle is required' }),
    authorName: zod_1.z.string({ required_error: 'authorName is required' }),
    productCommonIntroDes: zod_1.z.string({
        required_error: 'productCommonIntroDes is required',
    }),
    productFeaturesImage: zod_1.z.string().optional(),
    allProducts: zod_1.z.array(ProductZodSchema).optional(),
    whyTrustUs: zod_1.z.string({ required_error: 'whyTrustUs is required' }),
    whoIsFor: zod_1.z.string({ required_error: 'whoIsFor is required' }),
    sources: zod_1.z.string({ required_error: 'sources is required' }),
    menu: zod_1.z.string({ required_error: 'menu is required' }),
    subMenu: zod_1.z.string({ required_error: 'subMenu is required' }),
});
// Define the schema for creating a post (with body)
const postZodSchema = zod_1.z.object({
    body: createPostZodSchema,
});
// Export validation schemas
exports.PostValidation = {
    postZodSchema,
};
