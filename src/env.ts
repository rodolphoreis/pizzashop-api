/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { z } from "zod";

const envSchema = z.object({
  MODE: z.enum(["production", "development", "test"]),
  API_BASE_URL: z.string().url(),
  AUTH_REDIRECT_URL: z.string().url(),
  DB_URL: z.string().url().min(1),
  JWT_SECRET_KEY: z.string().min(1),
  RESEND_API_KEY: z.string().min(1).optional(),
});

// eslint-disable-next-line prettier/prettier
export const env = envSchema.parse(process.env);
