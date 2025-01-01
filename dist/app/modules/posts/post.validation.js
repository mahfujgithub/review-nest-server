"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsValidation = void 0;
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
    subtitle: zod_1.z.string({ required_error: 'subtitle is required' }),
    introDes: zod_1.z.string({ required_error: 'introDes is required' }),
    productMainImage: zod_1.z.string({ required_error: 'productMainImage is required' }),
    productImages: zod_1.z.array(zod_1.z.string({ required_error: 'productImages is required' })).nonempty({ message: 'productImages must have at least one item' }),
    buyingOptions: zod_1.z.array(BuyingOptionZodSchema).nonempty({ message: 'buyingOptions must have at least one item' }),
    productDes: zod_1.z.string({ required_error: 'productDes is required' }),
    actualDes: zod_1.z.string({ required_error: 'actualDes is required' }),
});
// Define the schema for AllProduct
const AllProductZodSchema = zod_1.z.object({
    seoTitle: zod_1.z.string({ required_error: 'seoTitle is required' }),
    slug: zod_1.z.string({ required_error: 'slug is required' }),
    metaDescription: zod_1.z.string({ required_error: 'metaDescription is required' }),
    canonicalUrl: zod_1.z.string({ required_error: 'canonicalUrl is required' }),
    keywords: zod_1.z.string({ required_error: 'keywords is required' }),
    ogTitle: zod_1.z.string({ required_error: 'ogTitle is required' }),
    ogImage: zod_1.z.string({ required_error: 'ogImage is required' }),
    ogDescription: zod_1.z.string({ required_error: 'ogDescription is required' }),
    structuredData: zod_1.z.string({ required_error: 'structuredData is required' }),
    tags: zod_1.z.array(zod_1.z.string({ required_error: 'tags is required' })).nonempty({ message: 'tags must have at least one item' }),
    review: zod_1.z.string({ required_error: 'review is required' }),
    productTitle: zod_1.z.string({ required_error: 'productTitle is required' }),
    authorName: zod_1.z.string({ required_error: 'authorName is required' }),
    aboutAuthor: zod_1.z.string({ required_error: 'aboutAuthor is required' }),
    productCommonIntroDes: zod_1.z.string({ required_error: 'productCommonIntroDes is required' }),
    productFeaturesImage: zod_1.z.string({
        required_error: 'productFeaturesImage is required',
    }),
    products: zod_1.z.array(ProductZodSchema).nonempty({ message: 'products must have at least one item' }),
    whyTrustUs: zod_1.z.string({ required_error: 'whyTrustUs is required' }),
    whoIsFor: zod_1.z.string({ required_error: 'whoIsFor is required' }),
    sources: zod_1.z.string({ required_error: 'sources is required' }),
});
// Define the schema for Menu
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
