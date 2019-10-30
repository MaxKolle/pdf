const mongoose = require("../db");

const RestaurantDAO = require("../dao/restaurant-dao");
const ReviewDAO = require("../dao/review-dao");
const DishDAO = require("../dao/dish-dao");

const shuffleArray = require("../utils/shuffle-array");

const MAX_DISHES_HOME_SECTION = 20;

// get ramdom restaurant per dishesTypes
const _getRandomRestaurant = async dishesTypes => {
	
  const allRestaurants = await RestaurantDAO.readByDishType(dishesTypes);
  const restaurantShuffled = shuffleArray(allRestaurants)[0];
  const restaurant = restaurantShuffled;
  
  return restaurant;
};

// get ramdom reviews per numberOfReviews
const _getRandomReviews = async numberOfReviews => {
	
  const allReviews = await ReviewDAO.readAll();
  const reviewsShuffled = shuffleArray(allReviews);
  const reviews = reviewsShuffled.slice(0, numberOfReviews);

  return reviews;
};

// CREATE Dish in Database object 
exports.create = async (req, res, next) => {

  console.log("Dish/create --- Create dish with: " + req.body.toString() + "Data");

  try {
    const { id } = await DishDAO.create(req.body);

    return res.status(201).json({
      id
    });
  } catch (error) {
    return res.status(500).send({
      error
    });
  }
};

// CREATE in Batch - Dish in Database object
exports.createInBatch = async (req, res, next) => {

  console.log("Dish/createInBatch --- Create dish in Batch with: " + req.body.toString() + "Data");

  try {
    await DishDAO.createInBatch(req.body);

    return res.status(201);
  } catch (error) {
    return res.status(500).send({
      error
    });
  }
};

// GET 20 (MAX_DISHES_HOME_SECTION) shuffled dishes 
exports.readAll = async (req, res, next) => {

  console.log("Dish/readAll --- Getting 20 shuffle dishes");

  try {
    const allDishes = await DishDAO.readAll();
    const shuffledDishesArray = shuffleArray(allDishes);
    const dishes = shuffledDishesArray.slice(0, MAX_DISHES_HOME_SECTION);

    return res.status(200).json({
      dishes
    });
  } catch (error) {
    return res.status(500).send({
      error
    });
  }
};

// GET dish, restaurant & reviews datas of a dish by id
exports.readById = async (req, res, next) => {

  console.log("Dish/readById/" + req.params.id + " --- Getting dish, restaurant & reviews data ");

  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: "The field id is required."
      });
    }

    const dish = await DishDAO.readById(id);

    if (!dish) {
      return res.status(404).json({
        message: "Dish Not Found"
      });
    }

    const restaurant = await _getRandomRestaurant(dish.type);
    const reviews = await _getRandomReviews(dish.reviews);

    return res.status(200).json({
      restaurant,
      reviews,
      dish
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

// UPDATE a dish datas by id
exports.update = async (req, res, next) => {

  console.log("Dish/update/" + req.params.id + " --- Update dish with: " + req.body.toString() + "Data and Return dish Updated");

  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: "The field id is required."
      });
    }

    const dishUpdated = await DishDAO.update(id, { ...req.body });

    if (!dishUpdated) {
      return res.status(404).json({
        message: "Dish Not Found"
      });
    }

    return res.status(200).json({
      dishUpdated
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

// DELETE a dish by id
exports.delete = async (req, res, next) => {

  console.log("Dish/delete/" + req.params.id + " --- Delete dish");

  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: "The field id is required"
      });
    }

    const dishDeleted = await DishDAO.delete(id);

    if (!dishDeleted) {
      return res.status(404).json({
        message: "Dish Not Found"
      });
    }

    return res.status(200);
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};
