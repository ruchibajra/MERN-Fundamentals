const mongoose = require("mongoose");
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: [true, "Category name is required"],
    unique: true,
  },
  description: {
    type: String,
    required: [true, "Category description is required"],
  },
});

module.exports = mongoose.model("Category", categorySchema);;