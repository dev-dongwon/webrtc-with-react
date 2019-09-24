const { User } = require("../db/models");

const instructions = {
  readUserData : async id => {
    const user = await User.findOne({ where: { id } });
    return user;
  }
};

module.exports = instructions;
