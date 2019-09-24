const { User } = require("../models");

const instructions = {
  readUserData: async id => {
    const user = await User.findOne({ where: { id } });
    return user;
  },

  createUser: async ({ name, email, password }) => {
    const user = await User.create({ name, email, password });
    return user;
  },

  isDupleUser: async email => {
    let flag = false;
    const user = await User.findOne({ where: { email } });
    if (user) {
      flag = true;
    }
    return flag;
  }
};

module.exports = instructions;
