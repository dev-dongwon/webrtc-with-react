require("dotenv").config();

// sequelize
const sequelize = require("./db/models").sequelize;
sequelize.sync();

// mongo DB
const mongoConnector = require('./mongoDB/connect-mongo');
mongoConnector();

// import modules
const express = require("express"),
      morgan  = require("morgan"),
      helmet  = require("helmet"),
      path    = require("path");

// server application
const app = express();

// middlewares
app.use(express.static(path.join(__dirname, "./../client", "build")));
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

// routes
const apiRouter = require("./routes/api");

// routes
app.use("/api", apiRouter);

module.exports = app;
