const express = require("express");
const router = express.Router();

const DataManagementController = require("../controllers/data-management-controller");

// POPULATE Database Objects or Tables (Restaurants, Reviews, Events & Dishes)
// POST - http://localhost:3000/kame-tcha/api/v1/data/populate
router.post("/populate", DataManagementController.populate);

// CLEAR Database Objects or Tables (Restaurants, Reviews, Events & Dishes)
// DELETE - http://localhost:3000/kame-tcha/api/v1/data/clear
router.post("/clear", DataManagementController.clear);

module.exports = router;
