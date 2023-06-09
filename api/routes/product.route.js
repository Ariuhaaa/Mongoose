const { Router } = require("express");
const product = require("../controllers/product.controller");

const route = Router();

route.get("/product", product.getAll);
route.get("/product", product.getOne);
route.post("/product", product.createProduct);
route.put("/product/:id", product.updateProduct);
route.delete("/product/:id", product.deleteProduct);

module.exports = route;
