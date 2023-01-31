const express = require("express");

const router = express.Router();
const menu = require("../controllers/menu.controller.js");

router.get("/category", category.getAll);
router.post("/category", category.create);
router.delete("/category/:mid", category.delete);
router.put("/category", category.update);

module.exports = router;
