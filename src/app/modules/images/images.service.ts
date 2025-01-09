import ApiError from '../../../errors/ApiError';
import { IImage } from './images.interface';
import { Folder } from './images.model';

const createFolder = async (folder: IImage) => {
  const httpStatus = await import('http-status-ts');

  const isExistFolder = await Folder.findOne({
    foldername: folder.foldername
  });

  if (isExistFolder) {
    throw new ApiError(
      httpStatus.HttpStatus.CONFLICT,
      'Folder Duplication not allowed!',
    );
  }

  // If no `menu` exists, create a new one
  const newFolder = await Folder.create(folder);

  return newFolder;
};

// // get all menu
// const getAllFolders = async (uploads: IImages) => {
//   const result = await Upload.find(uploads);
//   return result;
// };

// // get single menu
// const getSingleFolder = async (foldername: string) => {
//   const result = await Upload.findOne({ foldername: foldername });
//   return result;
// };

// // delete menu
// const deleteFolder = async (id: string) => {
//   const result = await Upload.findByIdAndDelete(id);
//   return result;
// };

export const FolderService = {
  createFolder,
//   getAllFolders,
//   getSingleFolder,
//   deleteFolder,
};
