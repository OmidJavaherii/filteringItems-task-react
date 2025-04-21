interface Product {
    ProductName: string;
    Stock: boolean;
    Price: number;
    Image: string;
  }
  
  function ProductCard({ product }: { product: Product }) {
    return (
      <div className="border rounded-lg p-4 w-50 shadow-sm text-center">
        <img src={product.Image} alt={product.ProductName} className="w-full h-48 object-contain mb-2 border rounded p-2" />
        <h3 className="text-lg font-bold">{product.ProductName}</h3>
        <p className="text-blue-600 font-bold">{product.Price.toLocaleString()}$</p>
        <button className={`${product.Stock ? "cursor-pointer" : ""} mt-4 text-white bg-gray-900 w-full px-6 py-2 poin`}>
            {product.Stock ? "Add" : "No stock"}
        </button>
      </div>
    );
  }
  
  export default ProductCard;
  