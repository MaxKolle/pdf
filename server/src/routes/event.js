const express = require("express");
const router = express.Router();

const EventController = require("../controllers/event-controller");

// CREATE in Batch - Event in Database object
// POST - http://localhost:3000/kame-tcha/api/v1/event/batch
router.post("/batch", EventController.createInBatch);

// CREATE Event in Database object
// POST - http://localhost:3000/kame-tcha/api/v1/event/
router.post("/", EventController.create);

// GET all shuffled events
// GET - http://localhost:3000/kame-tcha/api/v1/event/
router.get("/", EventController.readAll);

// GET restaurants & event datas of an event by id of restaurantsParticipating
// GET - http://localhost:3000/kame-tcha/api/v1/event/:id
router.get("/:id", EventController.readById);

// UPDATE an event datas by id
// UPDATE - http://localhost:3000/kame-tcha/api/v1/event/:id
router.patch("/:id", EventController.update);

// DELETE an event by id
// DELETE - http://localhost:3000/kame-tcha/api/v1/event/:id
router.delete("/:id", EventController.delete);

module.exports = router;
