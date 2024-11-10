import { z } from 'zod';

const createAuthZodSchema = z.object({
  body: z.object({
    id: z
      .string({
        required_error: 'ID is required!',
      }),
    password: z.string({
      required_error: 'field is required!',
    }),
  }),
});

const refreshTokenZodSchema = z.object({
  cookies: z.object({
    refreshToken: z.string({
      required_error: 'Refresh Token is required!',
    }),
  }),
});

export const AuthValidation = {
  createAuthZodSchema,
  refreshTokenZodSchema,
};
