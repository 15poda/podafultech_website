import { NextResponse } from "next/server";
import { updateAssessment } from "@/lib/services/firestore.server";
import { sendEmailViaResend } from "@/lib/services/resend.server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id, firstName, email, company, answers, results } = body;
    if (!id || !email) {
      return NextResponse.json({ error: "Missing id or email" }, { status: 400 });
    }

    const from = process.env.RESEND_FROM || "no-reply@example.com";

    // Compose a simple HTML report
    const topWeaknesses = Object.entries(results.categoryScores)
      .sort((a: any, b: any) => a[1] - b[1])
      .slice(0, 3)
      .map(([k, v]) => `<li><strong>${k}:</strong> ${v}/100</li>`)
      .join("");

    const categoryRows = Object.entries(results.categoryScores)
      .map(([k, v]) => `<tr><td style=\"padding:6px 8px;border:1px solid #ddd\">${k}</td><td style=\"padding:6px 8px;border:1px solid #ddd\">${v}/100</td></tr>`)
      .join("");

    const html = `
      <div style="font-family:Inter,system-ui,Arial,sans-serif;color:#111">
        <h2>Inventory Operations Report</h2>
        <p>Hi ${firstName || "there"},</p>
        <p>Here is your inventory assessment report.</p>
        <h3>Overall score: ${results.overallScore}/100</h3>
        <h4>Top weaknesses</h4>
        <ol>${topWeaknesses}</ol>
        <h4>Category scores</h4>
        <table style=\"border-collapse:collapse;\">${categoryRows}</table>
        <h4>Submitted answers</h4>
        <pre style=\"white-space:pre-wrap;background:#f7f7f7;padding:8px;border-radius:6px\">${JSON.stringify(answers,null,2)}</pre>
        <p>Company: ${company || "n/a"}</p>
        <p style=\"font-size:12px;color:#666\">This is an automated message from your assessment tool.</p>
      </div>
    `;

    // Send email via Resend
    try {
      await sendEmailViaResend({ to: email, subject: "Your Inventory Operations Report", html, from });
    } catch (sendErr: any) {
      // mark in firestore that email failed
      await updateAssessment(id, {
        emailStatus: "failed",
        emailError: String(sendErr?.message || sendErr),
        updatedAt: new Date().toISOString(),
      });
      return NextResponse.json({ error: "Failed to send email", details: String(sendErr) }, { status: 502 });
    }

    // update firestore with email info
    await updateAssessment(id, {
      contact: { firstName, email, company },
      emailStatus: "sent",
      sentAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message || String(err) }, { status: 500 });
  }
}
