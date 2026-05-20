/** @format */
import nodemailer from "nodemailer";
import env from "@/env.server";

export type SendEmailPayload = {
  subject: string;
  html: string;
};

export const mailConfig = {
  from: env.MAIL_FROM,
  to: env.MAIL_TO,
};

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: false,
  port: 587,
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  auth: {
    user: env.APP_USER,
    pass: env.APP_PASSWORD,
  },
});

export async function sendMail({ subject, html }: SendEmailPayload) {
  try {
    await transporter.sendMail({
      from: mailConfig.from,
      to: mailConfig.to,
      subject,
      html,
    });
  } catch (error) {
    console.error("Failed to send e-mail. Error:", error);
    throw new Error("Failed to send e-mail.");
  }
}
