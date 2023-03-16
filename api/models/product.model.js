const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    // id:
    // categoryId:
    productName: {
      type: String,
      unique: true,
    },
    price: Number,
    salePercent: Number,
    quantity: Number,
    description: String,
    image: Buffer,
    thumbImage: Buffer,
  },
  { collection: "product" }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;

//id, categoryId, productName, price, salePercent, quantity, description, image, thumbImage
