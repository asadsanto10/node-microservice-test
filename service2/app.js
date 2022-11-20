const express = require("express");

const app = express();
const port = 3001;

app.get("/service-2", (req, res) => {
  res.send("hello world from service-2");
});

app.get("/service-2/contact", (req, res) => {
  res.send("This is contact from service-2");
});

app.listen(port, () => {
  console.log("listen on port:" + port);
});
