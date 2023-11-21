const jwt = require('jsonwebtoken');
const secret = "Shhhhhh"; // Secret key for JWT, stored in environment variable
const expiration = '2h'; // Token expiration time

module.exports = {
  // Function to sign token
  signToken: function({ username, email, _id }) {
    console.log("Im here");
    const payload = { username, email, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },

  // Middleware to verify token
  authMiddleware: function({ req }) {
    let token = req.body.token || req.query.token || req.headers.authorization;

    // Separate "Bearer" from "<tokenvalue>"
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    try {
      // Decode and attach user data to request object
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    return req;
  },

  // Function to verify token (optional, depending on your implementation)
  verifyToken: function(token) {
    return jwt.verify(token, secret, { maxAge: expiration });
  }
};
