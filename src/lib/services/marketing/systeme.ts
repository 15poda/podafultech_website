import { systemeConfig } from "@/config/systeme";
import { mapAssessmentToSystemeContact } from "./systemeMapper";

export interface SystemeContactPayload {
  email?: string;
  fields: Array<{
    slug: string;
    value?: string;
  }>;
}

// Configure the placeholder field IDs in the environment before enabling sync.
// The assessment flow will continue to work even if the API key or field mappings are not yet set.

export async function syncContactToSysteme(assessment: Record<string, any>) {
  if (!systemeConfig.apiKey) {
    console.warn("Systeme.io API key is not configured. Skipping contact sync.");
    return { ok: true, skipped: true, reason: "missing-config" };
  }

  const body = mapAssessmentToSystemeContact(assessment);

  if (process.env.NODE_ENV !== "production") {
    console.info("[Systeme.io] payload", JSON.stringify(body, null, 2));
  }

  const headers = {
    "X-Api-Key": systemeConfig.apiKey,
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(`${systemeConfig.baseUrl}/contacts`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });

    const payload = await response.text();

    if (process.env.NODE_ENV !== "production") {
      console.info("[Systeme.io] status", response.status);
      console.info("[Systeme.io] response", payload);
    }

    if (!response.ok) {
      throw new Error(`Systeme.io request failed with ${response.status}: ${payload}`);
    }

    return { ok: true, skipped: false, response: payload };
  } catch (error) {
    console.error("Systeme.io contact sync failed", error);
    return { ok: false, skipped: false, error: error instanceof Error ? error.message : String(error) };
  }
}
