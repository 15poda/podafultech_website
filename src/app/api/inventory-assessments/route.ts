import { NextResponse } from "next/server";
import { saveAssessment } from "@/lib/services/firestore.server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // body should contain answers, results and a few metadata fields
    const id = await saveAssessment(body);
    return NextResponse.json({ id }, { status: 201 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message || String(err) }, { status: 500 });
  }
}
