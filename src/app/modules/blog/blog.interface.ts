import { Model } from 'mongoose';

export type IBlog = {
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
  blogData: string;
};

export type BlogModel = Model<IBlog, Record<string, unknown>>;
