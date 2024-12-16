import { z } from "zod";



const createPostZodSchema = z.object({
  body: z.object({
    seoTitle: z.string({
        required_error: 'Title is required!',
    }),
    slug: z.string({
        required_error: 'Field is required!',
    }),
    metaDescription: z.string({
        required_error: 'Field is required!',
    }),
    canonicalUrl: z.string({
        required_error: 'Field is required!',
    }),
    keywords: z.string({
        required_error: 'Field is required!',
    }),
    ogTitle: z.string({
        required_error: 'Field is required!',
    }),
    ogImage: z.string({
        required_error: 'Field is required!',
    }),
    ogDescription: z.string({
        required_error: 'Field is required!',
    }),
    structuredData: z.string({
        required_error: 'Field is required!',
    }),
    productTitle: z.string({
        required_error: 'Field is required!',
    }),
    subTitle: z.string({
        required_error: 'Field is required!',
    }),
    images: z.array(z.string({
        required_error: 'Field is required!',
    })),
    authorName: z.string({
        required_error: 'Field is required!',
    }),
    price: z.string({
        required_error: 'Field is required!',
    }),
    review: z.string({
        required_error: 'Field is required!',
    }),
    availability: z.string({
        required_error: 'Field is required!',
    }),
    tags: z.array(z.string({
        required_error: 'Field is required!',
    })),
    menu: z.string({
        required_error: 'Field is required!',
    }),
    subMenu: z.string({
        required_error: 'Field is required!',
    }),
    editorData: z.string({
        required_error: 'Field is required!',
    }),


  }),
});


export const postsValidation = {
    createPostZodSchema
}
