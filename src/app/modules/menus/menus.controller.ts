import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import sendResponse from '../../../shared/sendResponse';
import { IMenus } from './menus.interface';
import { MenusService } from './menus.service';

// create blog
const createMenus = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const blog = req.body;
  const result = await MenusService.createMenus(blog);

  sendResponse<IMenus>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: `Menus created successfully!`,
    data: result,
  });
});

// get all blog
const getAllMenus = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const blog = req.body;
  const result = await MenusService.getAllMenus(blog);

  sendResponse<IMenus[]>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Menus Get SuccessFully',
    data: result,
  });
});

// get single menu
const getSingleMenus = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { slug } = req.params;
  const result = await MenusService.getSingleMenus(slug);

  sendResponse<IMenus>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Get Single Menus SuccessFully',
    data: result,
  });
});

// update single blog
const updateMenus = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;

  const updatedBlog = req.body;

  const result = await MenusService.updateMenus(id, updatedBlog);

  sendResponse<IMenus>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Update Single Menus SuccessFully',
    data: result,
  });
});

// delete single menu
const deleteMenus = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { slug } = req.params;
  const result = await MenusService.deleteMenus(slug);

  sendResponse<IMenus>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Delete Single Menus SuccessFully',
    data: result,
  });
});

export const MenusController = {
    createMenus, getAllMenus, getSingleMenus, updateMenus, deleteMenus
};
