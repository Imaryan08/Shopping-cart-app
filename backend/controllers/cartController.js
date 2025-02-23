import db from "../config/db.js";

// ✅ Get cart details
export const getCart = async (req, res) => {
    try {
        const [rows] = await db.query(`
            SELECT products.id, products.name, products.price, cart.quantity 
            FROM cart 
            JOIN products ON cart.product_id = products.id
        `);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✅ Add product to cart
export const addToCart = async (req, res) => {
    const { product_id, quantity } = req.body;

    try {
        const [existing] = await db.query("SELECT * FROM cart WHERE product_id = ?", [product_id]);

        if (existing.length > 0) {
            await db.query("UPDATE cart SET quantity = quantity + ? WHERE product_id = ?", [quantity, product_id]);
        } else {
            await db.query("INSERT INTO cart (product_id, quantity) VALUES (?, ?)", [product_id, quantity]);
        }

        res.json({ message: "Product added to cart successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✅ Update cart quantity
export const updateCartQuantity = async (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;

    try {
        await db.query("UPDATE cart SET quantity = ? WHERE product_id = ?", [quantity, id]);
        res.json({ message: "Cart updated successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✅ Remove product from cart
export const removeFromCart = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await db.query("DELETE FROM cart WHERE product_id = ?", [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: "Product not found in cart" });
        }

        res.json({ message: "Product removed from cart" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
