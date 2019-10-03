const redisStore = require("../redis/RedisStore");

const controller = {
  // 방 만들기
  createRoom: async (req, res, next) => {
    try {
      const roomObj = req.body;
      const flag = await redisStore.createRoom(roomObj);

      let result = false;

      if (flag === "OK") {
        result = await redisStore.getRoom(roomObj.roomId);
      }

      return res.json(result);
    } catch (error) {
      next(error);
    }
  },
  getRoom: async (req, res, next) => {
    try {
      const { roomId } = req.params;
      const result = await redisStore.getRoom(roomId);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  },
};

module.exports = controller;
