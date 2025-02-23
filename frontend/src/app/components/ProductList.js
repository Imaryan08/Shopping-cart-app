import ProductCard from "./ProductCard";

const ProductList = ({ products, addToCart }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
    </div>
);

export default ProductList;