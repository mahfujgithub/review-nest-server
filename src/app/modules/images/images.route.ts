import express from 'express';
import { FolderController } from './images.controller';
import validateRequest from '../../middlewares/validateRequest';
import { FolderValidation } from './images.validation';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
const router = express.Router();

let folderFields = [];

// Dynamically create fields for products (adjust based on max products expected)
const maxProducts = 10; // Maximum number of products you want to handle dynamically
for (let i = 0; i < maxProducts; i++) {
  folderFields.push(
    { name: `urls[${i}][productMainImage]`, maxCount: 1 },
    { name: `allProducts[${i}][productImages][]`, maxCount: 10 },
  );
}

router.post(
  '/create',
  validateRequest(FolderValidation.folderZodSchema),
  FolderController.createFolder,
);

// router.get('/', ImageController.getAllMenu);

// // get single menu
// router.get('/:fileName', ImageController.getSingleMenu);


// // delete single menu
// router.delete('/:fileName', ImageController.deleteMenu);

export const ImagesRoutes = router;
