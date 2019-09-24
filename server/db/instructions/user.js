const { User } = require("../models");

const instructions = {
  readUserData : async id => {
    const user = await User.findOne({ where: { id } });
    return user;
  }
};

module.exports = instructions;
