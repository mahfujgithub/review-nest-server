import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import sendResponse from '../../../shared/sendResponse';
import { ISubMenu } from './submenu.interface';
import { SubMenuService } from './submenu.service';

// create blog
const createSubMenu = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const blog = req.body;
  const result = await SubMenuService.createSubMenu(blog);

  sendResponse<ISubMenu>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: `Sub Menu created successfully!`,
    data: result,
  });
});

// get all blog
const getAllSubMenu = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const blog = req.body;
  const result = await SubMenuService.getAllSubMenu(blog);

  sendResponse<ISubMenu[]>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Sub Menu Get SuccessFully',
    data: result,
  });
});

// get single menu
const getSingleSubMenu = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { slug } = req.params;
  const result = await SubMenuService.getSingleSubMenu(slug);

  sendResponse<ISubMenu>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Get Single Sub Menu SuccessFully',
    data: result,
  });
});

// update single blog
const updateSubMenu = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;

  const updatedBlog = req.body;

  const result = await SubMenuService.updateSubMenu(id, updatedBlog);

  sendResponse<ISubMenu>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Update Single Sub Menu SuccessFully',
    data: result,
  });
});

// delete single menu
const deleteSubMenu = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { slug } = req.params;
  const result = await SubMenuService.deleteSubMenu(slug);

  sendResponse<ISubMenu>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Delete Single Sub Menu SuccessFully',
    data: result,
  });
});

export const SubMenuController = {
    createSubMenu, getAllSubMenu, getSingleSubMenu, updateSubMenu, deleteSubMenu
};
