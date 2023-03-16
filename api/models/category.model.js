const { default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    // categoryId:
    categoryName: {
      type: String,
      unique: true,
    },
  },
  { collection: "category" }
);

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;

// categoryId, categoryName
