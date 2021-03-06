const mongoose = require('mongoose');
const { Schema } = mongoose;

const PharmacySchema = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Pharmacy', PharmacySchema);
