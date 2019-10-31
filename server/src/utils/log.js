
const log = (message) => {

    var datetime = new Date();

    var sliceDatetime = datetime.toString().slice(0, 25);

    console.log( sliceDatetime + ": " + message);

    console.log("=======================================================================================================");
};

module.exports = log;
