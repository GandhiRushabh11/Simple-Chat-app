const express = require("express");

const app = new express();

app.get("/", (req, res) => {
  res.send("Hello From Server");
});

app.listen(8000, () => {
  console.log(`Server listen at 8000`);
});
