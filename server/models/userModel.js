const mongoose = require("mongoose");

const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

/**
 * Represents and defines a User in the application.
 * @class
 */
const userSchema = new mongoose.Schema({
  /**
   * The name of the user.
   * @type {string}
   * @required
   * @trim
   */

  name: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
  },

   /**
   * The email of the user.
   * @type {string}
   * @required
   * @unique
   * @trim
   * @validate {isEmail} - Must be a valid email address.
   */

  email: {
    type: String,
    required: [true, "Email is required."],
    unique: [true, "Email must be unqiue"],
    trim: true,
    validate: [isEmail, "Please enter a valid email."],
  },

  /**
   * The password of the user.
   * @type {string}
   * @required
   * @minLength 6 - Minimum password length is 6 characters.
   */


  password: {
    type: String,
    required: [true, "Password is required."],
    minLength: [6, "Minimum password length is 6 character"],
  },

  /**
   * An array of workspaces associated with the user.
   * @type {Array.<mongoose.Schema.Types.ObjectId>}
   * @ref Workspace
   */

  workspaces: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workspace",
    },
  ],

   /**
   * An array of lists associated with the user.
   * @type {Array.<mongoose.Schema.Types.ObjectId>}
   * @ref List
   */


  lists: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "List",
    },
  ],

  /**
   * An array of tasks associated with the user.
   * @type {Array.<mongoose.Schema.Types.ObjectId>}
   * @ref Task
   */


  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

/**
 * Fire a function that hashes the user password before saving the doc
*/ 
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});
/**
 * Static method to login a user.
 * @function
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise} A promise that resolves to the authenticated user or rejects with an error.
 */
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });

  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    } else throw Error("Incorrect password");
  }
  throw Error("Incorrect email");
};

/**
 * Create user model
 * @type {mongoose.Model}
 */const User = mongoose.model("User", userSchema);

module.exports = User;
