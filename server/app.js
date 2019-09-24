require("dotenv").config();

// import modules
const express = require("express"),
      morgan  = require("morgan"),
      helmet  = require("helmet");

// server application
const app = express();

// sequelize
const sequelize = require('./db/models').sequelize;
sequelize.sync();

// routes
const apiRouter = require('./routes/api');

// middlewares
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api", apiRouter);

module.exports = app;
