const mongoose = require("mongoose");

const { Schema } = mongoose;

let UserDataSchema = new Schema({
  address: {
    type: String,
    required: true,
  },
  userUid: {
    type: String,
    required: true,
  },
  birthdate: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("user-data", UserDataSchema);
