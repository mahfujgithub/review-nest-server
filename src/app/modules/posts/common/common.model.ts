import { model, Schema } from 'mongoose';
import { IPosts, PostModel } from './common.interface';

const PostsSchema = new Schema<IPosts, PostModel>({
  metaTitle: {
    type: String,
    required: true,
  },
  metaDescription: {
    type: String,
    required: true,
  },
  canonicalTag: {
    type: [String],
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  featureImg: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  subTitle: {
    type: String,
    required: true,
  },
  description: {
    type: [String],
    required: true,
  },
  descriptionTwo: {
    type: [String],
    required: true,
  },
  image: {
    type: [String],
    required: true,
  },
  currentlyAvailable: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
  },
  size: {
    type: [Number],
  },
  productDimensions: {
    type: [String],
  },
  coverMaterial: {
    type: String,
  },
  layersNumber: {
    type: Number,
  },
  fillMaterial: {
    type: String,
  },
  specialFuture: {
    type: [String],
  },
  color: {
    type: [String],
  },
  coilType: {
    type: String,
  },
  modelName: {
    type: String,
  },
  itemWeight: {
    type: Number,
  },
  customerReview: {
    type: Number,
  },
  warrantySupport: {
    type: String,
  },
});

export const Post = model<IPosts, PostModel>('Posts', PostsSchema);
