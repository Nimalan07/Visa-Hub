"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);

  const handleAnalyze = () => {
    if (!file) return alert("Upload a document first!");
    router.push("/analyze");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-96 text-center">
        <h1 className="text-2xl font-bold mb-4">VisaVerse AI</h1>
        <p className="text-gray-600 mb-4">
          Upload your passport or visa document
        </p>

        <input
          type="file"
          className="mb-4"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />

        <button
          onClick={handleAnalyze}
          className="w-full bg-black text-white py-2 rounded-lg"
        >
          Analyze Document
        </button>
      </div>
    </main>
  );
}
