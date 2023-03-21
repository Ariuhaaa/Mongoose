const Food = require("../models/food.model");

exports.getAll = async (req, res) => {
  const a = await Food.find();
  console.log(a);
  res.json({ message: "Test", result: a });
};

exports.create = async (req, res) => {
  const obj = { foodName: "Huushuur3", foodPrice: "800", test: 1 };
  const a = await Food.create(obj);
  console.log(a);
  res.json({ message: "Success", result: a });
};
