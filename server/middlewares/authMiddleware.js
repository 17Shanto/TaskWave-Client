const jwt = require("jsonwebtoken");

// Your secret key for JWT token verification
const secretKey = "my-secret-key";

// Middleware for JWT token verification
function requireAuth(req, res, next) {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }

    // If the token is valid, store the decoded user information in the request for later use
    req.user = decoded;
    next();
  });
}

module.exports = { requireAuth };