import { z } from 'zod';

const FolderZodSchema = z.object({
  foldername: z
    .string({
      required_error: 'foldername is required',
    })
    .optional(), // Makes foldername optional

  images: z
    .array(z.string().url().min(1, { message: 'Image URL cannot be empty' }))
    .min(1, { message: 'At least one image URL must be provided' })
    .optional(), // Makes images optional
});

export const FolderValidation = {
  FolderZodSchema,
};
