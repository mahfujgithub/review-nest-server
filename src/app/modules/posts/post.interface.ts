import { Model } from "mongoose";




export type IPosts = {
    id: string;
    title: string;
    description: string;
    image: string;
    category: string;
    brand: string;
    quantity?: number;
    price?: number;
    features?: string;
    size?: number;
    status?: string;

}


export type PostModel = Model<IPosts, Record<string, unknown>>
