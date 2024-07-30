const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Product Schema
const ProductSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    reviews: { type: String, required: true },
  });

  module.exports = mongoose.model('Category', ProductSchema);