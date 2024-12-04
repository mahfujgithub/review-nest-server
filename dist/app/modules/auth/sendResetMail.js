"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = sendEmail;
const config_1 = __importDefault(require("../../../config"));
const nodemailer_1 = __importDefault(require("nodemailer"));
async function sendEmail(to, html) {
    const transporter = nodemailer_1.default.createTransport({
        // host: 'smtp.gmail.com',
        // port: 587,
        // secure: false,
        service: 'gmail',
        auth: {
            user: config_1.default.email,
            pass: config_1.default.appPass,
        },
    });
    await transporter.sendMail({
        from: config_1.default.email, // sender address
        to, // list of receivers
        subject: 'Reset Password Link', // Subject line
        html, // html body
    });
}
