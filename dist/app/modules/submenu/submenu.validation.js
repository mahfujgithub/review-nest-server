"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubMenuValidation = void 0;
const zod_1 = require("zod");
// Zod schema for the Blog model
const SubMenuZodSchema = zod_1.z.object({
    seoTitle: zod_1.z.string().trim().min(1, { message: 'SEO Title is required.' }),
    slug: zod_1.z.string().trim().min(1, { message: 'Slug is required.' }),
    metaDescription: zod_1.z
        .string()
        .trim()
        .min(1, { message: 'Meta Description is required.' }),
    canonicalUrl: zod_1.z
        .string()
        .trim()
        .url({ message: 'Canonical URL must be a valid URL.' }),
    keywords: zod_1.z.string().trim().min(1, { message: 'Keywords are required.' }),
    ogTitle: zod_1.z.string().trim().min(1, { message: 'OG Title is required.' }),
    ogImage: zod_1.z.string().trim().url({ message: 'OG Image must be a valid URL.' }),
    ogDescription: zod_1.z
        .string()
        .trim()
        .min(1, { message: 'OG Description is required.' }),
    structuredData: zod_1.z
        .string()
        .trim()
        .min(1, { message: 'Structured Data is required.' }),
    tags: zod_1.z
        .array(zod_1.z.string().trim())
        .nonempty({ message: 'Tags must contain at least one tag.' }),
    subMenuData: zod_1.z.string().trim().min(1, { message: 'SubMenu Data is required.' }),
    subMenu: zod_1.z.string().trim().min(1, { message: "SubMenu is required" })
});
// Optional fields for UpdateBlogSchema
const UpdateSubMenuSchema = SubMenuZodSchema.partial();
// Export the Blog validation object
exports.SubMenuValidation = {
    SubMenuZodSchema,
    UpdateSubMenuSchema,
};
