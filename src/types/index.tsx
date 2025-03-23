import { googleSignIn, logIn, logOut, signUp } from "@/services/firebase/auth";
import { User } from "firebase/auth";

export interface IAuthContext {
  user: User | null;
  loading: boolean;
  logIn: typeof logIn;
  signUp: typeof signUp;
  logOut: typeof logOut;
  googleSignIn: typeof googleSignIn;
}
