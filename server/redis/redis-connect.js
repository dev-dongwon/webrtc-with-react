const redis = require("async-redis");
const client = redis.createClient({
  host : process.env.REDIS_HOST,
  port : process.env.REDIS_PORT
});

client.on("connect", () => {
  console.log("redis connected");
});

client.on("error", err => {
  console.log("redis Error " + err);
  process.exit(1);
});

module.exports = client;
