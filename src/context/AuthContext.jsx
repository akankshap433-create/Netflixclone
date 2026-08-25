import React, { createContext, useContext, useState, useEffect } from "react";
import { StorageService } from "../services/storageService.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => StorageService.getAuthUser());
  const [isAuthenticated, setIsAuthenticated] = useState(() => Boolean(StorageService.getAuthUser()));
  const [selectedPlan, setSelectedPlanState] = useState(() => StorageService.getSelectedPlan());

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

  const selectPlan = (planId) => {
    StorageService.setSelectedPlan(planId);
    setSelectedPlanState(planId);
  };

  const logout = () => {
    StorageService.clearAuthUser();
    StorageService.clearSelectedPlan();
    setUser(null);
    setIsAuthenticated(false);
    setSelectedPlanState(null);
  };

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        isAuthenticated, 
        selectedPlan, 
        selectPlan, 
        login, 
        logout 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
