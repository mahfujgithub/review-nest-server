import { model, Schema } from 'mongoose';
import { IMenu, MenuModel } from './menu.interface';

export const MenuSchema = new Schema<IMenu, MenuModel>(
  {
    menu: {
      type: String,
      required: true,
      unique: true,
    },
    subMenu: {
      type: [String],
      default: []
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
MenuSchema.index({ menu: 1 });

export const Menu = model<IMenu, MenuModel>('Menus', MenuSchema);
