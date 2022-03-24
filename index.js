const express = require("express");
const importData = require("./db.json");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

let port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello Dan");
});
app.get("/todos", (req, res) => {
  res.send(importData);
});

app.listen(port, () => {
  console.log(`listening on port${port}`);
});
