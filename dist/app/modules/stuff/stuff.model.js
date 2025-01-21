"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stuff = exports.StuffSchema = void 0;
const mongoose_1 = require("mongoose");
exports.StuffSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
exports.Stuff = (0, mongoose_1.model)('Stuff', exports.StuffSchema);
