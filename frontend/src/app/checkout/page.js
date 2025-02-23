"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Minus, Plus, X, ShoppingCart } from "lucide-react";
import useCart from "../hooks/useCart";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, fetchCart, updateQuantity, removeFromCart } = useCart();
  useEffect(() => {
    fetchCart();
  }, []);

  const handleQuantityChange = (id, change) => {
    updateQuantity(id, change);
    fetchCart();
  };

  const handlePlaceOrder = () => {
    alert("Order placed successfully! 🎉");
    localStorage.removeItem("cart");
    fetchCart();
    setTimeout(() => {
      router.push("/");
    }, 500);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">
      <div className="flex justify-between w-full max-w-2xl mb-6">
        <button
          className="text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-2"
          onClick={() => router.push("/")}
        >
          ⬅️ Back to Shopping
        </button>
      </div>

      <h1 className="text-4xl font-extrabold mb-6">Checkout</h1>

      {cart.length > 0 ? (
        <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-lg">
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-4 border rounded-lg shadow-sm bg-gray-50"
              >
                <div>
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-gray-600">${item.price} x {item.quantity}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                    onClick={() => handleQuantityChange(item.id, Math.max(1, item.quantity - 1))}
                    disabled={item.quantity <= 1}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="text-lg font-medium">{item.quantity}</span>
                  <button
                    className="bg-gray-200 p-2 rounded-full hover:bg-gray-300"
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    <Plus size={16} />
                  </button>
                  <button
                    className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-lg font-bold flex justify-between">
            <span>Total:</span>
            <span>${totalPrice}</span>
          </div>

          <button
            className="mt-6 w-full py-3 rounded-lg bg-gradient-to-r from-green-500 to-green-700 text-white font-bold hover:from-green-600 hover:to-green-800 transition-all"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center text-gray-500 mt-10">
          <ShoppingCart size={64} />
          <p className="mt-4 text-lg">Your cart is empty.</p>
          <button
            className="mt-4 bg-blue-500 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-all"
            onClick={() => router.push("/")}
          >
            Back to Shopping
          </button>
        </div>
      )}
    </div>
  );
}
