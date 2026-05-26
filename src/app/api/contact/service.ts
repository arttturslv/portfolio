/** @format */

import { ContactMe } from "../../../actions/contact-me";
import dbConnect from "../../../lib/mongodb";
import contactEmailItem from "../../../models/contact-email-item";
import { sendMail } from "../mail/nodemailer";

export async function ContactMyselfService(body: ContactMe) {
  try {
    const emailRendered = generateEmailHtml(body);

    await dbConnect();
    await contactEmailItem.create(body);

    await sendMail({
      subject: `Novo email de contato: ${body.senderName}`,
      html: emailRendered,
    });
  } catch (error) {
    throw error || new Error("Erro interno no servidor");
  }
}

const generateEmailHtml = (data: ContactMe) => {
  const { senderName, senderEmail, subject } = data;

  const safeName = escapeHtml(senderName);
  const safeEmail = escapeHtml(senderEmail);
  const safeSubject = escapeHtml(subject);

  return `
    <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px;">
      <h2 style="border-bottom: 1px solid #eee; padding-bottom: 10px;">Novo contato via Portfólio</h2>
      <p><strong>Nome:</strong> ${safeName}</p>
      <p><strong>E-mail:</strong> ${safeEmail}</p>
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 20px;">
        <p><strong>Mensagem:</strong></p>
        <p style="white-space: pre-wrap;">${safeSubject}</p>
      </div>
      <footer style="margin-top: 30px; font-size: 0.8em; color: #777;">
        Este e-mail foi enviado automaticamente pelo formulário do site.
      </footer>
    </div>
  `;
};

const escapeHtml = (text: string): string => {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
};
