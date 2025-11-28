import Hero from "@/components/Hero";
import LaptopCard from "@/components/LaptopCard";

//  laptops fetch from backend
async function getLaptops() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`, {
      cache: "no-store", 
    });
    if (!res.ok) throw new Error("Failed to fetch laptops");
    return res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}

export default async function Home() {
  const laptops = await getLaptops();

  return (
    <>
      <Hero />

      <section className="container mx-auto py-12">
        <h2 className="text-2xl font-bold mb-6">Popular Laptops</h2>

        {laptops.length === 0 ? (
          <p className="text-center text-red-500">No laptops available.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {laptops.slice(0, 6).map((item) => (
              <LaptopCard key={item._id} item={item} />
            ))}
          </div>
        )}
      </section>
      

      <section className="py-20 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
      Real feedback from our happy customers who love our quality and service.
    </p>

    <div className="grid md:grid-cols-2 gap-8">
      
      {/* Card 1 */}
      <div className="p-8 bg-white/60 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-xl border border-gray-200 transition transform hover:-translate-y-1">
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/100?img=1"
            className="w-14 h-14 rounded-full border"
          />
          <div className="text-left">
            <h4 className="font-semibold text-lg">Rahat</h4>
            <p className="text-gray-500 text-sm">Verified Customer</p>
          </div>
        </div>

        <p className="text-gray-700 mt-4 leading-relaxed text-left">
          “Amazing product and super fast delivery! Will definitely buy again.”
        </p>

        <div className="flex mt-4 text-yellow-500 text-xl">
          ⭐⭐⭐⭐⭐
        </div>
      </div>

      {/* Card 2 */}
      <div className="p-8 bg-white/60 backdrop-blur-lg rounded-2xl shadow-md hover:shadow-xl border border-gray-200 transition transform hover:-translate-y-1">
        <div className="flex items-center gap-4">
          <img
            src="https://i.pravatar.cc/100?img=5"
            className="w-14 h-14 rounded-full border"
          />
          <div className="text-left">
            <h4 className="font-semibold text-lg">Mimi</h4>
            <p className="text-gray-500 text-sm">Verified Customer</p>
          </div>
        </div>

        <p className="text-gray-700 mt-4 leading-relaxed text-left">
          “Very responsive support and great pricing. Highly recommended!”
        </p>

        <div className="flex mt-4 text-yellow-500 text-xl">
          ⭐⭐⭐⭐⭐
        </div>
      </div>

    </div>
  </div>
</section>

<section className="py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="max-w-6xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-extrabold mb-4 text-gray-900">
      Why Choose <span className="text-blue-600">Gadget Store?</span>
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
      We provide the best prices, genuine products, fast delivery & trusted support.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      
      {/* Card 1 */}
      <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
        <div className="text-blue-600 text-4xl mb-3">💰</div>
        <h3 className="font-semibold text-lg mb-1">Best Price Guarantee</h3>
        <p className="text-gray-500 text-sm">Get unbeatable deals every day.</p>
      </div>

      {/* Card 2 */}
      <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
        <div className="text-blue-600 text-4xl mb-3">✔️</div>
        <h3 className="font-semibold text-lg mb-1">100% Genuine</h3>
        <p className="text-gray-500 text-sm">We only sell authentic products.</p>
      </div>

      {/* Card 3 */}
      <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
        <div className="text-blue-600 text-4xl mb-3">⚡</div>
        <h3 className="font-semibold text-lg mb-1">Fast Delivery</h3>
        <p className="text-gray-500 text-sm">Quick shipping across the country.</p>
      </div>

      {/* Card 4 */}
      <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
        <div className="text-blue-600 text-4xl mb-3">💬</div>
        <h3 className="font-semibold text-lg mb-1">Trusted Support</h3>
        <p className="text-gray-500 text-sm">Friendly assistance whenever you need.</p>
      </div>

    </div>
  </div>
</section>

{/* --------------------------- SECTION 6: NEWSLETTER --------------------------- */}
<section className="py-20 bg-gradient-to-r from-[#e76b6d] via-[#ec3e58] to-[#8C3A96] text-white rounded">
  <div className="max-w-3xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
    <p className="text-lg mb-8 text-gray-100">
      Subscribe to get the latest offers and laptop deals every week.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full  sm:w-64 px-5 py-3 rounded-full text-black focus:outline-none focus:ring-3 focus:ring-[#8C3A96] shadow-md bg-white transition"
      />
      <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-[#eb082a] transition shadow-md font-semibold">
        Subscribe
      </button>
    </div>

    <p className="text-gray-200 text-sm mt-4">
      We respect your privacy. Unsubscribe anytime.
    </p>
  </div>
</section>


    </>
  );
}
