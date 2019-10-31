const ReviewDAO = require("../dao/review-dao");

const log = require("../utils/log");

exports.create = async (req, res, next) => {

  log("Review/create --- Create review with: " + JSON.stringify(req.body) + "Data");

  try {
    const { id } = await ReviewDAO.create(req.body);

    return res.status(201).send({
      id
    });
  } catch (error) {
    return res.status(500).send({
      error
    });
  }
};

exports.createInBatch = async (req, res, next) => {

  log("Review/createInBatch --- Create review in Batch with: " + JSON.stringify(req.body) + "Data");

  try {
    await ReviewDAO.createInBatch(req.body);

    return res.status(201);
  } catch (error) {
    return res.status(500).send({
      error
    });
  }
};

exports.readAll = async (req, res, next) => {

  log("Review/readAll --- Getting all reviews");

  try {
    const reviews = await ReviewDAO.readAll();

    return res.status(200).send({
      reviews
    });
  } catch (error) {
    return res.status(500).send({
      error
    });
  }
};

exports.readById = async (req, res, next) => {

  log("Review/readById/" + req.params.id + " --- Getting review data ");

  try {
    const { id } = req.params;

    const review = await ReviewDAO.readById(id);

    if (review) {
      return res.status(200).send({
        review
      });
    }

    return res.status(404).send({
      message: "Review Not Found"
    });
  } catch (error) {
    return res.status(500).send({
      error
    });
  }
};

exports.update = async (req, res, next) => {

  log("Review/update/" + req.params.id + " --- Update review with: " + JSON.stringify(req.body) + "Data and Return review Updated");

  try {
    const { id } = req.params;

    const reviewUpdated = await ReviewDAO.update(id, req.body);

    if (reviewUpdated) {
      return res.status(200).send({
        reviewUpdated
      });
    }

    return res.status(404).send({
      message: "Review Not Found"
    });
  } catch (error) {
    return res.status(500).send({
      error
    });
  }
};

exports.delete = async (req, res, next) => {

  log("Review/delete/" + req.params.id + " --- Delete review");

  try {
    const { id } = req.params;

    const reviewDeleted = await ReviewDAO.delete(id);

    if (reviewDeleted) {
      return res.status(200);
    }

    return res.status(404).send({
      message: "Review Not Found"
    });
  } catch (error) {
    return res.status(500).send({
      error
    });
  }
};
