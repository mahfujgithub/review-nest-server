"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const mongoose_1 = require("mongoose");
const BuyingOptionSchema = new mongoose_1.Schema({
    sourceName: { type: String, required: true },
    source: { type: String, required: true },
    price: { type: String, required: true },
    availability: { type: String, required: true },
});
// Define the schema for Product
const ProductSchema = new mongoose_1.Schema({
    label: { type: String, required: true },
    title: { type: String, required: true },
    subtitle: { type: String, required: true },
    introDes: { type: String, required: true },
    productMainImage: { type: String, required: true },
    productImages: [{ type: String, required: true }],
    buyingOptions: [BuyingOptionSchema],
    productDes: { type: String, required: true },
    actualDes: { type: String, required: true },
});
// Define the schema for AllProduct
const AllProductSchema = new mongoose_1.Schema({
    seoTitle: { type: String, required: true },
    slug: { type: String, required: true },
    metaDescription: { type: String, required: true },
    canonicalUrl: { type: String, required: true },
    keywords: { type: String, required: true },
    ogTitle: { type: String, required: true },
    ogImage: { type: String, required: true },
    ogDescription: { type: String, required: true },
    structuredData: { type: String, required: true },
    tags: [{ type: String, required: true }],
    review: { type: String, required: true },
    productTitle: { type: String, required: true },
    authorName: { type: String, required: true },
    aboutAuthor: { type: String, required: true },
    productCommonIntroDes: { type: String, required: true },
    productFeaturesImage: { type: String, required: true },
    products: [ProductSchema],
    whyTrustUs: { type: String, required: true },
    whoIsFor: { type: String, required: true },
    sources: { type: String, required: true }
});
const PostsSchema = new mongoose_1.Schema({
    menu: { type: String, required: true },
    subMenu: { type: String, required: true },
    allProducts: [AllProductSchema],
});
// Ensure unique combination of menu, subMenu, and allProducts
PostsSchema.index({ menu: 1, subMenu: 1 }, { unique: true });
exports.Post = (0, mongoose_1.model)('Posts', PostsSchema);
