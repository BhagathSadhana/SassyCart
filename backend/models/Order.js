const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  products: [{ name: String, price: Number, quantity: Number }],
  total: Number,
  status: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('Order', orderSchema);
