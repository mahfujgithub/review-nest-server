import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import { BlogService } from './blog.service';
import sendResponse from '../../../shared/sendResponse';
import { IBlog } from './blog.interface';

// create blog
const createBlog = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const blog = req.body;
  const result = await BlogService.createBlog(blog);

  sendResponse<IBlog>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: `Blog created successfully!`,
    data: result,
  });
});

// get all blog
const getAllBlog = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const blog = req.body;
  const result = await BlogService.getAllBlog(blog);

  sendResponse<IBlog[]>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Blog Get SuccessFully',
    data: result,
  });
});

// get single menu
const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { slug } = req.params;
  const result = await BlogService.getSingleBlog(slug);

  sendResponse<IBlog>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Get Single Blog SuccessFully',
    data: result,
  });
});

// update single blog
const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;

  const updatedBlog = req.body;

  const result = await BlogService.updateMenu(id, updatedBlog);

  sendResponse<IBlog>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Update Single Blog SuccessFully',
    data: result,
  });
});

// delete single menu
const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { slug } = req.params;
  const result = await BlogService.deleteBlog(slug);

  sendResponse<IBlog>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Delete Single Blog SuccessFully',
    data: result,
  });
});

export const BlogController = {
  createBlog,
  getAllBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
