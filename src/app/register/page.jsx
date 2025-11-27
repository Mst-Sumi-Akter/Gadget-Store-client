"use client";

import { auth } from "@/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/login");
    } catch (err) {
      alert("Registration Failed: " + err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-lg rounded">
      <h2 className="text-2xl font-bold mb-4">Create Account</h2>

      <form onSubmit={register} className="flex flex-col gap-4">
        <input 
          className="border p-2 rounded" 
          placeholder="Email"
          value={email} onChange={(e) => setEmail(e.target.value)} 
        />

        <input 
          className="border p-2 rounded" 
          type="password"
          placeholder="Password"
          value={password} onChange={(e) => setPassword(e.target.value)} 
        />

        <button 
          type="submit"
          className="bg-green-600 text-white py-2 rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
}
