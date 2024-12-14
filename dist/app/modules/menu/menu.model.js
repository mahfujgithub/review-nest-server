"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = exports.MenuSchema = void 0;
const mongoose_1 = require("mongoose");
exports.MenuSchema = new mongoose_1.Schema({
    menu: {
        type: String,
        required: true,
        unique: true,
    },
    subMenu: {
        type: [String],
        default: []
    },
}, {
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
});
// Adding a unique compound index on category and subcategory
exports.MenuSchema.index({ menu: 1 });
exports.Menu = (0, mongoose_1.model)('Menus', exports.MenuSchema);
