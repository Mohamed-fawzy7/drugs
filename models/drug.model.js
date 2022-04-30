const mongoose = require('mongoose');
const { Schema } = mongoose;

const DrugSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    pharmacy: { type: Schema.Types.ObjectId, ref: 'Pharmacy', required: true },
    price: { type: String, required: true },
    quantity: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Drug', DrugSchema);
