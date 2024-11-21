import { z } from "zod";



const createPostZodSchema = z.object({
  body: z.object({
    metaTitle: z.string({
        required_error: 'Title is required!',
    }),
    metaDescription: z.string({
        required_error: 'Title is required!',
    }),
    canonicalTag: z.array(z.string({
        required_error: 'Title is required!',
    })),
    slug: z.string({
        required_error: 'Title is required!',
    }),
    featuresImg: z.string({
        required_error: 'Title is required!',
    }),
    title: z.string({
        required_error: 'Title is required!',
      }),
      subTitle: z.string({
        required_error: 'SubTitle is required!',
      }),
      description: z.array(z.string(), {
        required_error: 'Description is required!',
      }),
      descriptionTwo: z.array(z.string(), {
        required_error: 'DescriptionTwo is required!',
      }),
      image: z.array(z.string(), {
        required_error: 'Image is required!',
      }),
      currentlyAvailable: z.boolean({
        required_error: 'CurrentlyAvailable is required!',
      }),
      price: z.number({
        required_error: 'Price is required!',
      }),
      details: z.object({
        brand: z.string().optional(),
        size: z.array(z.number()).optional(),
        productDimensions: z.array(z.string()).optional(),
        coverMetarial: z.string().optional(),
        layersNumber: z.number().optional(),
        fillMetarial: z.string().optional(),
        specialFuture: z.array(z.string()).optional(),
        color: z.array(z.string()).optional(),
        coilType: z.string().optional(),
        modelName: z.string().optional(),
        itemWeight: z.number().optional(),
        customerReview: z.number().optional(),
        warrantySupport: z.string().optional(),
      })
  }),
});


export const postsValidation = {
    createPostZodSchema
}
