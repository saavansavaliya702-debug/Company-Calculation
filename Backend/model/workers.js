const mongoose = require("mongoose");

const WorkerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
    },
    weight: {
      type: String,
      required: true,
    },
    shape: {
      type: String,
      required: true,
    },
    totalWeight: {
      type: Number,
      required: true,
    },
    totalRupee: {
      type: Number,
      required: true,
    },
    dueAmount: {
      type: String,
      required: true,
    },
    // ✅ ADD DATE FIELDS
    createdAt: {
      type: Date,
      default: Date.now,  // Automatically set to current date/time
    },
   
  },
  {
    versionKey: false,
    timestamps: true,  // Automatically update createdAt and updatedAt
  },
);

const Worker = mongoose.model("Worker", WorkerSchema);
module.exports = Worker;
