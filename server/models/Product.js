const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true }
}, { timestamps: true });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Mobile', 'Laptop', 'TV', 'Audio', 'Camera', 'Accessories']
  },
  price: {
    type: Number,
    required: true
  },
  discountPrice: {
    type: Number,
    default: 0
  },
  stock: {
    type: Number,
    required: true,
    default: 0
  },
  images: [
    {
      url: { type: String, required: true },
      public_id: { type: String }
    }
  ],
  specs: {
    type: Map,
    of: String
  },
  reviews: [reviewSchema],
  rating: {
    type: Number,
    default: 0
  },
  numReviews: {
    type: Number,
    default: 0
  },
  isFeatured: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);