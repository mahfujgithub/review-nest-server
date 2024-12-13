import { Model } from 'mongoose';

export type ICategory = {
  category: string;
  subcategory: string;
};

export type CategoryModel = Model<ICategory, Record<string, unknown>>;
