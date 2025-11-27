"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function LaptopDetailsPage() {
  const { id } = useParams();
  const [laptop, setLaptop] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLaptop = async () => {
      try {
        const res = await fetch(`https://gadget-store-server-fawn.vercel.app/api/products/${id}`);
        const data = await res.json();
        setLaptop(data);
      } catch (err) {
        console.error("Error fetching laptop:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLaptop();
  }, [id]);

  if (loading) return <div className="text-center mt-20">Loading...</div>;
  if (!laptop) return <div className="text-center mt-20">Laptop not found</div>;

  return (
    <div className="max-w-5xl mx-auto my-10 p-4 md:p-8 bg-white rounded-2xl shadow-lg">
      <div className="flex flex-col md:flex-row gap-6">
        
        {/* Laptop Image */}
        <img
          src={laptop.image}
          alt={laptop.title}
          className="w-full md:w-1/2 h-auto rounded-xl object-cover shadow-md"
        />

        {/* Laptop Details */}
        <div className="md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{laptop.title}</h1>
            <p className="text-gray-600 mt-2">{laptop.shortDesc}</p>
            <p className="text-gray-700 mt-4">{laptop.fullDesc}</p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <span className="text-2xl font-bold text-indigo-600">
              {laptop.price}
            </span>

           
            <button
              className="
                px-6 py-3 rounded-full text-white font-semibold 
                bg-gradient-to-r from-[#F59092] via-[#EF475F] to-[#8C3A96]
                shadow-lg hover:shadow-xl transition-all
                hover:opacity-90 active:scale-95
              "
            >
              Buy Now
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
