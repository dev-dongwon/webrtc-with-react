const bcrypt              = require('bcryptjs'),
      userModel           = require('../db/models/user'),
      { checkValidation } = require('../middlewares/validator'),
      { User }             = require('../db/models');

const controller = {
  // 유저 가져오기
  getUser: async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await User.findOne({ where : { id } });
      return res.json({user});
    } catch (error) {
      next(error);
    }
  },
};

module.exports = controller;
