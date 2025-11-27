export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* About */}
        <div>
          <h3 className="text-lg font-bold mb-2">Gadget Store</h3>
          <p className="text-gray-400 text-sm">
            Discover and buy the latest laptops and gadgets with ease. Quality products, reliable service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/products" className="hover:text-white transition">Products</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-2">Contact</h3>
          <p className="text-gray-400 text-sm">Email: support@gadgetstore.com</p>
          <p className="text-gray-400 text-sm">Phone: +880 1234 567890</p>
          <div className="flex mt-2 space-x-3">
            <a href="#" className="hover:text-white transition">Facebook</a>
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">Instagram</a>
          </div>
        </div>

      </div>

      <div className="mt-8 border-t border-gray-800 pt-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Gadget Store. All rights reserved.
      </div>
    </footer>
  );
}
