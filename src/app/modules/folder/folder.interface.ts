import { Model } from "mongoose";

export type IFolder = {
  foldername: string;
  images: string[];
};

export type FolderModel = Model<IFolder, Record<string, unknown>>;