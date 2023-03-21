const Product = require("../models/product.model");

exports.getAll = async (req, res) => {
  try {
    const result = await Product.find({});
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

exports.getOne = async (req, res) => {
  const { _id } = req.params;
  try {
    const result = await Product.findById({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const result = await Product.create(req.body);
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

exports.updateProduct = async (req, res) => {
  const { _id } = req.params;
  try {
    const result = await Product.findByIdAndUpdate({ _id }, req.body, {
      new: true,
    });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};

exports.deleteProduct = async (req, res) => {
  const { _id } = req.params;
  try {
    const result = await Product.deleteOne({ _id });
    res.json({ status: true, result });
  } catch (err) {
    res.json({ status: false, message: err });
  }
};
