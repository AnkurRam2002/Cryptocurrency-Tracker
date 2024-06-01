import axios from 'axios';
import Redis from 'ioredis';

const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';    
const redis = new Redis(REDIS_URL);

const apiKey = process.env.API_KEY || '94AD9AFC-B866-4CE1-93F0-0E71980744E5'
const headers = {
  'X-CoinAPI-Key': apiKey
};

export const fetchCryptoPrice = async (crypto: string): Promise<number> => {
  const cacheKey = `price:${crypto}`;
  const cachedPrice = await redis.get(cacheKey);

  const options = {
    method: 'GET',
    url: `https://mineable-coins.p.rapidapi.com/coins?list=${crypto}`,
    headers: {
      'X-RapidAPI-Key': '42f887b48bmsh5ca7771ae34acc3p1c64f8jsn64a5a9eb0a9c',
      'X-RapidAPI-Host': 'mineable-coins.p.rapidapi.com'
    }
  };

  const response = await axios.request(options);
  const price = response.data[0].price;
  console.log(price);

  await redis.set(cacheKey, JSON.stringify(price), 'EX', 60); // Cache for 60 seconds
  return price;
};


