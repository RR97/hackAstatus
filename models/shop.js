const mongoose = require('mongoose');

const createShopSchema = mongoose.Schema({
  name: String,
  email: String,
  number: Number,
  address: String,
  city: String,
  region: String,
  zip: Number
});

mongoose.model('shops', createShopSchema);
