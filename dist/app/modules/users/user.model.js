"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const config_1 = __importDefault(require("../../../config"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const UserSchema = new mongoose_1.Schema({
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
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Stuff',
    },
}, {
    timestamps: true,
});
UserSchema.statics.isUserExist = async function (id) {
    return await exports.User.findOne({ id }, { id: 1, password: 1, role: 1, needsPasswordChange: 1 });
};
UserSchema.statics.isPasswordMatched = async function (givenPassword, savedPassword) {
    return await bcrypt_1.default.compare(givenPassword, savedPassword);
};
UserSchema.methods.changedPasswordAfterJwtIssued = function (jwtTimestamp) {
    console.log({ jwtTimestamp }, 'hi');
};
UserSchema.pre('save', async function (next) {
    // hashing user password
    const user = this;
    user.password = await bcrypt_1.default.hash(user.password, Number(config_1.default.bycrypt_salt_rounds));
    next();
});
exports.User = (0, mongoose_1.model)('Users', UserSchema);
