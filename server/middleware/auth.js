const jwt = require('jsonwebtoken')


// Secret key for admin
const secretForAdmin = "123_gili_gili_chhu";

// Secret key for user
const secretForUser = "Saka_laka_boom_boom";

// Generate Jwt token for admin
const generateJwtTokenAdmin = (username) => {
    const token = jwt.sign({ username: username }, secretForAdmin, {
        expiresIn: "1h",
    });
    return token;
};


// Generate web token for user
const generateJwtTokenUser = (username) => {
  const token = jwt.sign({ username: username }, secretForUser, {
    expiresIn: "1h",
  });
  return token;
};

module.exports = {
    secretForAdmin,
    secretForUser,
    generateJwtTokenAdmin,
    generateJwtTokenUser
}