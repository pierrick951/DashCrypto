import { UserCredential } from "firebase/auth";
import { auth } from "../firebase.config";
import { createContext, useState, useContext, ReactNode } from "react";
import { signInWithGoogle } from "../auth/authWithGoogle";
import { signOut as firebaseSignOut } from "firebase/auth";

import { toast } from "sonner";

type AuthContextType = {
  user: UserCredential | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: async () => {},
  logout: async () => {},
});

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserCredential | null>(null);

  const login = async () => {
    try {
      const result = await signInWithGoogle();
      setUser(result);
      toast.success("Login successful");
    } catch (error) {
      toast.error('Login failed')
    }
   
  };

  const logout = async () => {
    await firebaseSignOut(auth);
    setUser(null);
    toast.info("Logout successful");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
