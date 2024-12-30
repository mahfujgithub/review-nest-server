import { Model } from 'mongoose';

export interface BuyingOption {
  sourceName: string;
  source: string;
  price: string;
  availability: string;
}

export interface Product {
  label: string;
  title: string;
  subtitle: string;
  introDes: string;
  productMainImage: string;
  productImages: string[];
  buyingOptions: BuyingOption[];
  productDes: string;
  actualDes: string;
}

export interface AllProduct {
  seoTitle: string;
  slug: string;
  metaDescription: string;
  canonicalUrl: string;
  keywords: string;
  ogTitle: string;
  ogImage: string;
  ogDescription: string;
  structuredData: string;
  tags: string[];
  review: string;
  productTitle: string;
  authorName: string;
  aboutAuthor: string;
  productCommonIntroDes: string;
  productFeaturesImage: string;
  products: Product[];
  whyTrustUs: string;
  whoIsFor: string;
  sources: string;
}

export interface IPosts {
  menu: string;
  subMenu: string;
  allProducts: AllProduct[];
}

export type PostModel = Model<IPosts, Record<string, unknown>>;

export type IPostFilters = {
  searchTerm?: string;
  menu?: string;
  subMenu?: string;
};
