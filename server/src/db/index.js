const mongoose = require("mongoose");

const log = require("../utils/log");
//const environment = require("../config/environment");

/*mongoose.connect(
    'mongodb://localhost/kametcha',
  { useNewUrlParser: true }
);*/

mongoose
    .connect('mongodb://localhost/kametcha', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => log('DB Connected!'))
    .catch(err => {
        console.log(err);
    });

mongoose.Promise = global.Promise;

module.exports = mongoose;
