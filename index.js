require("dotenv").config();
import "node-fetch";
import express, { response } from "express";
import fetch from "node-fetch";
const app = express();
const port = 3000;

const apiKey = process.env.API_KEY;
const cityName = "lagos";

const fetchJSONData = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

app.get("/", async (req, res) => {
  try {
    const dataResponse = await fetch(fetchJSONData);

    if (!dataResponse.ok) {
      throw new Error(`HTTP ERROR: ${dataResponse.status}`);
    }
    const data = await dataResponse.json();
    console.log(data);
  } catch (error) {
    console.error(`could not get data ${error}`);
  }
});

app.listen(port, () => {
  console.log(`summerwinter app listening on port ${port}`);
});
