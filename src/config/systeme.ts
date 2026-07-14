// Dedicated configuration for Systeme.io marketing sync.
// Replace placeholder environment variable names with the real field IDs from your Systeme.io account.
const readSetting = (primaryName: string, fallbackName?: string) => {
  return process.env[primaryName] || (fallbackName ? process.env[fallbackName] : "") || "";
};

export const systemeConfig = {
  apiKey: process.env.SYSTEME_IO_API_KEY || "",
  baseUrl: process.env.SYSTEME_IO_BASE_URL || "https://api.systeme.io/api",
  tagId: process.env.SYSTEME_IO_TAG_ID || "",
  fieldSlugs: {
    inventoryScore: "inventory_score",
    inventoryAccuracy: "inventory_accuracy",
    operationalEfficiency: "operational_efficiency",
    growthComplexity: "growth_complexity",
    automation: "automation",
    currentInventoryMethod: "current_inventory_method",
    industry: "industry",
    employees: "employees",
    weakestCategory: "weakest_category",
    recommendedSoftware: "recommended_software",
  },
};
