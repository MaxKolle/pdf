
// create and link all api route

const express = require("express");
const router = express.Router();

// http://localhost:3000/kame-tcha/api/v1/
router.get("/", (req, res) => {

  //res.sendFile('index.html');

  return res.status(200).send({
    message: "UH! KameTcha API is UP && RUNNING!"
  });
});

router.use("/restaurant", require("./restaurant"));
router.use("/data", require("./data-management"));
router.use("/review", require("./review"));
router.use("/event", require("./event"));
router.use("/dish", require("./dish"));
router.use("/home", require("./home"));

module.exports = router;
