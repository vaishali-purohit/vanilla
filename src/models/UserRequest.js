const mongoose = require("mongoose");

const { Schema } = mongoose;

let UserRequestSchema = new Schema({
  address: {
    type: String,
    required: true,
  },
  userWish: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user-requests", UserRequestSchema);
