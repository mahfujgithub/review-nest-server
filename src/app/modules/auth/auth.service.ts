import ApiError from '../../../errors/ApiError';
// import { Customer } from '../customer/customer.model';
import {
  IChangePassword,
  ILoginUser,
  ILoginUserResponse,
  IRefreshTokenResponse,
} from './auth.interface';
import { JwtPayload, Secret } from 'jsonwebtoken';
import config from '../../../config';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import { User } from '../users/user.model';
import bcrypt from 'bcrypt';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { Stuff } from '../stuff/stuff.model';
import { sendEmail } from './sendResetMail';

const loginUser = async (payload: ILoginUser): Promise<ILoginUserResponse> => {
  const httpStatus = await import('http-status-ts');
  const { id, password } = payload;

  //   check user existence
  const isUserExist = await User.isUserExist(id);

  if (!isUserExist) {
    throw new ApiError(httpStatus.HttpStatus.NOT_FOUND, 'User does not exist!');
  }

  if (
    isUserExist.password &&
    !(await User.isPasswordMatched(password, isUserExist.password))
  ) {
    throw new ApiError(
      httpStatus.HttpStatus.UNAUTHORIZED,
      'Password is incorrect!',
    );
  }

  //   create access token & refresh token
  const { id: userId, role } = isUserExist;

  const accessToken = jwtHelpers.createToken(
    { userId, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string,
  );

  const refreshToken = jwtHelpers.createToken(
    { id, role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
  };
};

const refreshToken = async (token: string): Promise<IRefreshTokenResponse> => {
  const httpStatus = await import('http-status-ts');

  let verifiedToken = null;

  try {
    verifiedToken = jwtHelpers.verifyToken(
      token,
      config.jwt.refresh_secret as Secret,
    );
  } catch (err) {
    throw new ApiError(
      httpStatus.HttpStatus.FORBIDDEN,
      'Invalid refresh token!',
    );
  }

  const { userId } = verifiedToken;

  const isUserExist = await User.isUserExist(userId);

  if (!isUserExist) {
    throw new ApiError(httpStatus.HttpStatus.NOT_FOUND, 'User does not exist!');
  }

  // generate new token

  const newAccessToken = jwtHelpers.createToken(
    {
      id: isUserExist.id,
      role: isUserExist.role,
    },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string,
  );

  return {
    accessToken: newAccessToken,
  };
};

const changePassword = async (
  user: JwtPayload | null,
  payload: IChangePassword,
): Promise<void> => {
  const httpStatus = await import('http-status-ts');
  const { oldPassword, newPassword } = payload;

  // // checking is user exist
  // const isUserExist = await User.isUserExist(user?.userId);

  //alternative way
  const isUserExist = await User.findOne({ id: user?.userId }).select(
    '+password',
  );

  if (!isUserExist) {
    throw new ApiError(httpStatus.HttpStatus.NOT_FOUND, 'User does not exist');
  }

  // checking old password
  if (
    isUserExist.password &&
    !(await User.isPasswordMatched(oldPassword, isUserExist.password))
  ) {
    throw new ApiError(httpStatus.HttpStatus.UNAUTHORIZED, 'Old Password is incorrect');
  }

  // // hash password before saving
  // const newHashedPassword = await bcrypt.hash(
  //   newPassword,
  //   Number(config.bycrypt_salt_rounds)
  // );

  // const query = { id: user?.userId };
  // const updatedData = {
  //   password: newHashedPassword,  //
  //   needsPasswordChange: false,
  //   passwordChangedAt: new Date(), //
  // };

  // await User.findOneAndUpdate(query, updatedData);
  // data update
  isUserExist.password = newPassword;
  isUserExist.needsPasswordChange = false;

  // updating using save()
  isUserExist.save();
};

const forgotPass = async (payload: { id: string }) => {
  const httpStatus = await import('http-status-ts');
  const user = await User.findOne({ id: payload.id }, { id: 1, role: 1 });

  // console.log(payload)

  if (!user) {
    throw new ApiError(httpStatus.HttpStatus.BAD_REQUEST, 'User does not exist!');
  }

  let profile = null;
  if (user.role === ENUM_USER_ROLE.ADMIN) {
    profile = await Stuff.findOne({ id: user.id });
  } else if (user.role === ENUM_USER_ROLE.CONTENT_WRITER) {
    profile = await Stuff.findOne({ id: user.id });
  }

  // console.log(profile)

  if (!profile) {
    throw new ApiError(httpStatus.HttpStatus.BAD_REQUEST, 'Pofile not found!');
  }

  if (!profile.email) {
    throw new ApiError(httpStatus.HttpStatus.BAD_REQUEST, 'Email not found!');
  }

  const passResetToken = await jwtHelpers.createResetToken(
    { id: user.id },
    config.jwt.secret as string,
    '50m',
  );

  const resetLink: string = config.resetLink + `token=${passResetToken}`;

  console.log('profile: ', profile);
  await sendEmail(
    profile.email,
    `
      <div>
        <p>Hi, ${profile.name.firstName}</p>
        <p>Your password reset link: <a href=${resetLink}>Click Here</a></p>
        <p>Thank you</p>
      </div>
  `,
  );

  // return {
  //   message: "Check your email!"
  // }
};

const resetPassword = async (
  payload: { id: string; newPassword: string },
  token: string,
) => {
  const httpStatus = await import('http-status-ts');
  const { id, newPassword } = payload;
  const user = await User.findOne({ id }, { id: 1 });

  if (!user) {
    throw new ApiError(httpStatus.HttpStatus.BAD_REQUEST, 'User not found!');
  }

  const isVarified = await jwtHelpers.verifyToken(
    token,
    config.jwt.secret as string,
  );

  const password = await bcrypt.hash(
    newPassword,
    Number(config.bycrypt_salt_rounds),
  );

  await User.updateOne({ id }, { password });
};


export const AuthService = {
  loginUser,
  refreshToken,
  changePassword,
  forgotPass,
  resetPassword
};
