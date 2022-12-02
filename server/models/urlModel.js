const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema(
  {
    url: String,
    shortUrl: { type: String, unique: true },
    clicks: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Url', urlSchema);
