export interface ContactPayload {
  firstName: string;
  email: string;
  company?: string;
  inventoryScore?: number | null;
  businessMaturity?: string | null;
  urgency?: string | null;
  industry?: string | null;
  employees?: string | null;
  inventoryMethod?: string | null;
  weakestCategory?: string | null;
  recommendedSoftware?: string | null;
  consultationRecommended?: boolean | null;
}
