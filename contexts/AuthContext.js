import { createContext, useContext, useEffect, useState } from "react";
import {
  useAuthState,
  useSendSignInLinkToEmail,
} from "react-firebase-hooks/auth";

import { auth, db } from "@lib/firebase";
import { isSignInWithEmailLink, signInWithEmailLink } from "firebase/auth";
import { ReactNode } from "react";
import toast from "react-hot-toast";



const AuthContext = createContext({});
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sendSignInLinkToEmail, sending, error] = useSendSignInLinkToEmail(auth);
  let locationHref = "";
  const actionCodeSettings = {
    url: "http://localhost:3000/onboarding",
    handleCodeInApp: true,
  };
  if (error) {
    toast.error(error.message);
  }
  if (typeof window !== "undefined") {
    locationHref = window.location.href
  }


  if (isSignInWithEmailLink(auth, locationHref)) {
    let email = window.localStorage.getItem("emailForSignIn");
    if (!email) {
      if (typeof window !== "undefined") {
      email = window.prompt("Please provide your email for confirmation");
      }
    }
    // The client SDK will parse the code from the link for you.
    signInWithEmailLink(auth, email, window.location.href)
      .then((result) => {
        result.user;
        // Clear email from storage.
        if (typeof window !== "undefined") {
          window.localStorage.removeItem("emailForSignIn");
          // browser code
        }
      })
      .catch((error) => {
        toast.error(error.code)
      });
  }

  async function signIn(email) {
     toast.promise(
       sendSignInLinkToEmail(email, actionCodeSettings).then(() => {
         window.localStorage.setItem("emailForSignIn", email);
       }),
       {
         loading: "Sending magic link",
         success: <b>Check your mail!</b>,
         error: <b>Your request cannot be processed at this time.</b>,
       }
     );
  }
 

  return (
    <AuthContext.Provider value={{ user, loading, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
