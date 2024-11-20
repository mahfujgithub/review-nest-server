import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';
import config from '../../../config';
import bcrypt from 'bcrypt';

const UserSchema = new Schema<IUser, UserModel>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: 0,
    },
    stuff: {
      type: Schema.Types.ObjectId,
      ref: 'Stuff',
    },
  },
  {
    timestamps: true,
  },
);

UserSchema.statics.isUserExist = async function (
  id: string,
): Promise<IUser | null> {
  return await User.findOne(
    { id },
    { id: 1, password: 1, role: 1, needsPasswordChange: 1 },
  );
};

UserSchema.statics.isPasswordMatched = async function (
  givenPassword: string,
  savedPassword: string,
): Promise<boolean> {
  return await bcrypt.compare(givenPassword, savedPassword);
};

UserSchema.pre('save', async function (next) {
  // hashing user password
  const user = this;
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bycrypt_salt_rounds),
  );

  next();
});

export const User = model<IUser, UserModel>('Users', UserSchema);
