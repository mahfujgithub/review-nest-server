import ApiError from '../../../errors/ApiError';
import { IFolder } from './folder.interface';
import { Folder } from './folder.model';

const createFolder = async (folder: IFolder) => {
  const httpStatus = await import('http-status-ts');

  const isExistFolder = await Folder.findOne({
    foldername: folder.foldername,
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
const getAllFolders = async (folder: IFolder) => {
  const result = await Folder.find(folder);
  return result;
};

// // get single folder
const getSingleFolder = async (id: string) => {
  const result = await Folder.findById(id);
  return result;
};

// // delete folder
const deleteFolder = async (id: string) => {
  const result = await Folder.findByIdAndDelete(id);
  return result;
};

export const FolderService = {
  createFolder,
  getAllFolders,
  getSingleFolder,
  deleteFolder,
};
