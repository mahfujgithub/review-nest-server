import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import { AdminService } from './admin.service';
import sendResponse from '../../../shared/sendResponse';
import { IAdmin } from './admin.interface';
import { Admin } from './admin.model';
import { adminFilterableFields } from './admin.constant';
import { paginationFields } from '../../../constants/pagination';
import pick from '../../../shared/pick';

const getAllAdmins = catchAsync(async (req: Request, res: Response) => {
  //   console.log(req.headers.authorization);
  //   console.log(req.user);
  const httpStatus = await import('http-status-ts');
  const filters = pick(req.query, adminFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await AdminService.getAllAdmins(paginationOptions, filters);

  sendResponse<IAdmin[]>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Admins Retrieved successfully!',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleAdmin = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { id } = req.params;

  const result = await AdminService.getSingleAdmin(id);

  sendResponse<IAdmin>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Admin Retrieved successfully!',
    data: result,
  });
});

const removeAdmin = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const id = req.params.id;

  const result = await AdminService.deleteAdmin(id);

  sendResponse<IAdmin>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'Admin Deleted successfully!',
    data: result,
  });
});


export const AdminController = {
  getAllAdmins,
  getSingleAdmin,
  removeAdmin
};
