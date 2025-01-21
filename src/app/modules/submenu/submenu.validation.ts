import { z } from 'zod';

// Zod schema for the Blog model
const BlogZodSchema = z.object({
  seoTitle: z.string().trim().min(1, { message: 'SEO Title is required.' }),
  slug: z.string().trim().min(1, { message: 'Slug is required.' }),
  metaDescription: z
    .string()
    .trim()
    .min(1, { message: 'Meta Description is required.' }),
  canonicalUrl: z
    .string()
    .trim()
    .url({ message: 'Canonical URL must be a valid URL.' }),
  keywords: z.string().trim().min(1, { message: 'Keywords are required.' }),
  ogTitle: z.string().trim().min(1, { message: 'OG Title is required.' }),
  ogImage: z.string().trim().url({ message: 'OG Image must be a valid URL.' }),
  ogDescription: z
    .string()
    .trim()
    .min(1, { message: 'OG Description is required.' }),
  structuredData: z
    .string()
    .trim()
    .min(1, { message: 'Structured Data is required.' }),
  tags: z
    .array(z.string().trim())
    .nonempty({ message: 'Tags must contain at least one tag.' }),
    subMenuData: z.string().trim().min(1, { message: 'SubMenu Data is required.' }),
});

// Optional fields for UpdateBlogSchema
const UpdateBlogSchema = BlogZodSchema.partial();

// Export the Blog validation object
export const SubMenuValidation = {
  BlogZodSchema,
  UpdateBlogSchema,
};
