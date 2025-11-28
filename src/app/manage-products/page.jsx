"use client";

import { useEffect, useState } from "react";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  // Fetch products
  const fetchProducts = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`);
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      setMessage("Error fetching products");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Delete product
  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setProducts(products.filter((p) => p._id !== id));
        setMessage("Product deleted successfully!");
      } else {
        setMessage("Error deleting product");
      }
    } catch (err) {
      setMessage("Server error");
    }
  };

  if (loading)
    return (
      <p className="text-center mt-10 text-gray-600 font-medium">Loading...</p>
    );

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Manage Products</h1>

      {message && (
        <p className="mb-4 text-center text-red-600 font-medium">{message}</p>
      )}

      {products.length === 0 ? (
        <p className="text-center text-gray-500">No products available</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1 overflow-hidden flex flex-col"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-52 object-cover rounded-t-2xl"
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-lg font-bold text-gray-800 truncate">
                    {product.title}
                  </h2>
                  <p className="text-gray-500 mt-1 line-clamp-3">
                    {product.shortDesc}
                  </p>
                  <p className="mt-2 font-semibold text-indigo-600">
                    ${product.price}
                  </p>
                </div>

                <button
                  onClick={() => handleDelete(product._id)}
                  className="mt-4 w-full py-2 rounded font-medium text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:scale-105 transform transition shadow-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
