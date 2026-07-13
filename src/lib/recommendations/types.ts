export interface RecommendationInput<TAnswers = Record<string, unknown>> {
  overallScore: number;
  categoryScores: Record<string, number>;
  answers: TAnswers;
}

export interface RecommendationResult {
  maturityLevel: "healthy" | "emerging" | "risk" | "bottleneck" | "critical";
  maturityTitle: string;
  maturityDescription: string;
  urgency: "Low" | "Medium" | "High" | "Very High" | "Critical";
  actionPlan: string[];
  softwareRecommendation: SoftwareRecommendation | null;
  consultationRecommendation: ConsultationRecommendation | null;
}

export interface SoftwareRecommendation {
  name: string;
  reason: string;
  idealFor: string;
  website: string;
  buttonLabel: string;
}

export interface ConsultationRecommendation {
  title: string;
  description: string;
  cta: string;
  ctaUrl: string;
}
