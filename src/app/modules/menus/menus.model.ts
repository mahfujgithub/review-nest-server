import mongoose, { Schema, model } from 'mongoose';
import { MenuModel } from '../menu/menu.interface';
import { IMenus,  } from './menus.interface';

const MenusSchema = new Schema<IMenus>(
  {
    seoTitle: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    metaDescription: {
      type: String,
      required: true,
      trim: true,
    },
    canonicalUrl: {
      type: String,
      required: true,
      trim: true,
    },
    keywords: {
      type: String,
      required: true,
      trim: true,
    },
    ogTitle: {
      type: String,
      required: true,
      trim: true,
    },
    ogImage: {
      type: String,
      required: true,
      trim: true,
    },
    ogDescription: {
      type: String,
      required: true,
      trim: true,
    },
    structuredData: {
      type: String,
      required: true,
    },
    tags: {
      type: [String],
      required: true,
    },
    menusData: {
      type: String,
      required: true,
    },
    menu: {
        type: String,
        required: true
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
    toJSON: {
      virtuals: true,
    },
  },
);

export const Menus = model<IMenus, MenuModel>('menus', MenusSchema);
