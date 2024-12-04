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

const changePasswordZodSchema = z.object({
  body: z.object({
    oldPassword: z.string({
      required_error: 'Old password  is required',
    }),
    newPassword: z.string({
      required_error: 'New password  is required',
    }),
  }),
});

export const AuthValidation = {
  createAuthZodSchema,
  refreshTokenZodSchema,
  changePasswordZodSchema,
};
