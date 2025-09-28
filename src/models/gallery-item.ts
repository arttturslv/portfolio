/** @format */

import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IGalleryItem extends Document {
  date: string;
  type: "image" | "audio";
  src: string;
  name: string;
}

const GalleryItemSchema = new Schema<IGalleryItem>(
  {
    date: { type: String, required: true },
    type: { type: String, enum: ["image", "audio"], required: true },
    src: { type: String, required: true },
    name: { type: String, required: true },
  },
  { timestamps: true }
);

export default models.GalleryItem ||
  model<IGalleryItem>("GalleryItem", GalleryItemSchema);
