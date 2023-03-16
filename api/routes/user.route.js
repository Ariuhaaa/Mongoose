const { Router } = require("express");
const food = require("../controllers/food.controllers");

const route = Router();

route.get("/", food.getAll);
route.get("/create", food.create);

module.exports = route;
