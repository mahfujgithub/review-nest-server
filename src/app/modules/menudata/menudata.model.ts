import mongoose, { Schema, model } from 'mongoose';
import { IMenuData, MenuDataModel } from './menudata.interface';

const MenuDataSchema = new Schema<IMenuData>(
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
    menuData: {
      type: String,
      required: true,
    },
    menu: {
        type: String,
        required: true
    }
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
    toJSON: {
      virtuals: true,
    },
  },
);

export const MenuData = model<IMenuData, MenuDataModel>('menudata', MenuDataSchema);
