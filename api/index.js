const port = 8080;
const express = require("express");
const cors = require("cors");
const app = express();

const menuRouter = require("./routes/menu.route.js");
const cateRouter = require("./routes/category.route.js");

const fs = require("fs");

app.use(cors());
app.use(express.json());

app.use("/api", menuRouter);
app.use("/api", cateRouter);
// node
app.get("/api", (req, res) => {
  res.json({ message: "Welcome Rest API" });
});

app.listen(port, () => console.log("Server is running"));
