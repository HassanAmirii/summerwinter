require("dotenv").config();
const API_KEY = process.env.API_KEY;
const port = 3000;
const express = require("express");
const app = express();

const Redis = require("ioredis");
const redis = new Redis();

app.get("/weather/:city", async (req, res) => {
  console.log("city selected", req.params.city);
  try {
    const { default: fetch } = await import("node-fetch");
    const cityName = req.params.city;
    const OpenWeatherURl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
    const DataResponse = await fetch(OpenWeatherURl);
    if (!DataResponse.ok) {
      throw new Error(`http error: ${DataResponse.status}`);
    } else {
      const data = await DataResponse.json();
      res.json(data);
    }
  } catch (error) {
    console.error(`could not fetch data ${error}`);
  }
});

app.listen(port, () => {
  console.log(`summerwinter listening on localhost:${port} `);
});
