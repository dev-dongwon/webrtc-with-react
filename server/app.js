require("dotenv").config();

// sequelize
const sequelize = require('./db/models').sequelize;
sequelize.sync();

// import modules
const express = require("express"),
      morgan  = require("morgan"),
      helmet  = require("helmet");

// server application
const app = express();

// middlewares
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// routes
const apiRouter = require('./routes/api');

// routes
app.use("/api", apiRouter);

module.exports = app;
