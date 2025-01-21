import { Model } from 'mongoose';

export type ISubMenu = {
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
  subMenuData: string;
};

export type SubMenuModel = Model<ISubMenu, Record<string, unknown>>;
