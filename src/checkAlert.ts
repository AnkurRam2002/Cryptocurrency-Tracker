// src/server.ts
import { checkAlerts } from './services/alertService';
import './app';

setInterval(checkAlerts, 30000); // Check alerts every 30 seconds
