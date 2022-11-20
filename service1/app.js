const express = require("express");
const subdomain = require("express-subdomain");
const app = express();
const port = 3000;

const router = express.Router();

//api specific routes
router.get("/", function (req, res) {
  res.send("Welcome to our API!");
});

// app.get("/service-1", (req, res) => {
//   res.send("hello world from service-1");
// });

// app.get("/service-1/about", (req, res) => {
//   res.send("This is about responce from service-1");
// });

app.use(subdomain("api", router));

app.listen(port, () => {
  console.log("listen on port:" + port);
});
