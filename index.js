const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  var a = 0;
  var b = 9;
  var c = a + b;
  res.send("Welcome");
});

app.listen(port, () => {
  console.log("listening on port" + port);
});
