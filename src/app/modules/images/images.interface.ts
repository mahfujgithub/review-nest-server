import { Model } from "mongoose";

export type IImage = {
  foldername: string;
  urls: string[];
};

export type IImages = {
  images: [IImage]
};

export type FolderModel = Model<IImages, Record<string, unknown>>;