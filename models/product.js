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
  transportationDetails: String,
  ingredientsList: String,
  qualityMetrics: String,
  location: String,
  harvestDate: Date,
  expiryDate: Date,
  storageConditions: String,
  traceabilityInformation: String,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

