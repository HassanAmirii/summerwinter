require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

const apiKey = process.env.API_KEY;
const cityName = "lagos";

app.get("/", async (req, res) => {
  try {
    const { default: fetch } = await import("node-fetch");
    const fetchJSONData = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    const dataResponse = await fetch(fetchJSONData);

    if (!dataResponse.ok) {
      throw new Error(`HTTP ERROR: ${dataResponse.status}`);
    }
    const data = await dataResponse.json();
    res.json(data);
  } catch (error) {
    console.error(`could not get data ${error}`);
    res.status(500).json({ error: "Could not fetch data" });
  }
});
app.listen(port, () => {
  console.log(`summerwinter app listening on port ${port}`);
});
