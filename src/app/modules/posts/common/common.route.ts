import express from 'express';
import validateRequest from '../../../middlewares/validateRequest';
import { postsValidation } from './common.validation';
import { postController } from './common.controller';
const router = express.Router();

router.post(
  '/create-post',
  validateRequest(postsValidation.createPostZodSchema),
  postController.createPosts,
);

router.get('/get-products', postController.getProducts);

export const PostRouter = router;
