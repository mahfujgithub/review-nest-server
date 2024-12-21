import { model, Schema } from "mongoose";
import { IPosts, PostModel } from "./post.interface";




const PostsSchema = new Schema <IPosts, PostModel> (
    {
        seoTitle: {
            type: String,
            require: true
        },
        slug: {
            type: String,
            required: true
        },
        metaDescription: {
            type: String,
            required: true
        },
        canonicalUrl: {
            type: String,
            required: true
        },
        keywords: {
            type: String,
            required: true
        },
        ogTitle: {
            type: String,
            required: true
        },
        ogImage: {
            type: String,
            required: true
        },
        ogDescription: {
            type: String,
            required: true
        },
        structuredData: {
            type: String,
            required: true
        },
        productTitle: {
            type: String,
            required: true
        },
        intro: {
            type: String,
            required: true
        },
        images: {
            type: [String],
            required: true
        },
        authorName: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        review: {
            type: String,
            required: true
        },
        availability: {
            type: String,
            required: true
        },
        tags: {
            type: [String],
            required: true
        },
        menu: {
            type: String,
            required: true
        },
        subMenu: {
            type: String,
            required: true
        },
        editorData: {
            type: String,
            required: true
        }

    }
)



export const Post = model<IPosts, PostModel>('Posts', PostsSchema);
