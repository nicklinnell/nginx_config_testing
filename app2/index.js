const express = require("express");
const app = express();
const port = 3000;
const appName = "app2";

app.get("/", (req, res) => {
  res.send(`Hello from ${appName}!`);
});

app.get("/application-forms", (req, res) => {
  res.send(`Hello from ${appName}!\n\nThis is the applications forms`);
});

app.get("/api/products", (req, res) => {
  res.send(`Hello from ${appName}!\n\nThis is the api/products`);
});

app.get("/api/equity", (req, res) => {
  res.send(`Hello from ${appName}!\n\nThis is the api/equity`);
});

app.get("/login_from_v2", (req, res) => {
  res.send(`Hello from ${appName}!\n\nThis is the login_from_v2`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
