/** @format */
import { cleanEnv, str } from "envalid";

const env = cleanEnv(
  {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,

    NEXT_PUBLIC_ANALYTICS_ID: process.env.NEXT_PUBLIC_ANALYTICS_ID,

    NEXT_PUBLIC_CLARITY_PROJECT_ID: process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID,
  },
  {
    NEXT_PUBLIC_SITE_URL: str(),
    NEXT_PUBLIC_ANALYTICS_ID: str(),
    NEXT_PUBLIC_CLARITY_PROJECT_ID: str(),
  },
);

export default env;
