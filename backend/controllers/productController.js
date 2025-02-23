import db from "../config/db.js";

// ✅ Get all products
export const getProducts = async (req, res) => {
    try {
        const [rows] = await db.query("SELECT * FROM products");
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
