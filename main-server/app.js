const express = require("express");

const app = express();
const port = 5000;

const { createProxyMiddleware } = require("http-proxy-middleware");

app.use(
  "/service-1",
  createProxyMiddleware({ target: "http://localhost:3000", changeOrigin: true })
);
app.use(
  "/service-2",
  createProxyMiddleware({ target: "http://localhost:3001", changeOrigin: true })
);

app.listen(port, () => {
  console.log("listen on port: " + port);
});
