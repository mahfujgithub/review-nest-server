import ApiError from '../../../errors/ApiError';
import { User } from './user.model';
import { IUser } from './user.interface';
import { generateAdminId, generateContentWriterId } from './user.utils';
import config from '../../../config';
import mongoose from 'mongoose';
import { IStuff } from '../stuff/stuff.interface';
import { Stuff } from '../stuff/stuff.model';

const createStuff = async (
  stuff: IStuff,
  user: IUser,
): Promise<IUser | null> => {
  const httpStatus = await import('http-status-ts');

  if (!user.password) {
    user.password = config.defaultAdminPassword as string;
  }

  let newUserAllData = null;

  // let id:string;

  // Validate the role field
  if (user.role !== 'admin' && user.role !== 'content-writer') {
    throw new ApiError(
      httpStatus.HttpStatus.BAD_REQUEST,
      'Invalid role!',
    );
  }

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    let id;

    switch (user.role) {
      case 'admin':
        id = await generateAdminId();
        break;
      case 'content-writer':
        id = await generateContentWriterId();
        break;
      default:
        throw new Error('Invalid role');
    }

    user.id = id;
    stuff.id = id;

    // array
    const newStuff = await Stuff.create([stuff], { session });

    if (!newStuff.length) {
      throw new ApiError(
        httpStatus.HttpStatus.BAD_REQUEST,
        `Failed to create customer!`,
      );
    }

    // set customer --> _id into user.customer

    user.stuff = newStuff[0]._id;

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
    newUserAllData = await User.findOne({ id: newUserAllData.id }).populate({
      path: 'stuff',
      strictPopulate: false,
    });
  }

  return newUserAllData;
};

export const UserService = {
  createStuff,
};
