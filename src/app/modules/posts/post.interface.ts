import { Model } from 'mongoose';

export type IPosts = {
  metaTitle: string; // SEO Purpose Filed
  metaDescription: string; // SEO Purpose Filed
  canonicalTag: string[]; // SEO Purpose Filed
  slug: string; // SEO Purpose Filed
  featureImg: string; // Implement via multer && // SEO Purpose Filed
  //   Post Data
  title: string;
  subTitle: string;
  description: string[];
  descriptionTwo: string[];
  author: string;
  image: string[];
  thumbnailImg: string;
  currentlyAvailable: boolean; // Stock
  price: number;
  brand?: string;
  size?: number[];
  productDimensions?: string[];
  modelName?: string;
  itemWeight?: number;
  customerReview?: number;
  warrantySupport?: boolean;
  //   Additional Property for individual Items
  coverMaterial?: string;
  layersNumber?: number;
  fillMaterial?: string;
  specialFuture?: string[];
  color?: string[];
  coilType?: string;
};

export type PostModel = Model<IPosts, Record<string, unknown>>;
