import { z } from "zod";



const createPostZodSchema = z.object({
  body: z.object({
    id: z.string({
        required_error: 'field is required!',
    }),
    title: z.string({
        required_error: 'field is required!',
    }),
    description: z.string({
        required_error: 'field is required!',
    }),
    image: z.string({
        required_error: 'field is required!',
    }),
    category: z.string({
        required_error: 'field is required!',
    }),
    brand: z.string({
        required_error: 'field is required!',
    }),
    quantity: z.number().optional(),
    price: z.number().optional(),
    features: z.string().optional(),
    size: z.number().optional(),
    status: z.string().optional()
  }),
});


export const postsValidation = {
    createPostZodSchema
}
