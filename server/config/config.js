require("dotenv").config({
  path : "../.env"
});

const development = {
  username: process.env.MYSQL_DEV_USERNAME,
  password: process.env.MYSQL_DEV_PASSWORD,
  database: process.env.MYSQL_DEV_DATABASE,
  host: process.env.MYSQL_DEV_HOST,
  dialect: process.env.MYSQL_DEV_DIALECT,
  port: process.env.MYSQL_DEV_PORT
};

const production = {
  username: process.env.MYSQL_PRO_USERNAME,
  password: process.env.MYSQL_PRO_PASSWORD,
  database: process.env.MYSQL_PRO_DATABASE,
  host: process.env.MYSQL_PRO_HOST,
  dialect: process.env.MYSQL_PRO_DIALECT,
  port: process.env.MYSQL_PRO_PORT
};

const test = {
  username: process.env.MYSQL_TEST_USERNAME,
  password: process.env.MYSQL_TEST_PASSWORD,
  database: process.env.MYSQL_TEST_DATABASE,
  host: process.env.MYSQL_TEST_HOST,
  dialect: process.env.MYSQL_TEST_DIALECT,
  port: process.env.MYSQL_TEST_PORT
};

module.exports = { development };
