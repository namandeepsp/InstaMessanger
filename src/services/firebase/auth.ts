import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
import { auth } from "./firebaseConfig";

/* Login function */
export const logIn = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

/* signup function */
export const signUp = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

/* Logout function */
export const logOut = async () => {
  return signOut(auth);
};

/* Google signin */
export const googleSignIn = () => {
  const googleAuthProvider = new GoogleAuthProvider();
  return signInWithRedirect(auth, googleAuthProvider);
};
