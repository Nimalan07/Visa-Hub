"use client";
import { useEffect, useState } from "react";

export default function Analyze() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:8000/analyze?filename=test.pdf", {
      method: "POST",
    })
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <p>Analyzing...</p>;

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Risk: {data.risk_level}</h2>
      <p>Score: {data.risk_score}</p>

      <h3 className="mt-4 font-semibold">Issues:</h3>
      <ul>
        {data.issues.map((i: string, idx: number) => (
          <li key={idx}>❌ {i}</li>
        ))}
      </ul>

      <h3 className="mt-4 font-semibold">AI Explanation:</h3>
      <p>{data.explanation}</p>
    </div>
  );
}
