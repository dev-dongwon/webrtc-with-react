const redisStore = require("../redis/RedisStore");

const controller = {
  // 방 만들기
  createRoom: async (req, res, next) => {
    try {
      const roomObj = req.body;
      const result = await redisStore.createRoom(roomObj);
      return res.json({result});
    } catch (error) {
      next(error);
    }
  },
};

module.exports = controller;
