import { googleSignIn, logIn, logOut, signUp } from "@/services/firebase/auth";
import { auth } from "@/services/firebase/firebaseConfig";
import { IAuthContext } from "@/types";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { UserAuthContext } from "./UserAuthContext";

interface IAuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: IAuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  const value: IAuthContext = {
    user,
    loading,
    logIn,
    signUp,
    logOut,
    googleSignIn,
  };

  return (
    <UserAuthContext.Provider value={value}>
      {children}
    </UserAuthContext.Provider>
  );
};
