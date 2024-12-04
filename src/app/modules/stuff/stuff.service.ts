import { IGenericResponse } from '../../../interfaces/common';
import { IPaginationOptions } from '../../../interfaces/pagination';
import { IStuff, IStuffFilters } from './stuff.interface';
import { Stuff } from './stuff.model';
import { stuffSearchableFields } from './stuff.constant';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { SortOrder } from 'mongoose';
import ApiError from '../../../errors/ApiError';

const getAllStuff = async (
  paginationOptions: IPaginationOptions,
  filters: IStuffFilters,
): Promise<IGenericResponse<IStuff[]>> => {
  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: stuffSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const result = await Stuff.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await Stuff.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleStuff = async (id: string): Promise<IStuff | null> => {
  const result = await Stuff.findById(id);

  return result;
};

const updateStuff = async (
  id: string,
  payload: Partial<IStuff>,
): Promise<IStuff | null> => {
  const httpStatus = await import('http-status-ts');
  const isExist = await Stuff.findOne({ id });

  if (!isExist) {
    throw new ApiError(httpStatus.HttpStatus.NOT_FOUND, 'Admin not found!');
  }

  if (Object.hasOwn(payload, 'email')) {
    throw new ApiError(
      httpStatus.HttpStatus.BAD_REQUEST,
      "Updating the 'email' is not allowed!",
    );
  }

  const { name, ...adminData } = payload;

  const updatedAdminData: Partial<IStuff> = { ...adminData };

  if (name && Object.keys(name).length > 0) {
    Object.keys(name).forEach(key => {
      const nameKey = `name.${key}` as keyof IStuff;
      (updatedAdminData as any)[nameKey] = name[key as keyof typeof name];
    });
  }

  const result = await Stuff.findOneAndUpdate({ id }, updatedAdminData, {
    new: true,
  });
  return result;
};

const deleteStuff = async (id: string): Promise<IStuff | null> => {
  const result = await Stuff.findByIdAndDelete(id);

  return result;
};

export const StuffService = {
  getAllStuff,
  getSingleStuff,
  updateStuff,
  deleteStuff,
};
