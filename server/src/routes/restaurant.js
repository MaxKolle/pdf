const express = require("express");
const router = express.Router();

const RestaurantController = require("../controllers/restaurant-controller");

// GET nearby restaurants based on user location
// GET - http://localhost:3000/kame-tcha/api/v1/restaurant/nearby
router.get("/nearby", RestaurantController.getNearbyRestaurants);

// POST - http://localhost:3000/kame-tcha/api/v1/restaurant/batch
router.post("/batch", RestaurantController.createInBatch);

// GET restaurants FILTERED BY dishesTypes, maxDistance, userLocation
// GET - http://localhost:3000/kame-tcha/api/v1/restaurant/filter
router.get("/filter", RestaurantController.filter);

// GET - http://localhost:3000/kame-tcha/api/v1/restaurant/
router.get("/", RestaurantController.readAll);

// POST - http://localhost:3000/kame-tcha/api/v1/restaurant/
router.post("/", RestaurantController.create);

// DELETE - http://localhost:3000/kame-tcha/api/v1/restaurant/:id
router.delete("/:id", RestaurantController.delete);

// GET restaurant with distance & isOpen status and menu by restaurantID
// GET - http://localhost:3000/kame-tcha/api/v1/restaurant/:id
router.get("/:id", RestaurantController.readById);

// UPDATE - http://localhost:3000/kame-tcha/api/v1/restaurant/:id
router.patch("/:id", RestaurantController.update);

module.exports = router;
