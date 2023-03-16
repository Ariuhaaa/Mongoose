const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    username: {
      type: String,
      unique: true,
    },
    password: String,
    email: {
      type: String,
      unique: true,
    },
  },
  { collection: "user" }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

// id, firstname, lastname, username, password, email
