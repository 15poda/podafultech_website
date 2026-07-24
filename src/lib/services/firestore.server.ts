import admin from "firebase-admin";

export interface InventoryAssessmentDocument {
  id: string;
  answers?: unknown;
  results?: {
    overallScore?: number;
    categoryScores?: Record<string, number>;
    [key: string]: unknown;
  };
  [key: string]: unknown;
}

let app: admin.app.App | undefined;

function initFirestore() {
  if (app) {
    return admin.firestore();
  }

  try {
    app = admin.app();
  } catch {
    // App Hosting automatically provides credentials
    app = admin.initializeApp();
  }

  return admin.firestore();
}

export async function saveAssessment(data: any) {
  const db = initFirestore();
  const col = db.collection("inventoryAssessments");
  const docRef = await col.add({
    ...data,
    timestamp: admin.firestore.FieldValue.serverTimestamp(),
  });
  return docRef.id;
}

export async function getAssessment(id: string): Promise<InventoryAssessmentDocument | null> {
  const db = initFirestore();
  const doc = await db.collection("inventoryAssessments").doc(id).get();
  if (!doc.exists) return null;
  const data = doc.data() ?? {};
  return { id: doc.id, ...data } as InventoryAssessmentDocument;
}

export async function updateAssessment(id: string, data: any) {
  const db = initFirestore();
  const docRef = db.collection("inventoryAssessments").doc(id);
  await docRef.set({
    ...data,
  }, { merge: true });
  return id;
}
