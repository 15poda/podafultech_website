// Dedicated configuration for Systeme.io marketing sync.
// Replace placeholder environment variable names with the real field IDs from your Systeme.io account.
const readSetting = (primaryName: string, fallbackName?: string) => {
  return process.env[primaryName] || (fallbackName ? process.env[fallbackName] : "") || "";
};

export const systemeConfig = {
  apiKey: process.env.SYSTEME_IO_API_KEY || "",
  baseUrl: process.env.SYSTEME_IO_BASE_URL || "https://api.systeme.io/api",
  tagId: process.env.SYSTEME_IO_TAG_ID || "",
  customFieldIds: {
    inventoryScore: readSetting("SYSTEME_IO_CUSTOM_FIELD_INVENTORY_SCORE_ID", "SYSTEME_IO_CUSTOM_FIELD_INVENTORY_SCORE"),
    inventoryAccuracy: readSetting("SYSTEME_IO_CUSTOM_FIELD_INVENTORY_ACCURACY_ID", "SYSTEME_IO_CUSTOM_FIELD_INVENTORY_ACCURACY"),
    operationalEfficiency: readSetting("SYSTEME_IO_CUSTOM_FIELD_OPERATIONAL_EFFICIENCY_ID", "SYSTEME_IO_CUSTOM_FIELD_OPERATIONAL_EFFICIENCY"),
    growthComplexity: readSetting("SYSTEME_IO_CUSTOM_FIELD_GROWTH_COMPLEXITY_ID", "SYSTEME_IO_CUSTOM_FIELD_GROWTH_COMPLEXITY"),
    automation: readSetting("SYSTEME_IO_CUSTOM_FIELD_AUTOMATION_ID", "SYSTEME_IO_CUSTOM_FIELD_AUTOMATION"),
    businessMaturity: readSetting("SYSTEME_IO_CUSTOM_FIELD_BUSINESS_MATURITY_ID", "SYSTEME_IO_CUSTOM_FIELD_BUSINESS_MATURITY"),
    urgency: readSetting("SYSTEME_IO_CUSTOM_FIELD_URGENCY_ID", "SYSTEME_IO_CUSTOM_FIELD_URGENCY"),
    currentInventoryMethod: readSetting("SYSTEME_IO_CUSTOM_FIELD_CURRENT_INVENTORY_METHOD_ID", "SYSTEME_IO_CUSTOM_FIELD_CURRENT_INVENTORY_METHOD"),
    industry: readSetting("SYSTEME_IO_CUSTOM_FIELD_INDUSTRY_ID", "SYSTEME_IO_CUSTOM_FIELD_INDUSTRY"),
    employees: readSetting("SYSTEME_IO_CUSTOM_FIELD_EMPLOYEES_ID", "SYSTEME_IO_CUSTOM_FIELD_EMPLOYEES"),
    weakestCategory: readSetting("SYSTEME_IO_CUSTOM_FIELD_WEAKEST_CATEGORY_ID", "SYSTEME_IO_CUSTOM_FIELD_WEAKEST_CATEGORY"),
    recommendedSoftware: readSetting("SYSTEME_IO_CUSTOM_FIELD_RECOMMENDED_SOFTWARE_ID", "SYSTEME_IO_CUSTOM_FIELD_RECOMMENDED_SOFTWARE"),
    consultationRecommended: readSetting("SYSTEME_IO_CUSTOM_FIELD_CONSULTATION_RECOMMENDED_ID", "SYSTEME_IO_CUSTOM_FIELD_CONSULTATION_RECOMMENDED"),
  },
};
