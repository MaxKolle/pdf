const express = require("express");
const bodyParser = require("body-parser");

const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// kameTcha API routes
app.use("/kame-tcha/api/v1", require("./routes"));

app.use((req, res, next) => {
  const err = new Error("Route Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.status(err.status || 500).json({ message: err.message });
});

module.exports = app;
