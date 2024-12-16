import config from "../../../config";
import nodemailer from 'nodemailer';


export async function sendEmail(to: string, html: string) {
  const transporter = nodemailer.createTransport({
    // host: 'smtp.gmail.com',
    // port: 587,
    // secure: false, // true for 465, false for others
    service: 'gmail',
    auth: {
      user: config.email,
      pass: config.appPass,
    },
  });

  await transporter.sendMail({
    from: config.email, // sender address
    to: '',//
    subject: 'Reset Password Link', // Subject line
    html, // html body
  });

}
