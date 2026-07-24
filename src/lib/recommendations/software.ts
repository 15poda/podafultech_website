import { RecommendationInput, SoftwareRecommendation } from "./types";

const softwareRules = [
  {
    name: "Cin7",
    reason: "Better suited for larger inventory operations and multi-channel businesses.",
    idealFor: "Larger teams and multi-channel operations",
    website: "https://www.cin7.com/",
    buttonLabel: "Explore Cin7",
    match: (input: RecommendationInput) => {
      const employeeCount = parseEmployeeCount(input.answers.employees as string | undefined);
      const skuCount = parseSkuCount(input.answers.skuCount as string | undefined);
      return employeeCount > 50 || skuCount > 1000;
    },
  },
  {
    name: "Katana",
    reason: "Built specifically for manufacturing businesses needing production planning, inventory management and Bills of Materials.",
    idealFor: "Manufacturers, Producers, Workshops",
    website: "https://katanamrp.com/",
    buttonLabel: "Explore Katana",
    match: (input: RecommendationInput) => {
      return (input.answers.industry === "Manufacturing") ||
        (input.answers.industry === "Ecommerce" && input.answers.manufacturingWorkflows === "Yes");
    },
  },
  {
    name: "inFlow Inventory",
    reason: "Strong inventory control for distributors and wholesalers.",
    idealFor: "Wholesale, Distribution",
    website: "https://www.inflowinventory.com/",
    buttonLabel: "Explore inFlow",
    match: (input: RecommendationInput) => input.answers.industry === "Wholesale",
  },
  {
    name: "Zoho Inventory",
    reason: "Well suited for growing retailers managing products across sales channels.",
    idealFor: "Retail stores",
    website: "https://www.zoho.com/inventory/",
    buttonLabel: "Explore Zoho Inventory",
    match: (input: RecommendationInput) => input.answers.industry === "Retail",
  },
];

const parseEmployeeCount = (value?: string) => {
  if (!value) return 0;
  if (value.includes("100+")) return 101;
  const parsed = Number(value.split("-")[0]);
  return Number.isNaN(parsed) ? 0 : parsed;
};

const parseSkuCount = (value?: string) => {
  if (!value) return 0;
  if (value.includes("1000+")) return 1001;
  const parsed = Number(value.split("-")[0].replace(/<|\+/g, ""));
  return Number.isNaN(parsed) ? 0 : parsed;
};

export function determineSoftwareRecommendation(input: RecommendationInput): SoftwareRecommendation | null {
  if (input.overallScore < 41) {
    return null;
  }

  const match = softwareRules.find((rule) => rule.match(input));
  return match || null;
}
