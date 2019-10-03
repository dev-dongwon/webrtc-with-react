const redisClient = require("./redis-connect");

class MemoryStore {
  constructor() {
    this.redisClient = redisClient;
  }

  createRoom(roomObj) {}
}

const redisInstance = new MemoryStore();

module.exports = redisStoreInstance;
