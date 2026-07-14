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

  const fields = [
    { slug: systemeConfig.fieldSlugs.inventoryScore, value: normalizeValue(overallScore) },
    { slug: systemeConfig.fieldSlugs.inventoryAccuracy, value: normalizeValue(categoryScores.inventoryAccuracy) },
    { slug: systemeConfig.fieldSlugs.operationalEfficiency, value: normalizeValue(categoryScores.operationalEfficiency) },
    { slug: systemeConfig.fieldSlugs.growthComplexity, value: normalizeValue(categoryScores.growthComplexity) },
    { slug: systemeConfig.fieldSlugs.automation, value: normalizeValue(categoryScores.automation) },
    { slug: systemeConfig.fieldSlugs.currentInventoryMethod, value: normalizeValue(answers.currentTracking ?? assessment.inventoryMethod) },
    { slug: systemeConfig.fieldSlugs.industry, value: normalizeValue(answers.industry ?? assessment.industry) },
    { slug: systemeConfig.fieldSlugs.employees, value: normalizeValue(answers.employees ?? assessment.employees) },
    { slug: systemeConfig.fieldSlugs.weakestCategory, value: normalizeValue(weakestCategory) },
    { slug: systemeConfig.fieldSlugs.recommendedSoftware, value: normalizeValue(recommendations.softwareRecommendation?.name ?? assessment.recommendedSoftware) },
  ].filter((field) => Boolean(field.slug) && field.value !== undefined);

  const email = normalizeValue(contact.email ?? assessment.email ?? assessment.contact?.email);

  return {
    email,
    fields,
  };
}
