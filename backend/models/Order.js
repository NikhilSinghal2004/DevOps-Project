import mongoose from 'mongoose';


const orderItemSchema = new mongoose.Schema({
product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
name: String,
qty: Number,
price: Number,
image: String,
});


const orderSchema = new mongoose.Schema({
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
orderItems: [orderItemSchema],
shippingAddress: { type: Object },
paymentMethod: String,
itemsPrice: Number,
taxPrice: Number,
shippingPrice: Number,
totalPrice: Number,
isPaid: { type: Boolean, default: false },
paidAt: Date,
isDelivered: { type: Boolean, default: false },
deliveredAt: Date,
}, { timestamps: true });


export default mongoose.model('Order', orderSchema);