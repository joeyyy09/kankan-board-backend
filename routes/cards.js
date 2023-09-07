const express = require("express");
const router = express.Router();
const cardsController = require("../controllers/cards"); // Import the cardsController

// Create a new card
router.post("/", cardsController.createCard);

// Retrieve all cards
router.get("/", cardsController.getAllCards);

// Update a card by ID
router.patch("/:id", cardsController.updateCard);

// Delete a card by ID
router.delete("/:id", cardsController.deleteCard);

module.exports = router;
