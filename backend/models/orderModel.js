import mongoose from 'mongoose';
const shippingSchema = {
  address: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: false },
  country: { type: String, required: true },
};

const orderItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  qty: { type: Number, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
});

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  orderItems: [orderItemSchema],
  shipping: shippingSchema,
  itemsPrice: { type: Number },
  taxPrice: { type: Number },
  shippingPrice: { type: Number },
  totalPrice: { type: Number },
  isDelivered: { type: Boolean, default: false },
  deliveredAt: { type: Date },
}, {
  timestamps: true
});

const orderModel = mongoose.model("Order", orderSchema);
export default orderModel;