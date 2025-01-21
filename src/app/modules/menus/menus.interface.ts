import { Model } from 'mongoose';

export type IMenus = {
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
  menusData: string;
  menu: string;
};

export type MenusModel = Model<IMenus, Record<string, unknown>>;
