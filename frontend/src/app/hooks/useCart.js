import { useState, useEffect } from "react";

const API_URL = "http://localhost:5000/api";

export default function useCart() {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await fetch(`${API_URL}/products`);
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("❌ Error fetching products:", error);
        }
    };

    const fetchCart = async () => {
        try {
            const response = await fetch(`${API_URL}/cart`);
            const data = await response.json();
            setCart(data);
            localStorage.setItem("cart", JSON.stringify(data));
        } catch (error) {
            console.error("❌ Error fetching cart:", error);
        }
    };
    

    const addToCart = async (product) => {
        try {
            const response = await fetch(`${API_URL}/cart`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ product_id: product.id, quantity: 1 }),
            });
            if (response.ok) fetchCart();
        } catch (error) {
            console.error("❌ Error adding to cart:", error);
        }
    };

    const updateQuantity = async (productId, quantity) => {
        try {
            await fetch(`${API_URL}/cart/${productId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ quantity }),
            });
            fetchCart();
        } catch (error) {
            console.error("❌ Error updating quantity:", error);
        }
    };

    const removeFromCart = async (productId) => {
        try {
            await fetch(`${API_URL}/cart/${productId}`, {
                method: "DELETE",
            });
            fetchCart();
        } catch (error) {
            console.error("❌ Error removing product:", error);
        }
    };

    return { cart, products, fetchCart, addToCart, updateQuantity, removeFromCart };
}
