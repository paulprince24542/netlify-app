const express = require("express");
var serverless = require("serverless-http");
const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Wrld");
});

app.use("/.netlify/functions/api", router);

module.exports.handler = serverless(app);
