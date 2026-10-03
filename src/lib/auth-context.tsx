"use client";

import { createContext, useContext, useEffect, useState } from "react";

type User = { email: string; name?: string } | null;

type AuthContextType = {
  user: User;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  signUp: (email: string, password: string, name?: string) => Promise<{ ok: boolean; error?: string }>;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

const STORAGE_KEY = "ai-countant-auth";
const USERS_KEY = "ai-countant-users";

type StoredUser = { email: string; name?: string; password: string };

function loadUsers(): StoredUser[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? (JSON.parse(raw) as StoredUser[]) : [];
  } catch {
    return [];
  }
}

function saveUsers(users: StoredUser[]) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        setUser(parsed);
      }
    } catch {}
    setLoading(false);
  }, []);

  const signIn: AuthContextType["signIn"] = async (email, password) => {
    const users = loadUsers();
    const found = users.find(
      (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
    );
    if (!found) return { ok: false, error: "Invalid email or password." };
    const u = { email: found.email, name: found.name };
    setUser(u);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
    return { ok: true };
  };

  const signUp: AuthContextType["signUp"] = async (email, password, name) => {
    if (!email || !password) {
      return { ok: false, error: "Email and password are required." };
    }
    if (password.length < 6) {
      return { ok: false, error: "Password must be at least 6 characters." };
    }
    const users = loadUsers();
    if (
      users.some((u) => u.email.toLowerCase() === email.toLowerCase())
    ) {
      return { ok: false, error: "Account already exists. Please log in." };
    }
    const next = [...users, { email, name, password }];
    saveUsers(next);
    const u = { email, name };
    setUser(u);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(u));
    return { ok: true };
  };

  const signOut = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}