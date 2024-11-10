import { Model, Types } from "mongoose";
import { IAdmin } from "../admin/admin.interface";

export type IUser = {
  id: string;
  role: string;
  password: string;
  admin?: Types.ObjectId | IAdmin;
};

export type UserModel = {
  isUserExist(
    id: string,
  ): Promise<Pick<IUser, 'id' | 'password' | 'role'>>;
  isPasswordMatched(
    givenPassword: string,
    savedPassword: string,
  ): Promise<boolean>;
} & Model<IUser>;

// export type UserModel = Model<IUser, Record<string, unknown>>;
