const express = require("express");
const fs = require("fs");
const shopData = require("./shopData");
const uuidGenerator = require("./utils/helpers");

const app = express();
const PORT = 5000;
const shopDataPath = "./db/shopData.json";

app.use(express.json({ extended: true }));

if (!fs.existsSync(shopDataPath)) {
  fs.writeFile(shopDataPath, JSON.stringify(shopData), "utf8", (err) => {
    if (err) {
      console.log(err);
    }
  });
}

app.get("/shop", (req, res) => {
  fs.readFile(shopDataPath, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.json(JSON.parse(data));
  });
});

app.post("/addItem", (req, res) => {
  fs.readFile(shopDataPath, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    const newShopData = JSON.parse(data);
    const { category, name, imageUrl, price } = req.body;
    newShopData[category].items.push({
      name,
      imageUrl,
      price,
      id: uuidGenerator(),
    });
    res.json(newShopData);
    fs.writeFile(shopDataPath, JSON.stringify(newShopData), "utf8", (err) => {
      if (err) {
        console.log(err);
        return;
      }
    });
  });
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}!`);
});
