export async function sendEmailViaResend({
  to,
  subject,
  html,
  from,
}: {
  to: string;
  subject: string;
  html: string;
  from: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("Missing RESEND_API_KEY env variable");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject,
      html,
    }),
  });

  const body = await res.json();
  if (!res.ok) {
    const err = new Error(`Resend error: ${JSON.stringify(body)}`);
    // @ts-ignore
    err.data = body;
    throw err;
  }
  return body;
}
