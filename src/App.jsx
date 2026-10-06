import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import AboutUs from "./pages/AboutUs";
import ProductList from "./pages/ProductList";
import CartItem from "./components/CartItem";
import "./App.css";

function Navbar() {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <nav className="navbar">
      <Link className="brand" to="/plants">🌿 Paradise Nursery</Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/plants">Plants</Link>
        <Link className="cart-link" to="/cart" aria-label="Shopping cart">
          <ShoppingCart size={21} />
          <span>Cart</span>
          <span className="cart-badge">{totalItems}</span>
        </Link>
      </div>
    </nav>
  );
}

function LandingPage() {
  return (
    <main className="landing-page">
      <div className="landing-overlay">
        <div className="landing-content">
          <p className="eyebrow">WELCOME TO PARADISE NURSERY</p>
          <h1>Bring Nature Home</h1>
          <p>
            Discover beautiful, easy-to-love houseplants selected to make
            every room feel fresh, peaceful, and alive.
          </p>
          <Link className="primary-btn" to="/plants">Get Started</Link>
          <Link className="text-link" to="/about">Learn more about us →</Link>
        </div>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<><Navbar /><AboutUs /></>} />
        <Route path="/plants" element={<><Navbar /><ProductList /></>} />
        <Route path="/cart" element={<><Navbar /><CartItem /></>} />
        <Route path="*" element={<><Navbar /><ProductList /></>} />
      </Routes>
    </div>
  );
}