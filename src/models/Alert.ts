import { Schema, model } from 'mongoose';

const alertSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  crypto: { type: String, required: true },
  price: { type: Number, required: true },
  condition: { type: String, required: true } // higher or lower
});

export const Alert = model('Alert', alertSchema);
