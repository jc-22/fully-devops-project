const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Server UP and Running");
});

app.listen(8000, () => {
  console.log("Server UP");
});
