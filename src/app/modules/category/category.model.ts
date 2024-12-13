import { model, Schema } from 'mongoose';
import { ICategory, CategoryModel } from './category.interface';

export const CategorySchema = new Schema<ICategory, CategoryModel>(
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
CategorySchema.index({ category: 1, subcategory: 1 }, { unique: true });

export const Menu = model<ICategory, CategoryModel>('Category', CategorySchema);
