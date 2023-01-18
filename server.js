// server.js
// init project
const express = require("express");
const morgan = require("morgan");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

app.use(bodyParser());
app.use(morgan());

const userRouter = require("./src/routes/userRouter");
const { errorHandler } = require("./src/middleware/errorHandler");
const pendingUserRequestSchedular = require("./src/schedulers/pendingUserRequestSchedular");
const { wishListDb } = require("./src/database/mongoose");

app.use(cors());

// configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(errorHandler); // configuring global error handler

app.use("/api/v1/users/", userRouter); // configuring routes

app.use(
  "/static",
  express.static(path.resolve(__dirname, "src/frontend", "static"))
);

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/src/frontend/index.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, async function () {
  console.log("Your app is listening on port " + listener.address().port);
  await wishListDb(); // Connection Establish to MongoDB
  await pendingUserRequestSchedular.start(); // start cron job for sending pending status on mail
});
