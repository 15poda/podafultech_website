import { RecommendationInput, RecommendationResult } from "./types";

const maturityBuckets: Array<{
  maxScore: number;
  maturityLevel: RecommendationResult["maturityLevel"];
  maturityTitle: string;
  maturityDescription: string;
  urgency: RecommendationResult["urgency"];
  actionPlan: string[];
  softwareRecommended: boolean;
  consultationRecommended: boolean;
  consultingOptional?: boolean;
}> = [
  {
    maxScore: 20,
    maturityLevel: "healthy",
    maturityTitle: "Healthy Foundation",
    maturityDescription: "Your inventory process currently supports your business well.",
    urgency: "Low",
    actionPlan: [
      "Document inventory procedures",
      "Continue regular stock counts",
      "Train staff",
      "Monitor business growth",
    ],
    softwareRecommended: false,
    consultationRecommended: false,
  },
  {
    maxScore: 40,
    maturityLevel: "emerging",
    maturityTitle: "Emerging Growing Pains",
    maturityDescription: "Your inventory process is beginning to show signs of strain.",
    urgency: "Medium",
    actionPlan: [
      "Standardize inventory processes",
      "Schedule cycle counts",
      "Reduce spreadsheet duplication",
      "Define reorder points",
    ],
    softwareRecommended: false,
    consultationRecommended: false,
  },
  {
    maxScore: 60,
    maturityLevel: "risk",
    maturityTitle: "Operational Risk",
    maturityDescription: "Inventory errors are beginning to affect business performance.",
    urgency: "High",
    actionPlan: [
      "Centralize inventory",
      "Improve visibility",
      "Reduce manual work",
      "Consider inventory software",
    ],
    softwareRecommended: true,
    consultationRecommended: false,
    consultingOptional: true,
  },
  {
    maxScore: 80,
    maturityLevel: "bottleneck",
    maturityTitle: "Operational Bottleneck",
    maturityDescription: "Manual inventory management is now limiting business growth.",
    urgency: "Very High",
    actionPlan: [
      "Move to dedicated inventory software",
      "Automate inventory updates",
      "Improve purchasing workflows",
      "Improve reporting",
    ],
    softwareRecommended: true,
    consultationRecommended: true,
  },
  {
    maxScore: 100,
    maturityLevel: "critical",
    maturityTitle: "Critical Business Risk",
    maturityDescription: "Your inventory process has become a strategic limitation.",
    urgency: "Critical",
    actionPlan: [
      "Implement inventory software immediately",
      "Review business workflows",
      "Improve automation",
      "Consider systems integration",
    ],
    softwareRecommended: true,
    consultationRecommended: true,
  },
];

export function generateMaturityRecommendation(input: RecommendationInput): Omit<RecommendationResult, "softwareRecommendation" | "consultationRecommendation"> & {
  softwareRecommended: boolean;
  consultationRecommended: boolean;
} {
  const bucket = maturityBuckets.find((bucket) => input.overallScore <= bucket.maxScore)!;
  return {
    maturityLevel: bucket.maturityLevel,
    maturityTitle: bucket.maturityTitle,
    maturityDescription: bucket.maturityDescription,
    urgency: bucket.urgency,
    actionPlan: bucket.actionPlan,
    softwareRecommended: bucket.softwareRecommended,
    consultationRecommended: bucket.consultationRecommended,
  };
}
