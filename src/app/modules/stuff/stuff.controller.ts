import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import { AdminService } from './stuff.service';
import sendResponse from '../../../shared/sendResponse';
import { IStuff } from './stuff.interface';
import { Stuff } from './stuff.model';
import { stuffFilterableFields } from './stuff.constant';
import { paginationFields } from '../../../constants/pagination';
import pick from '../../../shared/pick';

const getAllStuff = catchAsync(async (req: Request, res: Response) => {
  //   console.log(req.headers.authorization);
  //   console.log(req.user);
  const httpStatus = await import('http-status-ts');
  const filters = pick(req.query, stuffFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await AdminService.getAllStuff(paginationOptions, filters);

  sendResponse<IStuff[]>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Admins Retrieved successfully!',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleStuff = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;

  const result = await AdminService.getSingleStuff(id);

  sendResponse<IStuff>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Admin Retrieved successfully!',
    data: result,
  });
});

const updateStuff = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;

  const updatedAdmin = req.body;

  const result = await AdminService.updateStuff(id, updatedAdmin);

  sendResponse<IStuff>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Admin Updated successfully!',
    data: result,
  });
});

const removeStuff = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const id = req.params.id;

  const result = await AdminService.deleteStuff(id);

  sendResponse<IStuff>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Admin Deleted successfully!',
    data: result,
  });
});

export const AdminController = {
  getAllStuff,
  getSingleStuff,
  updateStuff,
  removeStuff,
};
