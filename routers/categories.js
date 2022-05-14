const express = require("express");
const router = express.Router();
const { Category } = require("../models/categories");

router.get("/", async (req, res) => {
  const categories = await Category.find();
  res.send(categories);
});

router.post("/", async (req, res) => {
  let category = new Category({
    name: req.body.name,
  });
  category = await category.save();

  res.status(201).send(category);
});

router.get("/:id", async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    return res.status(404).send("That type od id not found...");
  }
  res.send(category);
});

module.exports = router;