import { Model } from 'mongoose';

export type IProducts = {
  label: string;
  title: string;
  introDes: string;
  productMainImage: string;
  productImages: string[];
  buyingOptions: {
    sourceName: string;
    source: string;
    price: string;
    availability: string;
  }[];
  productDes: string;
  actualDes: string;
};

export type IPosts = {
  seoTitle: string;
  slug: string;
  metaDescription: string;
  canonicalUrl: string;
  keywords: string;
  ogTitle: string;
  ogImage: string;
  ogDescription: string;
  tags: string[];
  review: string;
  productTitle: string;
  authorName: string;
  productCommonIntroDes: string;
  productFeaturesImage: string;
  products: IProducts[];
  whyTrustUs: string;
  whoIsFor: string;
  sources: string;
  menu: string;
  subMenu: string;
};

export type PostModel = Model<IPosts, Record<string, unknown>>;

export type IPostFilters = {
  searchTerm?: string;
  menu?: string;
  subMenu?: string;
};
