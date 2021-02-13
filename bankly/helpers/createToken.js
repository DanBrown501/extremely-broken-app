const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");


/** return signed JWT for payload {username, admin}. */

function createToken(username, admin=false) {
  // OLD CODE:
  // let payload = {username, admin};
  // return jwt.sign(payload, SECRET_KEY);
  
  // FIXES BUG #5
  if (username) {
    let payload = {username, admin};
    return jwt.sign(payload, SECRET_KEY);
  } else {
    return null;
  }
}

module.exports = createToken;