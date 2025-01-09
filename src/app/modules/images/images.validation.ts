import { z } from 'zod';

const ImageZodSchema = z.object({
  foldername: z.string({ required_error: 'foldername is required' }),
  url: z.array(z.string().optional()).optional(),
});

const imagesZodSchema = z.object({
  images: z.array(ImageZodSchema).optional(),
});

const folderZodSchema = z.object({
  body: imagesZodSchema,
});

export const FolderValidation = {
  folderZodSchema,
};
