import ApiError from '../../../errors/ApiError';
import { User } from './user.model';
import { IUser } from './user.interface';
import { generateAdminId } from './user.utils';
import config from '../../../config';
import mongoose from 'mongoose';
import { IAdmin } from '../admin/admin.interface';
import { Admin } from '../admin/admin.model';

const createAdmin = async (
  admin: IAdmin,
  user: IUser,
): Promise<IUser | null> => {
  const httpStatus = await import('http-status-ts');

  if (!user.password) {
    user.password = config.defaultAdminPassword as string;
  }

  let newUserAllData = null;

  // set role
  user.role = 'admin';

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const id = await generateAdminId();
    user.id = id;
    admin.id = id;

    // array
    const newAdmin = await Admin.create([admin], { session });

    if (!newAdmin.length) {
      throw new ApiError(
        httpStatus.HttpStatus.BAD_REQUEST,
        `Failed to create customer!`,
      );
    }

    // set customer --> _id into user.customer

    user.admin = newAdmin[0]._id;

    const newUser = await User.create([user], { session });

    if (!newUser.length) {
      throw new ApiError(
        httpStatus.HttpStatus.BAD_REQUEST,
        `Failed to create user!`,
      );
    }

    newUserAllData = newUser[0];

    await session.commitTransaction();
  } catch (error) {
    console.error('Error creating customer or user:', error);
    await session.abortTransaction();
    throw error;
  } finally {
    session.endSession();
  }

  if (newUserAllData) {
    newUserAllData = await User.findOne({ id: newUserAllData.id });
  }

  return newUserAllData;
};

export const UserService = {
  createAdmin,
};
