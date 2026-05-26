/** @format */

import { Schema, model, models, Document } from "mongoose";

export interface IContactEmail extends Document {
  senderName: string;
  senderEmail: string;
  subject: string;
  senderIp: string;
}

const ContactEmailSchema = new Schema<IContactEmail>(
  {
    senderName: { type: String, required: true },
    senderEmail: { type: String, required: true },
    subject: { type: String, required: true },
    senderIp: { type: String, required: false },
  },
  { timestamps: true },
);

export default models.ContactEmail ||
  model<IContactEmail>("ContactEmail", ContactEmailSchema);
