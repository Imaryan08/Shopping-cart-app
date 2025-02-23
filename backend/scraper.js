import puppeteer from "puppeteer";
import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// ✅ Connect to MySQL
const db = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

console.log("✅ Connected to MySQL!");

// ✅ Scrape products from eBay
const scrapeProducts = async () => {
    console.log("🚀 Launching Puppeteer...");
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
  
    // 🌍 Go to eBay Laptops page
    const url = "https://www.ebay.com/sch/i.html?_nkw=laptops";
    await page.goto(url, { waitUntil: "networkidle2" });
  
    console.log("🔍 Extracting product details...");
  
    // ✅ Scrape product names, prices, and images
    const products = await page.evaluate(() => {
      return Array.from(document.querySelectorAll(".s-item")) // Select product cards
        .map(item => {
          const title = item.querySelector(".s-item__title")?.innerText || "No Title";
          let priceText = item.querySelector(".s-item__price")?.innerText || "0.00";
          let imageUrl = item.querySelector(".s-item__image-wrapper img")?.src || ""; // ✅ Fix image selector
  
          // ✅ Remove currency symbols and convert to number
          let price = parseFloat(priceText.replace(/[^0-9.]/g, "")) || 0;
  
          return { title, price, imageUrl };
        })
        .slice(0, 10); // Get first 10 products
    });
  
    console.log(`✅ Found ${products.length} products!`);
    if (products.length === 0) {
      console.warn("⚠️ No products found. Exiting...");
      await browser.close();
      return;
    }
  
    // ✅ Save to MySQL (Including `image_url`)
    for (const product of products) {
      await db.execute(
        "INSERT INTO products (name, price, image_url) VALUES (?, ?, ?)",
        [product.title, product.price, product.imageUrl]
      );
    }
  
    console.log("✅ Products saved to MySQL!");
    await browser.close();
  };
  

// 🚀 Run Scraper
scrapeProducts().catch(console.error);
