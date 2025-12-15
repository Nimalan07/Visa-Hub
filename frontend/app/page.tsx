"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [fileContent, setFileContent] = useState("");
  const [country, setCountry] = useState("Germany");

  const handleFileChange = (e: any) => {
    const uploadedFile = e.target.files[0];
    if (!uploadedFile) return;

    setFile(uploadedFile);

    const reader = new FileReader();
    reader.onload = () => {
      setFileContent(reader.result as string);
    };
    reader.readAsText(uploadedFile);
  };

  const goToAnalyze = () => {
    if (!file) return;
    sessionStorage.setItem("passportText", fileContent);
    router.push(`/analyze?country=${country}`);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-[420px]">

        <h1 className="text-3xl font-bold text-center mb-2">VisaVerse AI</h1>
        <p className="text-center text-gray-500 mb-6">AI-powered visa document risk checker</p>

        {/* Country Selector */}
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full mb-4 p-3 border rounded-xl"
        >
          <option>Germany</option>
          <option>Canada</option>
          <option>United States</option>
        </select>

        {/* Upload Box */}
        <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-xl p-6 cursor-pointer hover:border-black transition">
          <input type="file" className="hidden" onChange={handleFileChange} />
          <span className="text-gray-600">
            {file ? file.name : "Click to upload passport / visa document"}
          </span>
        </label>

        {/* Analyze Button */}
        <button
          disabled={!file}
          onClick={goToAnalyze}
          className={`w-full mt-6 py-3 rounded-xl text-white font-semibold ${
            file ? "bg-black" : "bg-gray-300 cursor-not-allowed"
          }`}
        >
          Analyze Document
        </button>    
              </div>
    </main>
  );
}
