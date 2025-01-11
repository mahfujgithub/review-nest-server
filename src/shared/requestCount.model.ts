import mongoose, { Schema, Document } from 'mongoose';

interface IRequestCount extends Document {
  slug: string;
  count: number;
}

const RequestCountSchema: Schema = new Schema({
  slug: { type: String, required: true, unique: true },
  count: { type: Number, default: 0 },
});

const RequestCountModel = mongoose.model<IRequestCount>(
  'RequestCount',
  RequestCountSchema,
);

export { IRequestCount, RequestCountModel };
