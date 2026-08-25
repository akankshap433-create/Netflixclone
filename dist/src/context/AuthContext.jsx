import React, { createContext, useContext, useState, useEffect } from "react";
import { StorageService } from "../services/storageService.js";
const AuthContext = /*#__PURE__*/createContext(null);
export function AuthProvider({
  children
}) {
  const [user, setUser] = useState(() => StorageService.getAuthUser());
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const login = (email, password) => {
    const newUser = {
      email,
      name: email.split("@")[0] || "User",
      loggedInAt: Date.now()
    };
    StorageService.setAuthUser(newUser);
    setUser(newUser);
    setIsAuthenticated(true);
    return true;
  };
  const logout = () => {
    StorageService.clearAuthUser();
    setUser(null);
    setIsAuthenticated(false);
  };
  return /*#__PURE__*/React.createElement(AuthContext.Provider, {
    value: {
      user,
      isAuthenticated,
      login,
      logout
    }
  }, children);
}
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}