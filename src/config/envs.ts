import "dotenv/config";
import { get } from "env-var";

export const envs = {
  PORT: get("PORT").required().asPortNumber(),
  DB_HOST: get("DB_HOST").required().asString(),
  DB_USER: get("DB_USER").required().asString(),
  DB_PASSWORD: get("DB_PASSWORD").asString(),
  DB_NAME: get("DB_NAME").required().asString(),
  JWT_SEED: get("JWT_SEED").required().asString(),
};
