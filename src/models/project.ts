/** @format */

import { Schema, model, models, Document } from "mongoose";

export interface Image {
  src: string;
  alt: string;
}

export interface IProject extends Document {
  title: string;
  description: string;
  images: Image[];
  techStack: string[];
  websiteSrc?: string;
  githubSrc?: string;
}

const ImageSchema = new Schema<Image>(
  {
    src: { type: String, required: true },
    alt: { type: String, required: true },
  },
  { _id: false }
);

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: [ImageSchema], required: true },
    techStack: [{ type: String, required: true }],
    websiteSrc: { type: String },
    githubSrc: { type: String },
  },
  { timestamps: true }
);

export default models.Project || model<IProject>("Project", ProjectSchema);
