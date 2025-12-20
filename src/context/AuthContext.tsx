import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface AuthContextType {
  user: User | null;
  login: (userData: User) => void;
  loginWithCredentials: (email: string, password: string) => Promise<boolean>;
  register: (userData: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [registeredUsers, setRegisteredUsers] = useState<User[]>([]);

  useEffect(() => {
    // Check for stored user data on app load
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    
    // Load registered users from localStorage
    const storedRegisteredUsers = localStorage.getItem('registeredUsers');
    if (storedRegisteredUsers) {
      setRegisteredUsers(JSON.parse(storedRegisteredUsers));
    }
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const loginWithCredentials = async (email: string, password: string): Promise<boolean> => {
    // Check if user exists in registered users
    const existingUser = registeredUsers.find(user => user.email.toLowerCase() === email.toLowerCase());
    
    if (existingUser) {
      // User exists, allow login
      login(existingUser);
      return true;
    } else {
      // User doesn't exist
      return false;
    }
  };

  const register = (userData: User) => {
    // Add user to registered users list
    const updatedUsers = [...registeredUsers, userData];
    setRegisteredUsers(updatedUsers);
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
    
    // Automatically log in the user after registration
    login(userData);
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    login,
    loginWithCredentials,
    register,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};