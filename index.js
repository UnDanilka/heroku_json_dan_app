const express = require("express");
const importData = require("./db.json");

const app = express();
let port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hello Dan");
});
app.get("/todos", (req, res) => {
  res.send(importData);
});

app.listen(port, () => {
  console.log(`listening on port${port}`);
});
