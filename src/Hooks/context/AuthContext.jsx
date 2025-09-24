import { createContext, useContext, useState, useEffect } from "react";
import Cookies from "js-cookie";
import mockAuthAPI from "@/api/mockAuthAPI";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check for existing session on initial load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authCookie = Cookies.get("auth");
        if (authCookie) {
          const userData = JSON.parse(authCookie);
          setUser(userData);
        }
      } catch (error) {
        console.error("Failed to parse auth cookie:", error);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (email, password) => {
    const response = await mockAuthAPI(email, password);

    if (response.success) {
      const userData = {
        id: response.user.id,
        email: response.user.email,
        name: response.user.name,
        role: response.user.role,
        token: response.token,
      };

      Cookies.set("auth", JSON.stringify(userData), {
        expires: 1,
        secure: true,
        sameSite: "strict",
      });

      setUser(userData);
      return userData;
    }

    throw new Error(response.message || "Login failed");
  };

  const logout = () => {
    console.log("Logout called"); // Debug log
    Cookies.remove("auth");
    setUser(null);
    window.location.href = "/";
  };

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
    isAgent: user?.role === "agent",
    isUser: user?.role === "user",
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
