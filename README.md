<h1 align='center'>Cryptocurrency Tracker</h1>

This project is the backend for a Cryptocurrency Monitoring and Alerting System. It is built using Node.js, Express, Axios, and TypeScript, with Redis and MongoDB for data storage and caching. The entire setup is containerized using Docker for easy deployment and scalability.

<h3>Features</h3>

- Cryptocurrency Monitoring: Continuously monitors cryptocurrency prices.
- Alerting System: Sends alerts based on predefined conditions (e.g., price thresholds).
- Caching: Uses Redis for fast access to frequently requested data.
- Data Persistence: Stores historical data in MongoDB.
- API Endpoints: Provides RESTful API endpoints for interacting with the system.

<h3>Technologies Used</h3>

- Node.js: JavaScript runtime for building server-side applications.
- Express: Web application framework for Node.js.
- Axios: Promise-based HTTP client for making API requests.
- TypeScript: Superset of JavaScript that adds static typing.
- Redis: In-memory data structure store used as a cache.
- MongoDB: NoSQL database for storing historical data.
- Docker: Containerization platform for running the application in isolated environments.
