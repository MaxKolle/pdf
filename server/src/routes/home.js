const express = require("express");
const router = express.Router();

const HomeController = require("../controllers/home-controller");

// GET userLocation, inYourCityEvents, popularDishes & youMightLikeDishes data to Home
// GET - http://localhost:3000/kame-tcha/api/v1/home/
router.get("/", HomeController.getHomeData);

module.exports = router;
