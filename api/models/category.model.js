const { default: mongoose } = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    categoryName: String,
  },
  {
    collection: "category",
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
