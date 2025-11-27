"use client";

import { auth, googleProvider } from "@/firebase/config";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc"; 

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err) {
      alert("Login Failed: " + err.message);
    }
  };

  const googleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      router.push("/");
    } catch (err) {
      alert("Google Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Login</h2>

        <form onSubmit={login} className="flex flex-col gap-4">
          <input 
            className="border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F59092] transition"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input 
            className="border border-gray-300 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F59092] transition"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button 
            type="submit"
            className="
              mt-2 px-6 py-3 rounded-full text-white font-semibold
              bg-gradient-to-r from-[#F59092] via-[#EF475F] to-[#8C3A96]
              shadow-lg hover:shadow-xl transition transform hover:scale-105
            "
          >
            Login
          </button>
        </form>

        <button 
          onClick={googleLogin}
          className="
            mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-semibold
            bg-gradient-to-r from-[#EF475F] via-[#F59092] to-[#8C3A96]
            shadow-lg hover:shadow-xl transition transform hover:scale-105
          "
        >
          <FcGoogle size={22} />
          Continue with Google
        </button>

        <p className="mt-6 text-center text-gray-600">
          Don't have an account? 
          <a href="/register" className="text-[#EF475F] font-semibold ml-1 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
