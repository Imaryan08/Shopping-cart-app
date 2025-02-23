const CartSummary = ({ cart, updateQuantity, removeFromCart, router }) => (
    <div className="fixed right-0 top-0 w-80 h-full bg-white shadow-lg p-5 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
        {cart.length > 0 ? (
            cart.map((item) => (
                <div key={item.id} className="border-b py-2 flex justify-between items-center">
                    <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-gray-600">${item.price} x {item.quantity}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button className="bg-gray-300 px-2" onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>-</button>
                        <span>{item.quantity}</span>
                        <button className="bg-gray-300 px-2" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                        <button className="bg-red-500 text-white px-2" onClick={() => removeFromCart(item.id)}>X</button>
                    </div>
                </div>
            ))
        ) : (
            <p className="text-gray-600">Your cart is empty.</p>
        )}
        <div className="mt-4">
            <h3 className="text-lg font-bold">Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
        </div>
        <button className="bg-green-500 text-white py-2 w-full rounded mt-4" onClick={() => router.push("/checkout")}>
            Go to Checkout
        </button>
    </div>
);

export default CartSummary;