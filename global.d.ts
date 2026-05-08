/** @format */

declare module "*.css";

declare namespace NodeJS {
  interface ProcessEnv {
    MONGODB_URI: string;
  }
}
