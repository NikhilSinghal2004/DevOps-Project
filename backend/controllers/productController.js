import Product from '../models/Product.js';


export const getProducts = async (req, res) => {
const products = await Product.find({});
res.json(products);
};


export const getProductById = async (req, res) => {
const product = await Product.findById(req.params.id);
if (product) res.json(product);
else res.status(404).json({ message: 'Product not found' });
};


export const createProduct = async (req, res) => {
const { name, description, price, image, countInStock, category } = req.body;
const product = new Product({ name, description, price, image, countInStock, category });
const created = await product.save();
res.status(201).json(created);
};


export const deleteProduct = async (req, res) => {
const product = await Product.findById(req.params.id);
if (product) {
await product.remove();
res.json({ message: 'Product removed' });
} else res.status(404).json({ message: 'Product not found' });
};