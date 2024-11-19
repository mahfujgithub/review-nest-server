import { model, Schema } from "mongoose";
import { IPosts, PostModel } from "./post.interface";
// import { string } from "zod";
// import { number } from "zod";



const PostsSchema = new Schema <IPosts, PostModel> (
    {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        quantity: {
            type: Number
        },
        price: {
            type: Number
        },
        features: {
            type: String,
        },
        size: {
            type: Number
        },
        status: {
            type: String
        }
    }
)



export const Post = model<IPosts, PostModel>('Posts', PostsSchema);
