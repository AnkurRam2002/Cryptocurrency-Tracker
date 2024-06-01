import { Request, Response } from 'express';
import { User } from '../models/User';
import { Alert } from '../models/Alert';

export const createAlert = async (req: Request, res: Response) => {
  const { email, crypto, price, condition } = req.body;

  let user = await User.findOne({ email });
  if (!user) {
    user = new User({ email });
    await user.save();
  }
  
  const alert:any = new Alert({ userId: user._id, crypto, price, condition });
  await alert.save();

  user.alerts.push(alert._id);
  await user.save();

  res.json({ message: 'Alert created successfully' });
};
