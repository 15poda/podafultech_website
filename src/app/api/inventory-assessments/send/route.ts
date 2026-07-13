import { NextResponse } from "next/server";
import { updateAssessment, getAssessment } from "@/lib/services/firestore.server";
import { sendEmailViaResend } from "@/lib/services/resend.server";
import { generateRecommendations } from "@/lib/recommendations/recommendationService";
import { syncContactToSysteme } from "@/lib/services/marketing";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id, firstName, email, company, answers, results } = body;
    if (!id || !email) {
      return NextResponse.json({ error: "Missing id or email" }, { status: 400 });
    }

    const assessmentDoc = await getAssessment(id);
    if (!assessmentDoc) {
      return NextResponse.json({ error: "Assessment not found" }, { status: 404 });
    }

    const recommendations = generateRecommendations({
      overallScore: assessmentDoc.results?.overallScore ?? results?.overallScore,
      categoryScores: assessmentDoc.results?.categoryScores ?? results?.categoryScores,
      answers: assessmentDoc.answers ?? answers,
    });

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
        <h4>Recommended next actions</h4>
        <ul style="padding-left:18px;">
          ${recommendations.actionPlan.map((item) => `<li style="margin-bottom:8px;">${item}</li>`).join("")}
        </ul>
        ${recommendations.softwareRecommendation ? `
          <h4>Software fit</h4>
          <p><strong>${recommendations.softwareRecommendation.name}</strong> — ${recommendations.softwareRecommendation.reason}</p>
          <p style="font-size:13px;color:#555">Ideal for ${recommendations.softwareRecommendation.idealFor}</p>
          <p><a href="${recommendations.softwareRecommendation.website}" style="color:#0b5fff;">${recommendations.softwareRecommendation.buttonLabel}</a></p>
        ` : ""}
        ${recommendations.consultationRecommendation ? `
          <h4>Consultation recommendation</h4>
          <p><strong>${recommendations.consultationRecommendation.title}</strong></p>
          <p>${recommendations.consultationRecommendation.description.replace(/\n/g, "<br />")}</p>
          <p><a href="${recommendations.consultationRecommendation.ctaUrl}" style="color:#0b5fff;">${recommendations.consultationRecommendation.cta}</a></p>
        ` : ""}

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

    const marketingResult = await syncContactToSysteme(assessmentDoc);
    if (!marketingResult.ok) {
      await updateAssessment(id, {
        marketingSyncStatus: "failed",
        marketingSyncError: marketingResult.error || "Unknown Systeme.io error",
        updatedAt: new Date().toISOString(),
      });
    } else {
      await updateAssessment(id, {
        marketingSyncStatus: marketingResult.skipped ? "skipped" : "synced",
        marketingSyncError: null,
        updatedAt: new Date().toISOString(),
      });
    }

    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ error: err.message || String(err) }, { status: 500 });
  }
}
