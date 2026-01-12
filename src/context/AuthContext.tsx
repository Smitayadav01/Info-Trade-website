import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

/* ================= TYPES ================= */

interface User {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  company?: string;
}

interface SignupData {
  name: string;
  email: string;
  password: string;
  company?: string;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  setToken: (token: string | null) => void;
  login: (email: string, password: string) => Promise<{ user: User; token: string }>;
  signup: (data: SignupData) => Promise<{ user: User; token: string }>;
  logout: () => void;
  authFetch: (url: string, options?: RequestInit) => Promise<Response>;
  isAuthenticated: boolean;
  isAdmin: boolean;
}

/* ================= CONTEXT ================= */

const AuthContext = createContext<AuthContextType | undefined>(undefined);

/* ================= PROVIDER ================= */

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  /* ===== Restore auth on refresh ===== */
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
      try {
        setUser(JSON.parse(storedUser));
        setToken(storedToken);
      } catch (error) {
        console.error("Failed to restore auth state", error);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
      }
    }

    setLoading(false);
  }, []);

  /* ================= AUTH ACTIONS ================= */

  const login = async (email: string, password: string) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/auth/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Login failed");
    }

    setUser(data.data.user);
    setToken(data.data.token);

    localStorage.setItem("user", JSON.stringify(data.data.user));
    localStorage.setItem("token", data.data.token);

    return data.data;
  };

  const signup = async (signupData: SignupData) => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/auth/signup`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signupData),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Signup failed");
    }

    setUser(data.data.user);
    setToken(data.data.token);

    localStorage.setItem("user", JSON.stringify(data.data.user));
    localStorage.setItem("token", data.data.token);

    return data.data;
  };

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }, []);

  /* ================= AUTH FETCH ================= */

  const authFetch = useCallback(
    async (url: string, options: RequestInit = {}) => {
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
        ...(options.headers as Record<string, string>),
      };

      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }

      const response = await fetch(url, {
        ...options,
        headers,
      });

      if (response.status === 401) {
        logout();
        throw new Error("Session expired. Please login again.");
      }

      return response;
    },
    [token, logout]
  );

  /* ================= CONTEXT VALUE ================= */

  const value: AuthContextType = {
    user,
    token,
    loading,
    setUser,
    setToken,
    login,
    signup,
    logout,
    authFetch,
    isAuthenticated: !!user && !!token,
    isAdmin: user?.role === "admin",
  };

  /* ================= LOADER ================= */

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
      </div>
    );
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

/* ================= HOOK ================= */

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
