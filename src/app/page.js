"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useCart from "./hooks/useCart";
import Header from "./components/Header";
import CartSummary from "./components/CartSummary";
import ProductList from "./components/ProductList";

export default function ShoppingApp() {
  const { cart, products, addToCart, updateQuantity, removeFromCart } = useCart();
  const [cartOpen, setCartOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header totalItems={cart.reduce((total, item) => total + item.quantity, 0)} setCartOpen={setCartOpen} />
      <div className="max-w-7xl mx-auto px-4">
        <ProductList products={products} addToCart={addToCart} />
      </div>
      {cartOpen && <CartSummary cart={cart} updateQuantity={updateQuantity} removeFromCart={removeFromCart} router={router} />}
    </div>
  );
}
