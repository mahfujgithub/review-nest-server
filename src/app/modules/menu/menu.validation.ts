import z from "zod";

const createMenuZodSchema = z.object({
  body: z.object({
    category: z.string({
        required_error:  'field is required!'
    }),
    subcategory: z.string({
        required_error:  'field is required!'
    }),
  }),
});

export const MenuValidation = {
  createMenuZodSchema,
};
