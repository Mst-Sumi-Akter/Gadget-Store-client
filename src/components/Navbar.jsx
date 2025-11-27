"use client";
import Link from "next/link";
import { auth } from "@/firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    return onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const isActive = (route) => route === pathname;

  const activeLinkClass =
    "text-white bg-gradient-to-r from-[#F59092] via-[#EF475F] to-[#8C3A96] shadow-lg";

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm py-4 px-6 flex justify-between items-center sticky top-0 z-50">
      
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2">
        <img 
          src="/logo2.png" 
          alt="Logo"
          className="h-14 w-auto cursor-pointer transition-all hover:scale-105"
        />
        <span className="text-xl font-semibold text-gray-700 hidden sm:block">
          Gadget Store
        </span>
      </Link>

      {/* Menu */}
      <div className="flex gap-6 items-center text-gray-700 font-medium">

        <Link
          href="/"
          className={`px-3 py-1 rounded transition ${
            isActive("/") ? activeLinkClass : "hover:text-blue-600"
          }`}
        >
          Home
        </Link>

        <Link
          href="/laptops"
          className={`px-3 py-1 rounded transition ${
            isActive("/laptops") ? activeLinkClass : "hover:text-blue-600"
          }`}
        >
          Laptops
        </Link>

        {!user && (
          <Link
            href="/login"
            className={`px-4 py-2 rounded-lg shadow-sm transition ${
              isActive("/login") ? activeLinkClass : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Login
          </Link>
        )}

        {user && (
          <>
            <Link
              href="/add-product"
              className={`px-3 py-1 rounded transition ${
                isActive("/add-product") ? activeLinkClass : "hover:text-blue-600"
              }`}
            >
              Add Product
            </Link>

            <Link
              href="/manage-products"
              className={`px-3 py-1 rounded transition ${
                isActive("/manage-products") ? activeLinkClass : "hover:text-blue-600"
              }`}
            >
              Manage
            </Link>

            <button
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition shadow-sm"
              onClick={() => signOut(auth)}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
