import { Model } from 'mongoose';

export type AdminName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type IAdmin = {
  id?: string;
  name: AdminName; //embedded object
  email: string;
  image?: string;
  contact: string;
  emergencyContact?: string;
  address?: string;
};

export type AdminModel = Model<IAdmin, Record<string, unknown>>;

export type IAdminFilters = {
  searchTerm?: string;
  id?: string;
  email?: string;
  contact?: string;
};
