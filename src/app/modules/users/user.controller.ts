import { Request, Response } from 'express';
import { UserService } from './user.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { IUser } from './user.interface';

const createStuff = catchAsync(async (req: Request, res: Response) => {
    const httpStatus = await import('http-status-ts');
  const { stuff, ...userData } = req.body;

  const result = await UserService.createStuff(stuff, userData);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: `${result?.id} created successfully!`,
    data: result,
  });
});

export const UserController = {
  createStuff,
};

