import admin from "firebase-admin";

let app: admin.app.App | undefined;

function initFirestore() {
  if (app) return admin.firestore();

  const projectId = process.env.FIREBASE_PROJECT_ID;
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
  let privateKey = process.env.FIREBASE_PRIVATE_KEY;

  if (!projectId || !clientEmail || !privateKey) {
    throw new Error(
      "Missing Firebase service account environment variables. Set FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY."
    );
  }

  // private key may contain escaped newlines
  privateKey = privateKey.replace(/\\n/g, "\n");

  app = admin.initializeApp({
    credential: admin.credential.cert({
      projectId,
      clientEmail,
      privateKey,
    } as any),
  });

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

export async function updateAssessment(id: string, data: any) {
  const db = initFirestore();
  const docRef = db.collection("inventoryAssessments").doc(id);
  await docRef.set({
    ...data,
  }, { merge: true });
  return id;
}
