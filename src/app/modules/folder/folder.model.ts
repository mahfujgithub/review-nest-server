import { Schema, model, Model } from 'mongoose';
import { IFolder, FolderModel } from './folder.interface'; // Corrected import to match updated interface

// Define the FolderSchema schema
const FolderSchema = new Schema<IFolder>(
  {
    foldername: { type: String, required: true },
    images: {
      type: [String], // Array of image URLs
      required: true, // Ensures at least one image URL is present
      validate: {
        validator: (array: string[]) => array.length > 0,
        message: 'At least one image URL must be provided',
      },
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const Folder = model<IFolder, FolderModel>('Folder', FolderSchema);
