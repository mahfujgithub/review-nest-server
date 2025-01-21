import { Model } from 'mongoose';

export type StuffName = {
  firstName: string;
  middleName?: string;
  lastName: string;
};

export type IStuff = {
  id?: string;
  name: StuffName; //embedded object
  email: string;
  image?: string;
  // contact?: string;
  emergencyContact?: string;
  address?: string;
};

export type StuffModel = Model<IStuff, Record<string, unknown>>;

export type IStuffFilters = {
  searchTerm?: string;
  id?: string;
  email?: string;
  // contact?: string;
};
