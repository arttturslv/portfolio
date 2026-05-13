/** @format */
import "server-only";
import { cleanEnv, str, email } from "envalid";

const env = cleanEnv(process.env, {
  MAIL_FROM: email(),
  MAIL_TO: email(),
  APP_USER: email(),
  APP_PASSWORD: str(),
  MONGODB_URI: str(),
});

export default env;
