"use client";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState<File | null>(null);

  const upload = async () => {
    const formData = new FormData();
    if (file) formData.append("file", file);

    await fetch("http://localhost:8000/upload", {
      method: "POST",
      body: formData,
    });

    alert("Uploaded!");
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">VisaVerse AI</h1>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />

      <button
        onClick={upload}
        className="bg-blue-600 text-white px-4 py-2 mt-4"
      >
        Upload Document
      </button>
    </div>
  );
}
