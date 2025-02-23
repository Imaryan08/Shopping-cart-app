const ProductCard = ({ product, addToCart }) => (
    <div className="border border-gray-300 p-5 flex flex-col h-full rounded-lg shadow-md">
      <img src={product.image_url} alt={product.name} className="w-full max-h-60 object-cover rounded-md" />
      <div className="flex-grow text-center mt-4">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-gray-600 text-lg">${product.price}</p>
      </div>
      <button className="mt-auto bg-blue-500 text-white py-2 w-full rounded" onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </div>
  );

  export default ProductCard;