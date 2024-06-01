
import { Schema, model } from 'mongoose';

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  alerts: [{ type: Schema.Types.ObjectId, ref: 'Alert' }]
});

export const User = model('User', userSchema);
