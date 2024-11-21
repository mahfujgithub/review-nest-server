import { Model } from "mongoose";




export type IPosts = {
    metaTitle: string;
    metaDescription: string;
    canonicalTag: string[];
    slug:  string;
    featuresImg: string;
    title: string;
    subTitle: string;
    description: string[];
    descriptionTwo: string[];
    image: string[];
    currentlyAvailable: boolean;
    price: number;
    brand?: string;
    size?: number[];
    productDimensions?: string[];
    coverMetarial?: string;
    layersNumber?: number;
    fillMetarial?: string;
    specialFuture?: string[];
    color?: string[];
    coilType?: string;
    modelName?: string;
    itemWeight?: number;
    customerReview?: number;
    warrantySupport?: string;
}


export type PostModel = Model<IPosts, Record<string, unknown>>
