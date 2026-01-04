"use client";

import { useState } from "react";

export default function Home() {
  const [status, setStatus] = useState("");

  const checkBackend = async () => {
    const res = await fetch("http://localhost:8000/health");
    const data = await res.json();
    setStatus(data.status);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Dress-a-Critter 🐾</h1>
      <button
        onClick={checkBackend}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Check Backend
      </button>
      {status && <p>Backend says: {status}</p>}
    </main>
  );
}
