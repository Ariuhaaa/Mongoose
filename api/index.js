const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();
const mongoose = require("mongoose");

// const foodRoute = require("./routes/food.routes");
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://Ariunaa:Cp3Ft7JTgqQE3lpB@cluster0.oykpsee.mongodb.net/shop"
  )

  .then(() => console.log("Database successfully connected"))
  .catch((err) => console.log(err));

// app.use("/food", foodRoute);

app.get("/api", (req, res) => {
  res.json("Welcome to API");
});

app.listen(port, () => {
  console.log("Server is running on " + port);
});
