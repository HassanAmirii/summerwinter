# ♨️ SUMMERWINTER ❄️

This is a simple but robust weather API built with Node.js and Express. It fetches real-time weather data for any requested city from the OpenWeatherMap API and uses Redis for caching to improve performance and reduce API calls.

## Features

- Dynamic Routing: Fetches weather data for any city provided in the URL (e.g., /weather/london).

- API Integration: Connects to the OpenWeatherMap API to retrieve current weather conditions.

- Redis Caching: Implements caching to store frequently requested weather data, reducing latency and external API calls.

- Efficient Error Handling: Provides proper error responses for invalid requests or API issues.

## Setup

To run this project, you need to have Node.js, npm, and Docker installed.

<strong>Clone the repository:
Bash

git clone https://github.com/HassanAmirii/summerwinter
cd summerwinter </strong>

(Note: You can skip this step if you are already in the project folder.)

<strong>Install project dependencies:
Bash

npm install

Set up your environment variables:
Create a .env file in the root directory and add your OpenWeatherMap API key.

API_KEY=your_api_key_here

Start the Redis cache server:
This project uses Docker to run a Redis instance. In your terminal, run the following command:
Bash

docker run --name my-redis-cache -d -p 6379:6379 redis

Run the application:
Bash

    node index.js

 </strong>

## Usage

Once the server is running, you can access the weather data by visiting the following URL in your browser or with a tool like Postman:

http://localhost:3000/weather/[city_name]

    Example: http://localhost:3000/weather/lagos

The API will return a JSON object with the weather data. The response will also include a source field, which indicates whether the data came from the api (the first request) or the cache (subsequent requests).

## Technologies Used

- Node.js: JavaScript runtime environment.

- Express.js: Web framework for Node.js.

- Redis: In-memory data store for caching.

- ioredis: A Redis client for Node.js.

- node-fetch: A lightweight module for making HTTP requests.

- dotenv: A module to load environment variables.

project file: https://roadmap.sh/projects/weather-api-wrapper-service
