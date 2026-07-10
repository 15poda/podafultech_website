export type AssessmentAnswers = {
  industry?: string;
  employees?: string;
  skuCount?: string;
  salesChannels?: string[];
  currentTracking?: string;
  inventoryMismatch?: string;
  multipleEditors?: string;
  stockouts?: string;
  duplicatePurchases?: string;
  inventoryVisibility?: string;
  purchaseOrdersBy?: string;
  stockCountCadence?: string;
  reorderPoints?: string;
  hoursUpdatingInventory?: string;
  delayedOrders?: string;
  inventoryConfidence?: number;
  auditDuration?: string;
  managerVisibility?: string;
  systemsContainingInventory?: string;
  planningGrowth?: string;
  openingWarehouse?: string;
  planningEcommerce?: string;
  barcodeScanning?: string;
  manufacturingWorkflows?: string;
};

export type AssessmentResults = {
  overallScore: number;
  categoryScores: Record<string, number>;
  biggestWeakArea: string;
};

const clamp = (value: number) => Math.max(0, Math.min(100, Math.round(value)));

const average = (values: number[]) => {
  if (!values.length) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
};

export const calculateAssessmentResults = (answers: AssessmentAnswers): AssessmentResults => {
  const inventoryAccuracyScore = clamp(
    average([
      scoreByMap(answers.inventoryMismatch, {
        Never: 100,
        Sometimes: 70,
        Monthly: 50,
        Weekly: 30,
        Daily: 10,
      }),
      scoreByMap(answers.stockouts, {
        Never: 100,
        "Few times/year": 80,
        Monthly: 55,
        Weekly: 30,
      }),
      scoreByMap(answers.duplicatePurchases, {
        Never: 100,
        Once: 85,
        Several: 60,
        Frequently: 35,
      }),
      scoreByMap(answers.inventoryVisibility, {
        Always: 100,
        Sometimes: 55,
        No: 20,
      }),
      scoreByMap(answers.stockCountCadence, {
        Weekly: 90,
        Monthly: 70,
        Quarterly: 45,
        "Only when something goes wrong": 20,
      }),
      scoreByMap(answers.reorderPoints, {
        Yes: 100,
        Partially: 65,
        No: 20,
      }),
    ])
  );

  const operationalEfficiencyScore = clamp(
    average([
      scoreByMap(answers.hoursUpdatingInventory, {
        "0-2": 100,
        "3-5": 75,
        "6-10": 50,
        "10+": 25,
      }),
      scoreByMap(answers.delayedOrders, {
        Never: 100,
        Occasionally: 70,
        Often: 35,
      }),
      scoreByMap(answers.purchaseOrdersBy, {
        "Inventory Software": 100,
        Spreadsheet: 60,
        Email: 45,
        Phone: 25,
        WhatsApp: 20,
      }),
      scoreByMap(answers.auditDuration, {
        "<1 hour": 100,
        "Half day": 75,
        "One day": 45,
        "Several days": 20,
      }),
      scoreByMap(answers.multipleEditors, {
        Yes: 55,
        No: 100,
      }),
    ])
  );

  const visibilityScore = clamp(
    average([
      scoreByMap(answers.inventoryVisibility, {
        Always: 100,
        Sometimes: 60,
        No: 20,
      }),
      scoreByMap(answers.managerVisibility, {
        Yes: 100,
        Sometimes: 60,
        No: 20,
      }),
      scoreByMap(answers.systemsContainingInventory, {
        1: 100,
        2: 80,
        3: 55,
        "4+": 35,
      }),
    ])
  );

  const growthComplexityScore = clamp(
    average([
      scoreByMap(answers.planningGrowth, {
        No: 100,
        Yes: 65,
        Rapidly: 35,
      }),
      scoreByMap(answers.openingWarehouse, {
        Yes: 35,
        No: 100,
      }),
      scoreByMap(answers.planningEcommerce, {
        Yes: 35,
        No: 100,
      }),
      scoreByMap(answers.barcodeScanning, {
        Yes: 35,
        No: 100,
      }),
      scoreByMap(answers.manufacturingWorkflows, {
        Yes: 35,
        No: 100,
      }),
    ])
  );

  const automationScore = clamp(
    average([
      scoreByMap(answers.reorderPoints, {
        Yes: 100,
        Partially: 60,
        No: 20,
      }),
      scoreByMap(answers.currentTracking, {
        Notebook: 20,
        Excel: 35,
        "Google Sheets": 45,
        "Accounting Software": 70,
        "Inventory Software": 95,
        ERP: 100,
      }),
      scoreByMap(answers.purchaseOrdersBy, {
        "Inventory Software": 100,
        Spreadsheet: 60,
        Email: 45,
        Phone: 25,
        WhatsApp: 20,
      }),
    ])
  );

  const categoryScores = {
    "Inventory Accuracy": inventoryAccuracyScore,
    "Operational Efficiency": operationalEfficiencyScore,
    Visibility: visibilityScore,
    "Growth Complexity": growthComplexityScore,
    Automation: automationScore,
  };

  const overallScore = clamp(
    inventoryAccuracyScore * 0.3 +
      operationalEfficiencyScore * 0.25 +
      visibilityScore * 0.2 +
      growthComplexityScore * 0.15 +
      automationScore * 0.1
  );

  const biggestWeakArea = Object.entries(categoryScores).sort((a, b) => a[1] - b[1])[0][0];

  return {
    overallScore,
    categoryScores,
    biggestWeakArea,
  };
};

const scoreByMap = (value: string | string[] | number | undefined, mapping: Record<string, number>) => {
  if (typeof value === "number") {
    return mapping[String(value)] ?? 0;
  }

  if (Array.isArray(value)) {
    return value.length ? 100 : 0;
  }

  if (!value) {
    return 0;
  }

  return mapping[value] ?? 0;
};
