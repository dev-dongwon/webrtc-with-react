const redisClient = require("./redis-connect");

class RedisStore {
  constructor() {
    this.redisClient = redisClient;
  }

  async createRoom(namespace, { roomId, hostId, roomName, privateFlag, password, topic }) {
    const data = {
      roomId,
      hostId,
      roomName,
      privateFlag,
      password,
      topic,
    };

    const result = await this.redisClient.set(`${namespace}:${roomId}`, JSON.stringify(data));
    return result;
  }

  async getRoom(key) {
    const result = JSON.parse(await this.redisClient.get(key));
    return result;
  }
}

const redisStore = new RedisStore();

module.exports = redisStore;
