import { z } from 'zod';

// Define the schema for BuyingOption
const BuyingOptionZodSchema = z.object({
  sourceName: z.string({ required_error: 'sourceName is required' }),
  source: z.string({ required_error: 'source is required' }),
  price: z.string({ required_error: 'price is required' }),
  availability: z.string({ required_error: 'availability is required' }),
});

// Define the schema for Product
const ProductZodSchema = z.object({
  label: z.string({ required_error: 'label is required' }),
  title: z.string({ required_error: 'title is required' }),
  introDes: z.string({ required_error: 'introDes is required' }),
  productMainImage: z.string().optional(),
  productImages: z.array(z.string().optional()).optional(),
  buyingOptions: z
    .array(BuyingOptionZodSchema)
    .nonempty({ message: 'buyingOptions must have at least one item' }),
  productDes: z.string({ required_error: 'productDes is required' }),
  actualDes: z.string({ required_error: 'actualDes is required' }),
});

// Define the schema for AllProduct (Post)
const createPostZodSchema = z.object({
  slug: z.string({ required_error: 'slug is required' }),
  metaDescription: z.string({ required_error: 'metaDescription is required' }),
  canonicalUrl: z.string({ required_error: 'canonicalUrl is required' }),
  keywords: z.string({ required_error: 'keywords is required' }),
  ogTitle: z.string({ required_error: 'ogTitle is required' }),
  ogImage: z.string().optional(),
  ogDescription: z.string({ required_error: 'ogDescription is required' }),
  structuredData: z.string({ required_error: 'structuredData is required' }),
  tags: z
    .array(z.string({ required_error: 'Each tag must be a string' }))
    .nonempty({ message: 'tags must have at least one item' }),
  review: z.string({ required_error: 'review is required' }),
  productTitle: z.string({ required_error: 'productTitle is required' }),
  authorName: z.string({ required_error: 'authorName is required' }),
  productCommonIntroDes: z.string({
    required_error: 'productCommonIntroDes is required',
  }),
  productFeaturesImage: z.string().optional(),
  products: z
    .array(ProductZodSchema).optional(),
  whyTrustUs: z.string({ required_error: 'whyTrustUs is required' }),
  whoIsFor: z.string({ required_error: 'whoIsFor is required' }),
  sources: z.string({ required_error: 'sources is required' }),
  menu: z.string({ required_error: 'menu is required' }),
  subMenu: z.string({ required_error: 'subMenu is required' }),
});

// Define the schema for creating a post (with body)
const postZodSchema = z.object({
  body: createPostZodSchema,
});

// Export validation schemas
export const PostValidation = {
  postZodSchema,
};
