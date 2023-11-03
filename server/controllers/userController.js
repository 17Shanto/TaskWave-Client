const User = require("../models/userModel");
const jwt = require("jsonwebtoken");


/**
 * Handles errors and maps them to error messages.
 * @function
 * @param {Error} err - The error to handle.
 * @returns {Object} An object containing error messages.
 */


const handleErrors = (err) => {
  let errors = { name: "", email: "", password: "" };

  /** 
   * incorrect email
   */ 

  if (err.message === "Incorrect email") {
    errors.email = "The email entered is not registered";
  }
  /** 
   * incorrect password
   */ 

  if (err.message === "Incorrect password") {
    errors.password = "The password is incorrect";
  }

  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

const maxAge = 3 * 24 * 60 * 60;


/**
 * Creates a JWT token with a specified user ID.
 * @function
 * @param {string} id - The user's ID.
 * @returns {string} A JWT token.
 */

const createToken = (id) => {
  return jwt.sign({ id }, "my-secret-key", {
    expiresIn: maxAge,
  });
};

/**
 * Register a new user.
 * @function
 * @async
 * @param {express.Request} req - The Express request object.
 * @param {express.Response} res - The Express response object.
 */

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
/**
 *Check if the user already exists
 */

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }

  /**
  * Create a new user
  */

    const user = new User({
      name,
      email,
      password,
    });

    await user.save();

    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    const errors = handleErrors(error);
    res.status(500).json({ errors });
  }
};

/**
 * Login user.
 * @function
 * @async
 * @param {express.Request} req - The Express request object.
 * @param {express.Response} res - The Express response object.
 */

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({
      message: "User login successful!",
        user,
        token
    }); 
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

/**
 * Logout user.
 * @function
 * @async
 * @param {express.Request} req - The Express request object.
 * @param {express.Response} res - The Express response object.
 */
exports.logoutUser = async (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.status(200).json({ message: "Successfully logged out!" });
};
