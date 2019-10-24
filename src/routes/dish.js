const express = require("express");
const router = express.Router();

const DishController = require("../controllers/dish-controller");

// CREATE Dish in Database object from request body
// POST - http://localhost:3000/kame-tcha/api/v1/dish/
router.post("/", DishController.create);

// GET 20 shuffled dishes
// GET - http://localhost:3000/kame-tcha/api/v1/dish/
router.get("/", DishController.readAll);

// CREATE in Batch - Dish in Database object from request body
// POST - http://localhost:3000/kame-tcha/api/v1/dish/batch
router.post("/batch", DishController.createInBatch);

// GET dish, restaurant & reviews datas of a dish by id
// GET - http://localhost:3000/kame-tcha/api/v1/dish/:id
router.get("/:id", DishController.readById);

// UPDATE a dish datas by id
// UPDATE - http://localhost:3000/kame-tcha/api/v1/dish/:id
router.patch("/:id", DishController.update);

// DELETE a dish by id
// DELETE - http://localhost:3000/kame-tcha/api/v1/dish/:id
router.delete("/:id", DishController.delete);

module.exports = router;
