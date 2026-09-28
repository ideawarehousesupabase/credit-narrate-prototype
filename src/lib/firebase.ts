import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getFirebaseConfig } from "./firebase-config.functions";

let dbPromise: Promise<Firestore> | null = null;

function getClientConfig() {
  if (typeof import.meta !== "undefined" && import.meta.env) {
    const apiKey = (import.meta.env.VITE_FIREBASE_API_KEY || import.meta.env.VITE_GOOGLE_API_KEY || "").trim();
    if (apiKey) {
      return {
        apiKey,
        authDomain: (import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "").trim(),
        projectId: (import.meta.env.VITE_FIREBASE_PROJECT_ID || "").trim(),
        storageBucket: (import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "").trim(),
        messagingSenderId: (import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "").trim(),
        appId: (import.meta.env.VITE_FIREBASE_APP_ID || "").trim(),
        measurementId: (import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "").trim(),
      };
    }
  }
  return null;
}

export function getDb(): Promise<Firestore> {
  if (!dbPromise) {
    dbPromise = (async () => {
      let config = getClientConfig();
      if (!config?.apiKey) {
        config = await getFirebaseConfig().catch(() => null);
      }
      if (!config?.apiKey) {
        throw new Error("Firebase is not configured. Please restart your dev server (Ctrl+C then npm run dev) so Vite loads the new .env file.");
      }
      const app = getApps().length ? getApp() : initializeApp(config);
      return getFirestore(app);
    })().catch((e) => {
      dbPromise = null;
      throw e;
    });
  }
  return dbPromise;
}
