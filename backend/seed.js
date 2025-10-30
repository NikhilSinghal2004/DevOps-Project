import dotenv from 'dotenv';
import connectDB from './config/db.js';
import Product from './models/Product.js';


dotenv.config();
connectDB();


const data = [
{ name: 'Blue T-Shirt', description: 'Comfort fit', price: 499, image: '', countInStock: 10 },
{ name: 'Sneakers', description: 'Sporty', price: 1999, image: '', countInStock: 5 },
{ name: 'Headphones', description: 'Noise Cancelling', price: 2999, image: '', countInStock: 7 },
];


const seed = async () => {
try {
await Product.deleteMany();
await Product.insertMany(data);
console.log('Seeded');
process.exit();
} catch (err) {
console.error(err);
process.exit(1);
}
};


seed();