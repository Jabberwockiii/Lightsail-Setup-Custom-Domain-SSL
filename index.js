const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send(`DESIN! This is the homepage on port ${port} `);
});

app.get("/:name", (req, res) => {
  res.send(`Hello,different2 ${req.params.name}`);
});
