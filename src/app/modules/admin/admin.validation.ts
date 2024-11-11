import { z } from 'zod';

const updateAdminZodSchema = z.object({
  body: z.object({
    name: z.object({
      firstName: z.string().optional(),
      lastName: z.string().optional(),
      middleName: z.string().optional(),
    }),
    email: z.string().email().optional(),
    image: z.string().optional(),
    contact: z.string().optional(),
    emergencyContact: z.string().optional(),
    address: z.string().optional(),
  }),
});

export const AdminValidation = {
  updateAdminZodSchema,
};