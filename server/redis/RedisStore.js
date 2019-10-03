const redisClient = require("./redis-connect");

class RedisStore {
  constructor() {
    this.redisClient = redisClient;
  }

  async createRoom({ roomId, hostId, roomName, privateFlag }) {
    const data = { hostId, roomName, privateFlag, userList: [], chatList: [] };
    const result = await this.redisClient.set(roomId, JSON.stringify(data));
    return result;
  }

  getRoom(roomId) {
    const result = this.redisClient.get(roomId);
    return result;
  }
}

const redisStore = new RedisStore();

module.exports = redisStore;
