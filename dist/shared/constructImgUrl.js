"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructPublicUrl = void 0;
const config_1 = __importDefault(require("../config"));
const constructPublicUrl = (key) => {
    return `${config_1.default.r2.publicDomain}/${key}`;
};
exports.constructPublicUrl = constructPublicUrl;
