require("dotenv").config();
const API_KEY = process.env.API_KEY;
const port = 3000;
const express = require("express");
const app = express();

const Redis = require("ioredis");
const redis = new Redis();

app.get("/weather/:city", async (req, res) => {
  try {
    const cityName = req.params.city;
    const cachedData = await redis.get(cityName);

    if (cachedData) {
      const data = JSON.parse(cachedData);

      return res.json({ source: "cache", data });
    } else {
      const { default: fetch } = await import("node-fetch");

      const fetchWeatherData = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
      const DataResponse = await fetch(fetchWeatherData);
      if (!DataResponse.ok) {
        throw new Error(`http error: ${DataResponse.status}`);
      }
      const data = await DataResponse.json();

      await redis.set(cityName, JSON.stringify(data), "EX", 600);
      res.json({ source: "api", data });
    }
  } catch (error) {
    console.error(`could not fetch data ${error}`);
  }
});

app.listen(port, () => {
  console.log(`summerwinter listening on localhost:${port} `);
});
