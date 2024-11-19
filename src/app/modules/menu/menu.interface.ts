import { Model } from "mongoose";

export type IMenu = {
  category: string;
  subcategory: string;
};

export type MenuModel = Model<IMenu, Record<string, unknown>>;