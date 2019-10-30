const mongoose = require("mongoose");
//const environment = require("../config/environment");

mongoose.connect(
    'mongodb://localhost/kametcha',
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;

module.exports = mongoose;
