import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { postsValidation } from './post.validation';
import { postController } from './post.controller';
import upload from '../../../config/multer.config';
const router = express.Router();

// create post
router.post(
  '/create-post',
  upload.array('images', 10),
  validateRequest(postsValidation.createPostZodSchema),
  postController.createPosts,
);

// get all post
router.get('/', postController.getAllPosts)
// get single post
router.get('/:id', postController.getSinglePosts)

// update post
router.patch('/:id', postController.updatePosts)

// remove post
router.delete('/:id', postController.removePosts)

export const PostRouter = router;
