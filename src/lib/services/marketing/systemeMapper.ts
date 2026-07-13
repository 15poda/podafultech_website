import { systemeConfig } from "@/config/systeme";

function normalizeValue(value: unknown) {
  if (value === undefined || value === null || value === "") return undefined;
  if (typeof value === "boolean") return value ? "true" : "false";
  return String(value);
}

export function mapAssessmentToSystemeContact(assessment: Record<string, any>) {
  const contact = assessment.contact ?? {};
  const answers = assessment.answers ?? {};
  const results = assessment.results ?? {};
  const categoryScores = results.categoryScores ?? assessment.categoryScores ?? {};
  const recommendations = assessment.recommendations ?? {};
  const overallScore = assessment.overallScore ?? results.overallScore ?? null;
  const weakestCategory = assessment.weakestCategory ?? results.biggestWeakArea ?? null;

  const customFields = Object.fromEntries(
    Object.entries({
      [systemeConfig.customFieldIds.inventoryScore]: normalizeValue(overallScore),
      [systemeConfig.customFieldIds.inventoryAccuracy]: normalizeValue(categoryScores.inventoryAccuracy),
      [systemeConfig.customFieldIds.operationalEfficiency]: normalizeValue(categoryScores.operationalEfficiency),
      [systemeConfig.customFieldIds.growthComplexity]: normalizeValue(categoryScores.growthComplexity),
      [systemeConfig.customFieldIds.automation]: normalizeValue(categoryScores.automation),
      [systemeConfig.customFieldIds.businessMaturity]: normalizeValue(recommendations.maturityTitle ?? assessment.businessMaturity),
      [systemeConfig.customFieldIds.urgency]: normalizeValue(recommendations.urgency ?? assessment.urgency),
      [systemeConfig.customFieldIds.currentInventoryMethod]: normalizeValue(answers.currentTracking ?? assessment.inventoryMethod),
      [systemeConfig.customFieldIds.industry]: normalizeValue(answers.industry ?? assessment.industry),
      [systemeConfig.customFieldIds.employees]: normalizeValue(answers.employees ?? assessment.employees),
      [systemeConfig.customFieldIds.weakestCategory]: normalizeValue(weakestCategory),
      [systemeConfig.customFieldIds.recommendedSoftware]: normalizeValue(recommendations.softwareRecommendation?.name ?? assessment.recommendedSoftware),
      [systemeConfig.customFieldIds.consultationRecommended]: normalizeValue(
        recommendations.consultationRecommendation ? true : assessment.consultationRecommended
      ),
    }).filter(([, value]) => value !== undefined)
  );

  return {
    email: normalizeValue(contact.email ?? assessment.email) || undefined,
    firstName: normalizeValue(contact.firstName ?? assessment.firstName) || undefined,
    company: normalizeValue(contact.company ?? assessment.company) || undefined,
    tags: systemeConfig.tagId ? [systemeConfig.tagId] : undefined,
    customFields: Object.keys(customFields).length > 0 ? customFields : undefined,
  };
}
