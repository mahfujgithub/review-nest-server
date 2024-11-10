import { z } from 'zod';

const createAdminZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    admin: z.object({
      name: z.object({
        firstName: z.string({
          required_error: 'field is required!',
        }),
        lastName: z.string({
          required_error: 'field is required!',
        }),
        middleName: z.string().optional(),
      }),
      email: z
        .string({
          required_error: 'field is required!',
        })
        .email(),
      image: z.string().optional(),
      contact: z.string({
        required_error: 'field is required!',
      }).optional(),
      emergencyContact: z.string().optional(),
      address: z.string({
        required_error: 'field is required!',
      }).optional(),
    }),
  }),
});

export const UserValidation = {
  createAdminZodSchema,
};
