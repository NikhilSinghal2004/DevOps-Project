import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


const generateToken = (id) => {
return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};


export const register = async (req, res) => {
const { name, email, password } = req.body;
const userExists = await User.findOne({ email });
if (userExists) return res.status(400).json({ message: 'User already exists' });
const salt = await bcrypt.genSalt(10);
const hashed = await bcrypt.hash(password, salt);
const user = await User.create({ name, email, password: hashed });
res.status(201).json({
_id: user._id,
name: user.name,
email: user.email,
isAdmin: user.isAdmin,
token: generateToken(user._id),
});
};


export const login = async (req, res) => {
const { email, password } = req.body;
const user = await User.findOne({ email });
if (user && (await bcrypt.compare(password, user.password))) {
res.json({
_id: user._id,
name: user.name,
email: user.email,
isAdmin: user.isAdmin,
token: generateToken(user._id),
});
} else {
res.status(401).json({ message: 'Invalid email or password' });
}
};