const jwt = require("jsonwebtoken");

const generateJwtToken = async id => {
  const payload = {
    user: {
      id
    }
  };

  return await jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: 3600
  });
};

module.exports = generateJwtToken;
