const express = require("express");
const router = express.Router();

const ReviewController = require("../controllers/review-controller");

// POST - http://localhost:3000/kame-tcha/api/v1/review/batch
router.post("/batch", ReviewController.createInBatch);

// POST - http://localhost:3000/kame-tcha/api/v1/review/
router.post("/", ReviewController.create);

// GET - http://localhost:3000/kame-tcha/api/v1/review/
router.get("/", ReviewController.readAll);

// GET - http://localhost:3000/kame-tcha/api/v1/review/:id
router.get("/:id", ReviewController.readById);

// UPDATE - http://localhost:3000/kame-tcha/api/v1/review/:id
router.patch("/:id", ReviewController.update);

// DELETE - http://localhost:3000/kame-tcha/api/v1/review/:id
router.delete("/:id", ReviewController.delete);

module.exports = router;
