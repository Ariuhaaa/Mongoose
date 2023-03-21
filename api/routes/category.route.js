const { Router } = require("express");
const category = require("../controllers/category.controller");

const route = Router();

route.get("/category", category.getAll);
route.get("/category", category.getOne);
route.post("/category", category.createCategory);
route.put("/category/:id", category.updateCategory);
route.delete("/category/:id", category.deleteCategory);

module.exports = route;
