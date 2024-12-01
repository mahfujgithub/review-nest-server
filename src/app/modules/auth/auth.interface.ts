import { Model } from 'mongoose';
import { ENUM_USER_ROLE } from '../../../enums/user';

export type ILoginUser = {
  id: string;
  password: string;
};

export type ILoginUserResponse = {
  accessToken: string;
  refreshToken?: string;
};

export type IRefreshTokenResponse = {
  accessToken: string;
};

export type IVerifiedLoginUser = {
  userId: string;
  role: ENUM_USER_ROLE;
};

export type IChangePassword = {
  oldPassword: string;
  newPassword: string;
};

export type AuthModel = Model<ILoginUser, Record<string, unknown>>;
