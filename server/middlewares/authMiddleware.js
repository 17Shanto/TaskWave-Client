const jwt = require("jsonwebtoken");

/**
 * Your secret key for JWT token verification.
 */

const secretKey = "my-secret-key";


/**
 * Middleware for JWT token verification.
 *
 * @function
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @param {Function} next - The next middleware function in the request/response cycle.
 * @returns {void}
 */

function requireAuth(req, res, next) {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

/**
  * Verify the JWT token with the provided secret key.
  *
  * @function
  * @param {string} token - The JWT token to be verified.
  * @param {string} secretKey - The secret key used for verification.
  * @param {function} callback - Callback function to handle the verification result.
  */
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