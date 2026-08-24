const mongoose = require("mongoose");
const colors = require("colors");

mongoose
  .connect("mongodb://localhost:27017/HMproject")
  .then(() => {
    console.log(colors.america("MongoDB is successfully connected"));
  })
  .catch((error) => {
    console.log("No connection at this time:", error.message);
  });
