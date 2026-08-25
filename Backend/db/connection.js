const mongoose = require("mongoose");
const colors = require("colors");
const MONGO_URI =
  process.env.MONGO_URI ||
  // "mongodb+srv://saavansavaliya702_db_user:7KI5YJ8K743UFR45@workers.iseuvax.mongodb.net/Company-Calculation=workers";
  "mongodb+srv://saavansavaliya702_db_user:7KI5YJ8K743UFR45@workers.iseuvax.mongodb.net/Company-Calculation";
mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log(colors.america("MongoDB is successfully connected"));
  })
  .catch((error) => {
    console.log("No connection at this time:", error.message);
  });
