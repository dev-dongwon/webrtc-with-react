const redisStore = require("../redis/RedisStore");

const controller = {
  // 방 만들기
  createRoom: async (req, res, next) => {
    try {
      const { namespace } = req.params;
      const roomObj = req.body;
      const flag = await redisStore.createRoom(namespace, roomObj);

      let result = false;

      if (flag === "OK") {
        result = await redisStore.getRoom(`${namespace}:${roomObj.roomId}`);
      }
      return res.json(result);
    } catch (error) {
      next(error);
    }
  },
  getRoom: async (req, res, next) => {
    try {
      const { namespace, roomId } = req.params;
      const result = await redisStore.getRoom(`${namespace}:${roomId}`);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = controller;
