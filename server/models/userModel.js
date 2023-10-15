const mongoose = require("mongoose");

const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

// Define the User schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    unique: [true, "Email must be unqiue"],
    trim: true,
    validate: [isEmail, "Please enter a valid email."],
  },
  password: {
    type: String,
    required: [true, "Password is required."],
    minLength: [6, "Minimum password length is 6 character"],
  },
  workspaces: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workspace",
    },
  ],
  lists: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "List",
    },
  ],
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    },
  ],
});

// Fire a function that hashes the user password before saving the doc
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Static method to login user
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

// Create a User model
const User = mongoose.model("User", userSchema);

module.exports = User;
