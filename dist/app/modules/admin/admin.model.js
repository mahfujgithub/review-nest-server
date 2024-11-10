"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Admin = exports.AdminSchema = void 0;
const mongoose_1 = require("mongoose");
exports.AdminSchema = new mongoose_1.Schema({
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
    contact: {
        type: String,
        unique: true,
    },
    emergencyContact: {
        type: String,
    },
    address: {
        type: String,
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Admin = (0, mongoose_1.model)('Admins', exports.AdminSchema);
