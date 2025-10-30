import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartPage() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);
  const total = cartItems.reduce((sum, i) => sum + i.price, 0);

  if (cartItems.length === 0)
    return <p>Your cart is empty. <Link to="/">Go shopping</Link></p>;

  return (
    <div className="container">
      <h1>Your Cart</h1>
      {cartItems.map((item, i) => (
        <div key={i} className="cart-item">
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <button onClick={() => removeFromCart(item._id)}>Remove</button>
        </div>
      ))}
      <h2>Total: ₹{total}</h2>
      <button onClick={clearCart}>Clear Cart</button>
      <Link to="/checkout" className="btn">Checkout</Link>
    </div>
  );
}

export default CartPage;
