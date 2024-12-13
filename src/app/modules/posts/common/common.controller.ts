import catchAsync from '../../../../shared/catchAsync';
import { Response, Request } from 'express';
import sendResponse from '../../../../shared/sendResponse';
import { IPosts } from './common.interface';
import { PostService } from './common.service';

const createPosts = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');

  const post = req.body;

  const result = await PostService.createPost(post);

  sendResponse<IPosts>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: `Post Created SuccessFullly`,
    data: result,
  });
});

export const getProducts = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');

  const { category, subcategory } = req.query; // Extract query parameters

  const result = await PostService.getProductsByCategoryAndSubcategory(
    category as string,
    subcategory as string,
  );

  sendResponse<IPosts[]>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: `Products fetched successfully`,
    data: result,
  });
});

export const postController = {
  createPosts,
  getProducts,
};
