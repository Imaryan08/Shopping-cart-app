import express from "express";
import { addToCart, getCart, updateCartQuantity, removeFromCart } from "../controllers/cartController.js";

const router = express.Router();

router.get("/", getCart);
router.post("/", addToCart);
router.put("/:id", updateCartQuantity);
router.delete("/:id", removeFromCart);

export default router;
