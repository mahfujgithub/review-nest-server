import { Model } from 'mongoose';

export type IPosts = {
    seoTitle: string;
    slug: string;
    metaDescription: string;
    canonicalUrl: string;
    keywords: string;
    ogTitle: string;
    ogImage: string;
    ogDescription: string;
    structuredData: string;
    productTitle: string;
    subTitle: string;
    images: string[];
    authorName: string;
    price: string;
    review: string;
    availability: string;
    tags: string[];
    menu: string;
    subMenu: string;
    editorData: string;

};

export type PostModel = Model<IPosts, Record<string, unknown>>;

export type IPostFilters = {
  searchTerm?: string;
  menu?: string;
  subMenu?: string;
};
