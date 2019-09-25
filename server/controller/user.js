const { readUserData, createUser, isDupleUser } = require("../db/instructions/user"),
      encryptPassword                           = require('../utils/encrypt'),
      generateJwtToken                          = require('../utils/generate-jwt');

const controller = {
  // 유저 가져오기
  getUser: async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await readUserData(id);
      return res.json({ user });
    } catch (error) {
      next(error);
    }
  },
  // 유저 생성하기
  createUser: async (req, res, next) => {
    try {
      let { name, email, password } = req.body;
      
      // 유저 중복 체크
      if (await isDupleUser(email)) {
        return res.status(400).json({ msg : 'User already exist' });
      }

      password = await encryptPassword(password);
      const user = await createUser({ name, email, password });

      const token = await generateJwtToken(user.id);
      return res.json({ token });

    } catch (error) {
      next(error);
    }
  }
};

module.exports = controller;
