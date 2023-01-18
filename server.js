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

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.
const userRouter = require("./src/routes/userRouter");
const { errorHandler } = require("./src/middleware/errorHandler");
const pendingUserRequestSchedular = require("./src/schedulers/pendingUserRequestSchedular");

app.use(cors());

// configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// configuring global error handler
app.use(errorHandler);

// configuring routes
app.use("/api/v1/users/", userRouter);

// http://expressjs.com/en/starter/static-files.html
app.use("/static", express.static(path.resolve(__dirname, "src/frontend", "static")));

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/src/frontend/index.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT || 3000, async function () {
  console.log("Your app is listening on port " + listener.address().port);
  console.log("Here I'm");
  // start cron job for sending pending stats on mail
  pendingUserRequestSchedular.start();
});
