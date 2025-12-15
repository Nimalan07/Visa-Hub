export default function AnalyzePage() {
  return (
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4">
          Document Risk Analysis
        </h2>

        <p className="mb-2">
          <strong>Risk Level:</strong>{" "}
          <span className="text-red-600 font-semibold">HIGH</span>
        </p>

        <ul className="list-disc ml-6 text-gray-700">
          <li>Passport expires in 5 months</li>
          <li>Name mismatch between passport and visa form</li>
          <li>Date format invalid for Germany visa</li>
        </ul>

        <div className="mt-6 bg-green-100 p-4 rounded">
          <strong>AI Suggestion:</strong>
          <p>
            Germany requires 6 months passport validity. Renew before applying.
          </p>
        </div>
      </div>
    </main>
  );
}
