import { Model } from "mongoose";

export type IMenu = {
  menu: string;
  subMenu: string[];
};

export type MenuModel = Model<IMenu, Record<string, unknown>>;
