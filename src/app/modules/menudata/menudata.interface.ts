import { Model } from 'mongoose';

export type IMenuData = {
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
  menuData: string;
  menu: string;
};

export type MenuDataModel = Model<IMenuData, Record<string, unknown>>;
