const EventDAO = require("../dao/event-dao");
const DishDAO = require("../dao/dish-dao");

const getUserLocation = require("../utils/get-user-location");
const shuffleArray = require("../utils/shuffle-array");

const MAX_ITEMS_PER_SECTION = 10;

// get 10 (MAX_ITEMS_PER_SECTION) shuffled events 
const _getInYourCityEvents = async () => {
	
  const allEvents = await EventDAO.readAll();
  const shuffledEvents = shuffleArray(allEvents);
  const events =  shuffledEvents.slice(0, MAX_ITEMS_PER_SECTION);

  return events;
};

// get 10 (MAX_ITEMS_PER_SECTION) shuffled popular dishes & mightLike dishes 
const _getDishesSectionsData = async () => {
	
  const allDishes = await DishDAO.readAll();
  const dishesShuffled = shuffleArray(allDishes);
  const popularDishesShuffled = shuffleArray(dishesShuffled);
  const popularDishes = popularDishesShuffled.slice(0, MAX_ITEMS_PER_SECTION);

  const youMightLikeDishesShuffled = shuffleArray(dishesShuffled);
  const youMightLikeDishes = youMightLikeDishesShuffled.slice(
    0,
    MAX_ITEMS_PER_SECTION
  );

  return {
    youMightLikeDishes,
    popularDishes
  };
};

// GET userLocation, inYourCityEvents, popularDishes & youMightLikeDishes datas to Home
exports.getHomeData = async (req, res, next) => {

  console.log("Getting userLocation, inYourCityEvents, popularDishes & youMightLikeDishes datas");

  const { popularDishes, youMightLikeDishes } = await _getDishesSectionsData();
  const inYourCityEvents = await _getInYourCityEvents();
  const userLocation = getUserLocation();

  return res.status(200).json({
    userLocation,
    inYourCityEvents,
    youMightLikeDishes,
    popularDishes
  });
};
