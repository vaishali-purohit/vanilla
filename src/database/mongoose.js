const mongoose = require("mongoose");
const userConfig = require("./configs/user");

const env = process.env.NODE_ENV ?? "development";
const config = userConfig[env];

const database = config.database;
const username = config.username;
const cluster = config.cluster;
const password = config.password;

const wishListDb = async () => {
  try {
    const dbURL = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${database}?retryWrites=true&w=majority`;
    await mongoose.set("strictQuery", false);
    await mongoose.connect(dbURL);

    console.log(`MongoDB Connected: ${database}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = { wishListDb };
