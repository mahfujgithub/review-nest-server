import catchAsync from '../../../shared/catchAsync';
import { Request, Response } from 'express';
import sendResponse from '../../../shared/sendResponse';
import { AuthService } from './auth.service';
import { ILoginUserResponse, IRefreshTokenResponse } from './auth.interface';
import config from '../../../config';

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { ...loginData } = req.body;

  const result = await AuthService.loginUser(loginData);

  const { refreshToken, ...others } = result;

  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };

  // set refresh token into cookie
  res.cookie('refreshToken', refreshToken, cookieOptions);

  sendResponse<ILoginUserResponse>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: `User Logged in successfully!`,
    data: others,
  });
});

const refreshToken = catchAsync(async (req: Request, res: Response) => {
  const httpStatus = await import('http-status-ts');
  const { refreshToken } = req.cookies;

  const result = await AuthService.refreshToken(refreshToken);

  const cookieOptions = {
    secure: config.env === 'production',
    httpOnly: true,
  };

  // set refresh token into cookie
  res.cookie('refreshToken', refreshToken, cookieOptions);

  sendResponse<IRefreshTokenResponse>(res, {
    statusCode: httpStatus.HttpStatus.OK,
    success: true,
    message: 'User Logged in successfully!',
    data: result,
  });
});

export const AuthController = {
  loginUser,
  refreshToken,
};
