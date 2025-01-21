import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import sendResponse from '../../../shared/sendResponse';
import { ISubMenu } from './submenu.interface';
import { SubMenuService } from './submenu.service';

// create blog
const createBlog = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const blog = req.body;
  const result = await SubMenuService.createBlog(blog);

  sendResponse<ISubMenu>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: `Sub Menu created successfully!`,
    data: result,
  });
});

// get all blog
const getAllBlog = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const blog = req.body;
  const result = await SubMenuService.getAllBlog(blog);

  sendResponse<ISubMenu[]>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Sub Menu Get SuccessFully',
    data: result,
  });
});

// get single menu
const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { slug } = req.params;
  const result = await SubMenuService.getSingleBlog(slug);

  sendResponse<ISubMenu>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Get Single Sub Menu SuccessFully',
    data: result,
  });
});

// update single blog
const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;

  const updatedBlog = req.body;

  const result = await SubMenuService.updateMenu(id, updatedBlog);

  sendResponse<ISubMenu>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Update Single Sub Menu SuccessFully',
    data: result,
  });
});

// delete single menu
const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { slug } = req.params;
  const result = await SubMenuService.deleteBlog(slug);

  sendResponse<ISubMenu>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Delete Single Sub Menu SuccessFully',
    data: result,
  });
});

export const SubMenuController = {
  createBlog,
  getAllBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
