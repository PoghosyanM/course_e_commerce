const express = require("express");
const app = express();
const shopData = require("./shopData");

app.get("/shop", function (req, res) {
  res.json(shopData);
});

app.listen(5000, function () {
  console.log("server is up " + 5000);
});
