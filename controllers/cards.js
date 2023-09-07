const Card = require("../models/cards"); 

// Create a new card
exports.createCard = async (req, res) => {
  try {
    const card = new Card(req.body);
    await card.save();
    res.status(201).send(card);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Retrieve all cards
exports.getAllCards = async (req, res) => {
  try {
    const cards = await Card.find();
    res.send(cards);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a card by ID
exports.updateCard = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ["title", "description", "tags", "task"];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const card = await Card.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!card) {
      return res.status(404).send();
    }

    res.send(card);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a card by ID
exports.deleteCard = async (req, res) => {
  try {
    const card = await Card.findByIdAndDelete(req.params.id);

    if (!card) {
      return res.status(404).send();
    }

    res.send(card);
  } catch (error) {
    res.status(500).send(error);
  }
};
