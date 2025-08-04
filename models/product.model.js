// Model for Mongoose to export
const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  thumbnail: String,
  stock: Number,
  deleted: Boolean,
});
const Product = mongoose.model("Product", productSchema, "products");
module.exports = Product;
