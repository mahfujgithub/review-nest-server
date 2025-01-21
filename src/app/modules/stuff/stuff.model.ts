import mongoose, { model, Schema } from 'mongoose';
import { StuffModel, IStuff } from './stuff.interface';

export const StuffSchema = new Schema<IStuff, StuffModel>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: {
        firstName: { type: String, required: true },
        middleName: { type: String },
        lastName: { type: String, required: true },
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
    },
    // contact: {
    //   type: String,
    // },
    emergencyContact: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const Stuff = model<IStuff, StuffModel>('Stuff', StuffSchema);
