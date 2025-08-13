require("dotenv").config();
import "node-fetch";
import express from "express";
const app = express();
const port = 3000;

const apiKey = process.env.API_KEY;
const cityName = "lagos";

const fetchJSONData = `https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid={apiKey}`;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`summerwinter app listening on port ${port}`);
});
