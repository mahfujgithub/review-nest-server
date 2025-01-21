import express from 'express';
import { FolderController } from './folder.controller';
import validateRequest from '../../middlewares/validateRequest';
import { FolderValidation } from './folder.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import multer from 'multer';
import upload from '../../../config/multer.config';
const router = express.Router();

// Define multer fields dynamically for folders
const folderFields: multer.Field[] = [
  { name: 'images', maxCount: 100 }, // Allow up to 10 images for a single folder
];

router.post(
  '/create',
  upload.fields(folderFields), // Handle multiple folder uploads dynamically
  validateRequest(FolderValidation.FolderZodSchema),
  FolderController.createFolder,
);

router.get('/', FolderController.getAllFolders);

// // get single folder
router.get('/:foldername', FolderController.getSingleFolder);


// // delete single folder
router.delete('/:id', FolderController.removeFolder);

export const FolderRoutes = router;
