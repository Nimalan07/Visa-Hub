"use client";

import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

function AnalyzeContent() {
  const params = useSearchParams();
  const country = params.get("country") || "Germany";

  const [riskLevel, setRiskLevel] = useState("LOW");
  const [issues, setIssues] = useState<string[]>([]);
  const [explanation, setExplanation] = useState("");

  useEffect(() => {
    const text = sessionStorage.getItem("passportText") || "";
    const problems: string[] = [];

    const expiryMatch = text.match(/Date of Expiry:\s*(\d{2}-\d{2}-\d{4})/);
    if (expiryMatch) {
      const expiryDate = new Date(expiryMatch[1].split("-").reverse().join("-"));
      const today = new Date();
      const diffMonths =
        (expiryDate.getFullYear() - today.getFullYear()) * 12 +
        (expiryDate.getMonth() - today.getMonth());

      if (diffMonths < 6) {
        problems.push("Passport expires in less than 6 months");
      }
    } else {
      problems.push("Expiry date not found");
    }

    if (!text.match(/\d{2}-\d{2}-\d{4}/)) {
      problems.push(`Invalid date format for ${country} visa`);
    }

    if (problems.length > 0) {
      setRiskLevel("HIGH");
      setIssues(problems);
      setExplanation(
        `${country} requires a passport valid for at least 6 months and proper date formats. Please correct the issues before applying.`
      );
    } else {
      setRiskLevel("LOW");
      setIssues(["No critical issues found"]);
      setExplanation(`All ${country} visa requirements are satisfied.`);
    }
  }, [country]);

  return (
    <div className="p-10 max-w-xl mx-auto bg-white shadow rounded">
      <h2 className="text-2xl font-bold">Document Risk Analysis</h2>

      <p className="text-gray-500 mt-2">
        Country Rules Applied: {country} (Demo)
      </p>

      <p className="mt-4">
        <strong>Risk Level:</strong>{" "}
        <span
          className={`px-3 py-1 rounded-full font-semibold ${
            riskLevel === "HIGH"
              ? "bg-red-600 text-white"
              : "bg-green-500 text-white"
          }`}
        >
          {riskLevel}
        </span>
      </p>

      <ul className="list-disc ml-6 mt-4">
        {issues.map((i, idx) => (
          <li key={idx}>{i}</li>
        ))}
      </ul>

      <div className="mt-6 bg-gray-100 p-4 rounded">
        <strong>AI Explanation:</strong>
        <p>{explanation}</p>
      </div>
    </div>
  );
}

export default function AnalyzePage() {
  return (
    <Suspense fallback={<p className="text-center mt-10">Analyzing document...</p>}>
      <AnalyzeContent />
    </Suspense>
  );
}
