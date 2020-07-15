const express = require("express");
const shopData = require("./shopData");

const app = express();
const PORT = 5000;

app.get("/shop", (req, res) => {
  res.json(shopData);
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}!`);
});
