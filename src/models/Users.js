const mongoose = require("mongoose");

const { Schema } = mongoose;

let UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  uid: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("users", UserSchema);
