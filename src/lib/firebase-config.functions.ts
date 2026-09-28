import { createServerFn } from "@tanstack/react-start";

export const getFirebaseConfig = createServerFn({ method: "GET" }).handler(async () => {
  const env = typeof process !== "undefined" && process.env ? process.env : {};
  const metaEnv = typeof import.meta !== "undefined" && import.meta.env ? import.meta.env : {};

  return {
    apiKey: (
      env["VITE_FIREBASE_API_KEY"] ||
      env["GOOGLE_API_KEY"] ||
      env["FIREBASE_API_KEY"] ||
      metaEnv["VITE_FIREBASE_API_KEY"] ||
      metaEnv["VITE_GOOGLE_API_KEY"] ||
      ""
    ).trim(),
    authDomain: (
      env["VITE_FIREBASE_AUTH_DOMAIN"] ||
      metaEnv["VITE_FIREBASE_AUTH_DOMAIN"] ||
      ""
    ).trim(),
    projectId: (
      env["VITE_FIREBASE_PROJECT_ID"] ||
      metaEnv["VITE_FIREBASE_PROJECT_ID"] ||
      ""
    ).trim(),
    storageBucket: (
      env["VITE_FIREBASE_STORAGE_BUCKET"] ||
      metaEnv["VITE_FIREBASE_STORAGE_BUCKET"] ||
      ""
    ).trim(),
    messagingSenderId: (
      env["VITE_FIREBASE_MESSAGING_SENDER_ID"] ||
      metaEnv["VITE_FIREBASE_MESSAGING_SENDER_ID"] ||
      ""
    ).trim(),
    appId: (
      env["VITE_FIREBASE_APP_ID"] ||
      metaEnv["VITE_FIREBASE_APP_ID"] ||
      ""
    ).trim(),
    measurementId: (
      env["VITE_FIREBASE_MEASUREMENT_ID"] ||
      metaEnv["VITE_FIREBASE_MEASUREMENT_ID"] ||
      ""
    ).trim(),
  };
});
