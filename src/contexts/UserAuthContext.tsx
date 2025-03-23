import { googleSignIn, logIn, logOut, signUp } from "@/services/firebase/auth";
import { IAuthContext } from "@/types";
import { createContext } from "react";

export const UserAuthContext = createContext<IAuthContext>({
  user: null,
  loading: true,
  logIn,
  signUp,
  logOut,
  googleSignIn,
});
