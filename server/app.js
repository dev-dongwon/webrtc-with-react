require("dotenv").config();

// import modules
const express = require("express");
const morgan = require("morgan");

const app = express();

// middlewares
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/", (req, res) => {
  res.json({ hello : "node.js"});
});

module.exports = app;
