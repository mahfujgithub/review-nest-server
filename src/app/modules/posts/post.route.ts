import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { postsValidation } from './post.validation';
import { postController } from './post.controller';
const router = express.Router();




router.post('/create-post',
    validateRequest(postsValidation.createPostZodSchema),
    postController.createPosts,

)

export const PostRouter = router;
