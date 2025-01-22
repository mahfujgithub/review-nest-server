import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import sendResponse from '../../../shared/sendResponse';
import { IMenuData } from './menudata.interface';
import { MenuDataService } from './menudata.service';

// create blog
const createMenuData = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const blog = req.body;
  const result = await MenuDataService.createMenuData(blog);

  sendResponse<IMenuData>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: `Menu data created successfully!`,
    data: result,
  });
});

// get all blog
const getAllMenuData = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const blog = req.body;
  const result = await MenuDataService.getAllMenuData(blog);

  sendResponse<IMenuData[]>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Menu data Get SuccessFully',
    data: result,
  });
});

// get single menu
const getSingleMenuData = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { slug } = req.params;
  const result = await MenuDataService.getSingleMenuData(slug);

  sendResponse<IMenuData>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Menu data Single Blog SuccessFully',
    data: result,
  });
});

// update single blog
const updateMenuData = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;

  const updatedBlog = req.body;

  const result = await MenuDataService.updateMenuData(id, updatedBlog);

  sendResponse<IMenuData>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Update Single Menu data SuccessFully',
    data: result,
  });
});

// delete single menu
const deleteMenuData = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { slug } = req.params;
  const result = await MenuDataService.deleteMenuData(slug);

  sendResponse<IMenuData>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Delete Single Menu data SuccessFully',
    data: result,
  });
});

export const MenuDataController = {
  createMenuData,
  getAllMenuData,
  getSingleMenuData,
  updateMenuData,
  deleteMenuData,
};
