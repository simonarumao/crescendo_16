// models/product.js

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  producerName: String,
  productionDate: {
    type: Date,
    default: Date.now,
  },
  batchId: {
    type: String,
    required: true,
  },
  textureevaluation: Number,
  ingredientsList: String,
  flavorAssessment: Number,
  oilcontent: Number,
    thickness: Number,
  qualityDecision:String
  
  
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

