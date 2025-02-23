"use client";

import { useRouter } from "next/navigation";
import { ShoppingCart } from "lucide-react";

const Header = ({ totalItems, setCartOpen }) => {
    const router = useRouter();

    return (
        <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 shadow-md mb-10">
            <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
                <h1
                    onClick={() => router.push("/")}
                    className="text-4xl font-extrabold tracking-wide cursor-pointer hover:opacity-80 transition-opacity hidden md:block"
                >
                    🛍️ Shopping App
                </h1>
                <h1
                    onClick={() => { router.push("/"); setCartOpen(false) }}
                    className="text-4xl font-extrabold tracking-wide cursor-pointer hover:opacity-80 transition-opacity md:hidden"
                >
                    🛍️
                </h1>

                <button
                    onClick={() => setCartOpen((prev) => !prev)}
                    className="relative flex items-center gap-2 bg-white text-blue-600 font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-gray-100 transition-all"
                >
                    <ShoppingCart size={20} />
                    {totalItems > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                            {totalItems}
                        </span>
                    )}
                </button>
            </div>
        </header>
    );
};

export default Header;
