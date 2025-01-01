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
  subtitle: z.string({ required_error: 'subtitle is required' }),
  introDes: z.string({ required_error: 'introDes is required' }),
  productMainImage: z.string({ required_error: 'productMainImage is required' }),
  productImages: z.array(z.string({ required_error: 'productImages is required' })).nonempty({ message: 'productImages must have at least one item' }),
  buyingOptions: z.array(BuyingOptionZodSchema).nonempty({ message: 'buyingOptions must have at least one item' }),
  productDes: z.string({ required_error: 'productDes is required' }),
  actualDes: z.string({ required_error: 'actualDes is required' }),
});

// Define the schema for AllProduct
const AllProductZodSchema = z.object({
  seoTitle: z.string({ required_error: 'seoTitle is required' }),
  slug: z.string({ required_error: 'slug is required' }),
  metaDescription: z.string({ required_error: 'metaDescription is required' }),
  canonicalUrl: z.string({ required_error: 'canonicalUrl is required' }),
  keywords: z.string({ required_error: 'keywords is required' }),
  ogTitle: z.string({ required_error: 'ogTitle is required' }),
  ogImage: z.string({ required_error: 'ogImage is required' }),
  ogDescription: z.string({ required_error: 'ogDescription is required' }),
  structuredData: z.string({ required_error: 'structuredData is required' }),
  tags: z.array(z.string({ required_error: 'tags is required' })).nonempty({ message: 'tags must have at least one item' }),
  review: z.string({ required_error: 'review is required' }),
  productTitle: z.string({ required_error: 'productTitle is required' }),
  authorName: z.string({ required_error: 'authorName is required' }),
  aboutAuthor: z.string({ required_error: 'aboutAuthor is required' }),
  productCommonIntroDes: z.string({ required_error: 'productCommonIntroDes is required' }),
  productFeaturesImage: z.string({
    required_error: 'productFeaturesImage is required',
  }),
  products: z.array(ProductZodSchema).nonempty({ message: 'products must have at least one item' }),
  whyTrustUs: z.string({ required_error: 'whyTrustUs is required' }),
  whoIsFor: z.string({ required_error: 'whoIsFor is required' }),
  sources: z.string({ required_error: 'sources is required' }),
});

// Define the schema for Menu
const createPostZodSchema = z.object({
  body: z.object({
    seoTitle: z.string({
      required_error: 'Title is required!',
    }),
    slug: z.string({
      required_error: 'Field is required!',
    }),
    metaDescription: z.string({
      required_error: 'Field is required!',
    }),
    canonicalUrl: z.string({
      required_error: 'Field is required!',
    }),
    keywords: z.string({
      required_error: 'Field is required!',
    }),
    ogTitle: z.string({
      required_error: 'Field is required!',
    }),
    ogImage: z.string({
      required_error: 'Field is required!',
    }),
    ogDescription: z.string({
      required_error: 'Field is required!',
    }),
    structuredData: z.string({
      required_error: 'Field is required!',
    }),
    productTitle: z.string({
      required_error: 'Field is required!',
    }),
    subTitle: z.string({
      required_error: 'Field is required!',
    }),
    images: z.array(z.any()).optional(),
    authorName: z.string({
      required_error: 'Field is required!',
    }),
    price: z.string({
      required_error: 'Field is required!',
    }),
    review: z.string({
      required_error: 'Field is required!',
    }),
    availability: z.string({
      required_error: 'Field is required!',
    }),
    tags: z.array(z.string({
        required_error: 'Field is required!'
    })),
    menu: z.string({
      required_error: 'Field is required!',
    }),
    subMenu: z.string({
      required_error: 'Field is required!',
    }),
    editorData: z.string({
      required_error: 'Field is required!',
    }),
  }),
});

export const postsValidation = {
  createPostZodSchema,
};
