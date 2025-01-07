import { Schema, model, Model } from 'mongoose';
import { IPosts } from './post.interface';

// Define the IProducts schema
const ProductSchema = new Schema({
  label: { type: String, required: true },
  title: { type: String, required: true },
  introDes: { type: String, required: true },
  productMainImage: { type: String, required: true },
  productImages: {
    type: [String],
    required: false,
    validate: {
      validator: (array: string[]) => array.length > 0,
      message: 'productImages must contain at least one item',
    },
  },
  buyingOptions: {
    type: [
      {
        sourceName: { type: String, required: true },
        source: { type: String, required: true },
        price: { type: String, required: true },
        availability: { type: String, required: true },
      },
    ],
    validate: {
      validator: (array: any[]) => array.length > 0,
      message: 'buyingOptions must contain at least one item',
    },
  },
  productDes: { type: String, required: true },
  actualDes: { type: String, required: true },
});

// Define the IPosts schema
const PostSchema = new Schema({
  slug: { type: String, required: true },
  metaDescription: { type: String, required: true },
  canonicalUrl: { type: String, required: true },
  keywords: { type: String, required: true },
  ogTitle: { type: String, required: true },
  ogImage: { type: String, required: true },
  ogDescription: { type: String, required: true },
  structuredData: { type: String, required: true },
  tags: {
    type: [String],
    required: true,
    validate: {
      validator: (array: string[]) => array.length > 0,
      message: 'tags must contain at least one item',
    },
  },
  review: { type: String, required: true },
  productTitle: { type: String, required: true },
  authorName: { type: String, required: true },
  productCommonIntroDes: { type: String, required: true },
  productFeaturesImage: { type: String, required: true },
  allProducts: {
    type: [ProductSchema],
    required: false,
    validate: {
      validator: (array: any[]) => array.length > 0,
      message: 'products must contain at least one item',
    },
  },
  whyTrustUs: { type: String, required: true },
  whoIsFor: { type: String, required: true },
  sources: { type: String, required: true },
  menu: { type: String, required: true },
  subMenu: { type: String, required: true },
});

// Create the Mongoose model
export const PostModel: Model<IPosts> = model<IPosts>('Post', PostSchema);