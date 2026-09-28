import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import {
  addDoc,
  collection,
  getDocs,
  query,
  serverTimestamp,
  where,
} from "firebase/firestore";
import { getDb } from "./firebase";

export type UserRole = "Credit Officer" | "Credit Manager";

export type SessionUser = {
  id: string;
  fullName: string;
  organisationName: string;
  email: string;
  role: UserRole;
};

type AuthContextValue = {
  user: SessionUser | null;
  ready: boolean;
  register: (input: {
    fullName: string;
    organisationName: string;
    email: string;
    password: string;
    role: UserRole;
  }) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

const STORAGE_KEY = "creditnarrate.session";

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setUser(JSON.parse(raw) as SessionUser);
    } catch {
      /* ignore */
    }
    setReady(true);
  }, []);

  function persist(next: SessionUser | null) {
    setUser(next);
    if (next) localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    else localStorage.removeItem(STORAGE_KEY);
  }

  const value: AuthContextValue = {
    user,
    ready,
    async register(input) {
      const db = await getDb();
      const users = collection(db, "users");
      const existing = await getDocs(
        query(users, where("email", "==", input.email.toLowerCase())),
      );
      if (!existing.empty) throw new Error("An account with this email already exists.");

      const ref = await addDoc(users, {
        fullName: input.fullName,
        organisationName: input.organisationName,
        email: input.email.toLowerCase(),
        password: input.password,
        role: input.role,
        createdAt: serverTimestamp(),
      });

      persist({
        id: ref.id,
        fullName: input.fullName,
        organisationName: input.organisationName,
        email: input.email.toLowerCase(),
        role: input.role,
      });
    },
    async login(email, password) {
      const db = await getDb();
      const snap = await getDocs(
        query(collection(db, "users"), where("email", "==", email.toLowerCase())),
      );
      if (snap.empty) throw new Error("Invalid email or password.");
      const doc = snap.docs[0];
      if (!doc) throw new Error("Invalid email or password.");
      const data = doc.data() as {
        fullName: string;
        organisationName: string;
        email: string;
        password: string;
        role: UserRole;
      };
      if (data.password !== password) throw new Error("Invalid email or password.");
      persist({
        id: doc.id,
        fullName: data.fullName,
        organisationName: data.organisationName,
        email: data.email,
        role: data.role,
      });
    },
    logout() {
      persist(null);
    },
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
