const express = require("express");
const app = express();
const port = 3000;
const appName = "app1";

app.get("/", (req, res) => {
  res.send(`Hello from ${appName}!`);
});

app.get("/api/auth", (req, res) => {
  res.send(`Hello from ${appName}!\n\nThis is the api/auth`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
