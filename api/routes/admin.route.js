const express = require("express");

const router = express.Router();
const menu = require("../controllers/amdinPanel.controller.js");

router.get("/admin", admin.getAll);
router.post("/admin", admin.create);
router.delete("/admin/:id", admin.delete);
router.put("/admin", admin.update);

module.exports = router;
