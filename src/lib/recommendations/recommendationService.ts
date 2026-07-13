import { RecommendationInput, RecommendationResult } from "./types";
import { determineSoftwareRecommendation } from "./software";
import { determineConsultationRecommendation } from "./consultation";
import { generateMaturityRecommendation } from "./maturity";

/**
 * Recommendation service centralizes business interpretation logic.
 *
 * Future assessments like Payroll, CRM, HR or AP Automation can reuse this
 * pattern by implementing new rule modules and feeding the same shape of
 * recommendation input.
 */
export function generateRecommendations(input: RecommendationInput): RecommendationResult {
  const maturity = generateMaturityRecommendation(input);
  const softwareRecommendation = determineSoftwareRecommendation(input);
  const consultationRecommendation = determineConsultationRecommendation(input);

  return {
    maturityLevel: maturity.maturityLevel,
    maturityTitle: maturity.maturityTitle,
    maturityDescription: maturity.maturityDescription,
    urgency: maturity.urgency,
    actionPlan: maturity.actionPlan,
    softwareRecommendation,
    consultationRecommendation,
  };
}
