import catchAsync from '../../../shared/catchAsync';
import { Response, Request } from 'express';
import sendResponse from '../../../shared/sendResponse';
import { FolderService } from './folder.service';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/pagination';
import config from '../../../config';
import { IFolder } from './folder.interface';

// Create Folder
const createFolder = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { foldername } = req.body;
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };

  // Ensure images are present in the 'images' field
  const imageFiles = files['images'] as Express.Multer.File[]; // Adjust field name if needed

  // Process files or URLs
  const imageUrls = imageFiles
    ? imageFiles.map(
        file => `${config.server_address}/uploads/${file.filename}`,
      )
    : [];

  const folder = { foldername, images: imageUrls };

  // Call FolderService to create folder with the folder data
  const result = await FolderService.createFolder(folder);

  // Send success response
  sendResponse(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Folder created successfully',
    data: result,
  });
});


// get all folders
const getAllFolders = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const folder = req.body;
  const result = await FolderService.getAllFolders(folder);

  sendResponse<IFolder[]>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Folders Get SuccessFully',
    data: result,
  });
});

// // get single post by id
const getSingleFolder = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;
  const result = await FolderService.getSingleFolder(id);
  sendResponse<IFolder>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: `Get Single Post SuccessFully`,
    data: result,
  });
});

// // remove folder
const removeFolder = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;
  const result = await FolderService.deleteFolder(id);
  sendResponse<IFolder>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: `Remove Post SuccessFullly`,
    data: result,
  });
});

export const FolderController = {
  createFolder,
  getAllFolders,
  getSingleFolder,
  removeFolder
};
