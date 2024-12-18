"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const config_1 = __importDefault(require("../../../config"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const user_model_1 = require("../users/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const stuff_model_1 = require("../stuff/stuff.model");
const sendResetMail_1 = require("./sendResetMail");
const loginUser = async (payload) => {
    const httpStatus = await import('http-status-ts');
    const { id, password } = payload;
    //   check user existence
    const isUserExist = await user_model_1.User.isUserExist(id);
    if (!isUserExist) {
        throw new ApiError_1.default(httpStatus.HttpStatus.NOT_FOUND, 'User does not exist!');
    }
    if (isUserExist.password &&
        !(await user_model_1.User.isPasswordMatched(password, isUserExist.password))) {
        throw new ApiError_1.default(httpStatus.HttpStatus.UNAUTHORIZED, 'Password is incorrect!');
    }
    //   create access token & refresh token
    const { id: userId, role } = isUserExist;
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({ userId, role }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    const refreshToken = jwtHelpers_1.jwtHelpers.createToken({ id, role }, config_1.default.jwt.refresh_secret, config_1.default.jwt.refresh_expires_in);
    return {
        accessToken,
        refreshToken,
    };
};
const refreshToken = async (token) => {
    const httpStatus = await import('http-status-ts');
    let verifiedToken = null;
    try {
        verifiedToken = jwtHelpers_1.jwtHelpers.verifyToken(token, config_1.default.jwt.refresh_secret);
    }
    catch (err) {
        throw new ApiError_1.default(httpStatus.HttpStatus.FORBIDDEN, 'Invalid refresh token!');
    }
    const { userId } = verifiedToken;
    const isUserExist = await user_model_1.User.isUserExist(userId);
    if (!isUserExist) {
        throw new ApiError_1.default(httpStatus.HttpStatus.NOT_FOUND, 'User does not exist!');
    }
    // generate new token
    const newAccessToken = jwtHelpers_1.jwtHelpers.createToken({
        id: isUserExist.id,
        role: isUserExist.role,
    }, config_1.default.jwt.secret, config_1.default.jwt.expires_in);
    return {
        accessToken: newAccessToken,
    };
};
const changePassword = async (user, payload) => {
    const httpStatus = await import('http-status-ts');
    const { oldPassword, newPassword } = payload;
    // // checking is user exist
    // const isUserExist = await User.isUserExist(user?.userId);
    //alternative way
    const isUserExist = await user_model_1.User.findOne({ id: user?.userId }).select('+password');
    if (!isUserExist) {
        throw new ApiError_1.default(httpStatus.HttpStatus.NOT_FOUND, 'User does not exist');
    }
    // checking old password
    if (isUserExist.password &&
        !(await user_model_1.User.isPasswordMatched(oldPassword, isUserExist.password))) {
        throw new ApiError_1.default(httpStatus.HttpStatus.UNAUTHORIZED, 'Old Password is incorrect');
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
const forgotPass = async (payload) => {
    const httpStatus = await import('http-status-ts');
    const user = await user_model_1.User.findOne({ id: payload.id }, { id: 1, role: 1 });
    // console.log(payload)
    if (!user) {
        throw new ApiError_1.default(httpStatus.HttpStatus.BAD_REQUEST, 'User does not exist!');
    }
    let profile = null;
    if (user.role === "admin" /* ENUM_USER_ROLE.ADMIN */) {
        profile = await stuff_model_1.Stuff.findOne({ id: user.id });
    }
    else if (user.role === "content-writer" /* ENUM_USER_ROLE.CONTENT_WRITER */) {
        profile = await stuff_model_1.Stuff.findOne({ id: user.id });
    }
    // console.log(profile)
    if (!profile) {
        throw new ApiError_1.default(httpStatus.HttpStatus.BAD_REQUEST, 'Pofile not found!');
    }
    if (!profile.email) {
        throw new ApiError_1.default(httpStatus.HttpStatus.BAD_REQUEST, 'Email not found!');
    }
    const passResetToken = await jwtHelpers_1.jwtHelpers.createResetToken({ id: user.id }, config_1.default.jwt.secret, '50m');
    const resetLink = `${config_1.default.resetLink}token=${passResetToken}`;
    ;
    console.log(resetLink);
    // console.log('profile: ', profile);
    await (0, sendResetMail_1.sendEmail)(profile.email, `
      <div>
        <p>Hi, ${profile.name.firstName}</p>
        <p>Your password reset link: <a href=${resetLink}>Click Here</a></p>
        <p>Thank you</p>
      </div>
  `);
    // return {
    //   message: "Check your email!"
    // }
};
const resetPassword = async (payload, token) => {
    const httpStatus = await import('http-status-ts');
    const { id, newPassword } = payload;
    const user = await user_model_1.User.findOne({ id }, { id: 1 });
    if (!user) {
        throw new ApiError_1.default(httpStatus.HttpStatus.BAD_REQUEST, 'User not found!');
    }
    const isVarified = await jwtHelpers_1.jwtHelpers.verifyToken(token, config_1.default.jwt.secret);
    const password = await bcrypt_1.default.hash(newPassword, Number(config_1.default.bycrypt_salt_rounds));
    await user_model_1.User.updateOne({ id }, { password });
};
exports.AuthService = {
    loginUser,
    refreshToken,
    changePassword,
    forgotPass,
    resetPassword
};
