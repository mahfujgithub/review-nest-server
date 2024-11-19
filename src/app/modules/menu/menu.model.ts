import { model, Schema } from 'mongoose';
import { IMenu, MenuModel } from './menu.interface';

export const MenuSchema = new Schema<IMenu, MenuModel>(
  {
    category: {
      type: String,
      required: true,
      unique: true,
    },
    subcategory: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

// Adding a unique compound index on category and subcategory
MenuSchema.index({ category: 1, subcategory: 1 }, { unique: true });

export const Menu = model<IMenu, MenuModel>('Menus', MenuSchema);
