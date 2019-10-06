const redisClient = require("./redis-connect");

class RedisStore {
  constructor() {
    this.redisClient = redisClient;
  }

  async createRoom({ roomId, hostId, roomName, privateFlag, password, topic }) {
    const data = { roomId, hostId, roomName, privateFlag, password, topic, userList: [], chatList: [] };
    const result = await this.redisClient.set(roomId, JSON.stringify(data));
    return result;
  }

  async getRoom(roomId) {
    const result = JSON.parse(await this.redisClient.get(roomId));
    return result;
  }
}

const redisStore = new RedisStore();

module.exports = redisStore;
