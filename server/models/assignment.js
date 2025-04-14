const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
  name: String,
  dueDate: Date,
  submitted: Boolean
});

module.exports = mongoose.model("Assignment", assignmentSchema);
