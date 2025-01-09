import { Schema, model, Model } from 'mongoose';
import { IImages, FolderModel } from './images.interface';

// Define the ImageSchema schema
const ImageSchema = new Schema({
  foldername: { type: String, required: true },
  urls: {
    type: [String],
    required: false,
    validate: {
      validator: (array: string[]) => array.length > 0,
      message: 'urls must contain at least one item',
    },
  },
});

// Define the IPosts schema
const FolderSchema = new Schema({
  images: {
    type: [ImageSchema],
    required: false,
    validate: {
      validator: (array: any[]) => array.length > 0,
      message: 'image must contain at least one item',
    },
  },
});

export const Folder = model<IImages, FolderModel>('Folders', FolderSchema);
