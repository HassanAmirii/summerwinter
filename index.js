require("dotenv").config();
const API_KEY = process.env.API_KEY;
const port = 3000;
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`summerwinter listening on localhost:${port} `);
});
