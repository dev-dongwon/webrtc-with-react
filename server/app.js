require("dotenv").config();

// import modules
const express = require("express"),
      morgan  = require("morgan"),
      helmet = require("helmet");

const app = express();

// middlewares
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/", (req, res) => {
  res.json({ hello : "node.js"});
});

module.exports = app;
