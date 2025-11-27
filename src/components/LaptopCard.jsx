export default function LaptopCard({ item }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden">
      
      {/* Laptop Image */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full h-48 object-cover"
      />

      {/* Laptop Info */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 truncate">{item.title}</h3>
        <p className="text-gray-500 mt-1 line-clamp-2">{item.shortDesc}</p>
        <p className="font-bold text-indigo-600 mt-2">{item.price}</p>

        {/* Gradient Button */}
        <a
          href={`/laptops/${item._id}`}
          className="
            inline-block mt-4 px-4 py-2 rounded text-white font-medium text-sm
            bg-gradient-to-r from-[#F59092] via-[#EF475F] to-[#8C3A96]
            shadow-md hover:shadow-lg transition-all duration-300
            hover:opacity-90 active:scale-95
          "
        >
          View Details
        </a>
      </div>
    </div>
  );
}
