const jwt = require("jsonwebtoken");

const makePayload = (id) => {
  return {
    id
  };
};

const generateJwtToken = async (id) => {
  return await jwt.sign(makePayload(id), process.env.JWT_SECRET, {
    expiresIn: 3600
  });
};

module.exports = generateJwtToken;
