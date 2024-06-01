import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Redis from 'ioredis';
import routes from './routes';

const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/crypto_monitoring';
const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';    

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

connectDB();

const redis = new Redis(REDIS_URL);

app.use(bodyParser.json());
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});






