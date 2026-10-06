import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../features/cart/CartSlice";
import { products } from "../data/products";

const categories = ["Air Purifying", "Succulents", "Tropical"];

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const isInCart = (id) => cartItems.some((item) => item.id === id);

  return (
    <main className="page-shell">
      <header>
        <p className="eyebrow">SHOP OUR COLLECTION</p>
        <h1 className="page-title">Find your perfect plant.</h1>
        <p className="page-subtitle">
          Explore 18 hand-picked houseplants across three beautiful collections.
        </p>
      </header>

      {categories.map((category) => (
        <section className="category-section" key={category}>
          <h2 className="category-title">{category}</h2>
          <div className="product-grid">
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <article className="product-card" key={product.id}>
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.name}
                  />
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <div className="product-row">
                      <span className="price">${product.price.toFixed(2)}</span>
                      <button
                        className="add-btn"
                        disabled={isInCart(product.id)}
                        onClick={() => dispatch(addToCart(product))}
                      >
                        {isInCart(product.id) ? "Added to Cart" : "Add to Cart"}
                      </button>
                    </div>
                  </div>
                </article>
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}