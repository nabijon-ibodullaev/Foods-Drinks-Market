const express = require("express");
const router = express.Router();
const { Food } = require("../models/foods");

router.get("/", async (req, res) => {
  const foods = await Food.find();
  if (!foods) {
    return res.status(404).send("Foods Empty");
  }
  res.send(foods);
});

router.post("/", async (req, res) => {
  let food = new Food({
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    rating: req.body.rating,
    categoryName: req.body.categoryName,
  });
  food = await food.save();

  res.status(201).send(food);
});

router.get("/:id", async (req, res) => {
  const food = await Food.findById(req.params.id);
  if (!food) {
    return res.status(404).send("That type of id not found");
  }
  res.send(food);
});
module.exports = router;