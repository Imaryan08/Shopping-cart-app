import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import db from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Test DB Connection
const testDBConnection = async () => {
    try {
        const connection = await db.getConnection();
        console.log("✅ Connected to MySQL database!");
        connection.release();
    } catch (error) {
        console.error("❌ MySQL connection failed:", error.message);
    }
};
testDBConnection();

// Routes
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
