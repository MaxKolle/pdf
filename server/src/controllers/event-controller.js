const mongoose = require("../db");

const shuffleArray = require("../utils/shuffle-array");
const RestaurantDAO = require("../dao/restaurant-dao");
const EventDAO = require("../dao/event-dao");

// CREATE Event in Database object 
exports.create = async (req, res, next) => {

  console.log("Event/create --- Create event with: " + req.body.toString() + "Data");

  try {
    const { id } = await EventDAO.create(req.body);

    return res.status(201).json({
      id
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

// CREATE in Batch - Event in Database object
exports.createInBatch = async (req, res, next) => {

  console.log("Event/createInBatch --- Create event in Batch with: " + req.body.toString() + "Data");

  try {
    await EventDAO.createInBatch(req.body);

    return res.status(201).json({
      message: "Events created with Success!"
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

// GET all shuffled events
exports.readAll = async (req, res, next) => {

  console.log("Event/readAll --- Getting all shuffle events");

  try {
    const allEvents = await EventDAO.readAll();
    const shuffledEvents = shuffleArray(allEvents);
	const events = shuffledEvents;

    return res.status(200).json({
      events
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

// GET restaurants & event datas of an event by id of restaurantsParticipating
exports.readById = async (req, res, next) => {

  console.log("Event/readById/" + req.params.id + " --- Getting restaurants & event data");

  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: "The field id is required."
      });
    }

    const event = await EventDAO.readById(id);

    if (!event) {
      return res.status(404).json({
        message: "Event Not Found"
      });
    }

    const restaurantsFilteredByDishType = await RestaurantDAO.filterBasedDishesTypes(
      event.dishesTypes
    );

    const restaurants = restaurantsFilteredByDishType
      .map(data => ({
        ...data.restaurants[0],
        id: data.restaurants[0]._id
      }))
      .slice(0, event.restaurantsParticipating);

    return res.status(200).json({
      restaurants,
      event
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

// UPDATE a event datas by id
exports.update = async (req, res, nex) => {

  console.log("Event/update/" + req.params.id + " --- Update event with: " + req.body.toString() + "Data and Return event Updated");

  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: "The field id is required."
      });
    }

    const eventUpdated = await EventDAO.update(id, { ...req.body });

    if (eventUpdated) {
      return res.status(200).json({
        eventUpdated
      });
    }

    return res.status(404).json({
      message: "Event Not Found"
    });
  } catch (err) {
    return res.status(500).json({
      err
    });
  }
};

// DELETE a event by id
exports.delete = async (req, res, next) => {

  console.log("Event/delete/" + req.params.id + " --- Delete event");

  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: "The field id is required."
      });
    }

    const eventDeleted = await EventDAO.delete(id);

    if (eventDeleted) {
      return res.status(200);
    }

    return res.status(404).json({
      message: "Event Not Found"
    });
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};
