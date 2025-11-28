"use client";

import { useState } from "react";

const AddProduct = () => {
  const [form, setForm] = useState({
    title: "",
    shortDesc: "",
    fullDesc: "",
    price: "",
    image: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("Product added successfully!");
        setForm({ title: "", shortDesc: "", fullDesc: "", price: "", image: "" });
      } else {
        setMessage(data.message || "Error adding product");
      }
    } catch (err) {
      setMessage("Server error");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 md:p-10 bg-white rounded-2xl shadow-lg mt-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Add New Product</h1>

      {message && (
        <p
          className={`mb-6 text-center font-medium ${
            message.includes("success") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Product Title"
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm transition"
          required
        />

        <input
          type="text"
          name="shortDesc"
          value={form.shortDesc}
          onChange={handleChange}
          placeholder="Short Description"
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm transition"
        />

        <textarea
          name="fullDesc"
          value={form.fullDesc}
          onChange={handleChange}
          placeholder="Full Description"
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm transition h-32 resize-none"
        />

        <input
          type="text"
          name="price"
          value={form.price}
          onChange={handleChange}
          placeholder="Price (e.g. 1200)"
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm transition"
          required
        />

        <input
          type="text"
          name="image"
          value={form.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm transition"
          required
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-full font-semibold text-white bg-gradient-to-r from-[#F59092] via-[#EF475F] to-[#8C3A96] shadow-lg hover:scale-105 transform transition disabled:opacity-50"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
