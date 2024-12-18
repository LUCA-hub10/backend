const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  sku: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: String,
    required: true
  },
  brand: {
    type: String
  },
  model: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  discountPrice: {
    type: Number
  },
  stockQuantity: {
    type: Number,
    required: true
  },
  weight: {
    type: Number
  },
  clientID: {
    type: String,
    required: true
  },
  dimensions: {
    type: String
  },
  images: [{
    img:{
      type: String
    }
  }],
  video: {
    type: String
  },
  ratings: {
      type: Number,
      default: 0
    },
    reviews: {
      type : Number,
      default: 0
    },
    comments: [{
      userName: {
        type: String,
        required: true
      },
      commentText: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
    }],
  dateAdded: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Product", ProductSchema);