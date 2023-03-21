const { Router } = require("express");
const menu = require("../controllers/menu.controller");

const route = Router();

route.get("/menu", menu.getAll);
route.get("/menu", menu.getOne);
route.post("/menu", menu.createMenu);
route.put("/menu/:id", menu.updateMenu);
route.delete("/menu/:id", menu.deleteMenu);

module.exports = route;
