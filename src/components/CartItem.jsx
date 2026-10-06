import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart
} from "../features/cart/CartSlice";

export default function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const totalAmount = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    window.alert("Checkout is Coming Soon!");
  };

  if (items.length === 0) {
    return (
      <main className="cart-page">
        <div className="empty-cart">
          <h1 className="page-title">Your cart is empty</h1>
          <p className="page-subtitle">
            Add some beautiful plants and they will appear here.
          </p>
          <Link className="primary-btn" to="/plants">Continue Shopping</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="cart-page">
      <header className="cart-header">
        <div>
          <p className="eyebrow">YOUR SHOPPING BAG</p>
          <h1 className="page-title">Shopping Cart</h1>
        </div>
        <strong>{totalItems} item{totalItems !== 1 ? "s" : ""}</strong>
      </header>

      <section className="cart-items">
        {items.map((item) => (
          <article className="cart-card" key={item.id}>
            <img className="cart-thumb" src={item.image} alt={item.name} />

            <div className="cart-details">
              <h3>{item.name}</h3>
              <p className="unit-price">Unit price: ${item.price.toFixed(2)}</p>

              <div className="quantity-controls">
                <button
                  className="quantity-btn"
                  aria-label={`Decrease ${item.name} quantity`}
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                >
                  −
                </button>
                <span className="quantity-number">{item.quantity}</span>
                <button
                  className="quantity-btn"
                  aria-label={`Increase ${item.name} quantity`}
                  onClick={() => dispatch(increaseQuantity(item.id))}
                >
                  +
                </button>
              </div>
            </div>

            <div className="cart-side">
              <p className="line-total">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                className="delete-btn"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                Delete
              </button>
            </div>
          </article>
        ))}
      </section>

      <section className="cart-summary">
        <div>
          <p className="total-label">Total Cart Amount</p>
          <h2 className="total-amount">${totalAmount.toFixed(2)}</h2>
        </div>
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout — Coming Soon
        </button>
      </section>

      <Link className="continue" to="/plants">← Continue Shopping</Link>
    </main>
  );
}