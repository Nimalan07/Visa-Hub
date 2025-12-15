import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json({
    risk: "High",
    issues: [
      "Passport expires in 5 months",
      "Name mismatch",
      "Invalid date format"
    ],
    suggestion:
      "Germany requires 6 months validity. Renew passport before applying."
  });
}
