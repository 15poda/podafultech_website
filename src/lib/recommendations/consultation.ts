import { RecommendationInput, ConsultationRecommendation } from "./types";

const consultationTriggers = [
  (input: RecommendationInput) => input.overallScore >= 61,
  (input: RecommendationInput) => Array.isArray(input.answers.salesChannels) && input.answers.salesChannels.includes("Warehouse"),
  (input: RecommendationInput) => {
    const systems = input.answers.systemsContainingInventory;
    return systems === "3" || systems === "4+";
  },
  (input: RecommendationInput) => {
    const stockouts = input.answers.stockouts;
    return stockouts === "Monthly" || stockouts === "Weekly";
  },
  (input: RecommendationInput) => input.answers.managerVisibility === "No",
  (input: RecommendationInput) => {
    const po = input.answers.purchaseOrdersBy;
    return po === "Email" || po === "Phone" || po === "WhatsApp";
  },
];

export function determineConsultationRecommendation(input: RecommendationInput): ConsultationRecommendation | null {
  const shouldRecommend = consultationTriggers.some((trigger) => trigger(input));
  if (!shouldRecommend) return null;

  return {
    title: "Need More Than Software?",
    description:
      "Software solves many inventory challenges. Growing businesses often need:\n• ERP integrations\n• Warehouse dashboards\n• Barcode systems\n• Supplier portals\n• Purchasing automation\n• Custom workflows",
    cta: "Book an Operations Systems Review",
    ctaUrl: "https://calendly.com/podasecondarybiz/book-an-operations-review",
  };
}
