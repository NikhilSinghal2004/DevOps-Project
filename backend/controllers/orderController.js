import Order from '../models/Order.js';


export const createOrder = async (req, res) => {
const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = req.body;
if (!orderItems || orderItems.length === 0) {
return res.status(400).json({ message: 'No order items' });
}
const order = new Order({
user: req.user._id,
orderItems,
shippingAddress,
paymentMethod,
itemsPrice,
taxPrice,
shippingPrice,
totalPrice,
});
const createdOrder = await order.save();
res.status(201).json(createdOrder);
};


export const getMyOrders = async (req, res) => {
const orders = await Order.find({ user: req.user._id });
res.json(orders);
};