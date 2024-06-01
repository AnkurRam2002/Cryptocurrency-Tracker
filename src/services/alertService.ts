import { Alert } from '../models/Alert';
import { fetchCryptoPrice } from './priceService';

export const checkAlerts = async () => {
  const alerts = await Alert.find().lean().populate('userId');

  for (const alert of alerts) {
    const currentPrice = await fetchCryptoPrice(alert.crypto);

    if (
      (alert.condition === 'above' && currentPrice > alert.price) ||
      (alert.condition === 'below' && currentPrice < alert.price)
    ) {
      console.log(`Alert : ${alert.crypto} is now ${alert.condition} ${alert.price}`);
    }
  }
};
