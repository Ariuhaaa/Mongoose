const Menu = require("../models/menu.model");

exports.getAll = async (req, res) => {
  try {
    const result = await Menu.find({});
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

exports.getOne = async (req, res) => {
  const { _id } = req.params;
  try {
    const result = await Menu.findById({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

exports.createMenu = async (req, res) => {
  try {
    const result = await Menu.create(req.body);
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

exports.updateMenu = async (req, res) => {
  const { _id } = req.params;
  try {
    const result = await Menu.findByIdAndUpdate({ _id }, req.body, {
      new: true,
    });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

exports.deleteMenu = async (req, res) => {
  const { _id } = req.params;
  try {
    const result = await Menu.deleteOne({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
