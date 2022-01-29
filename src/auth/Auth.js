import React, { useState, useEffect, useContext } from "react";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";
export const AuthContext = React.createContext();
export function useAuth(){
  return useContext(AuthContext);
}
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);


  function signup(email, pwd){
    return createUserWithEmailAndPassword(auth, email, pwd);
  }
  function login(email, pwd){
    return signInWithEmailAndPassword(auth, email, pwd).catch(err => {
      console.error(err.code)
      if(err.code === "auth/user-not-found"){
        alert("Uživatel nebo heslo se neshoduje");
      }
    })
  }

  useEffect(() => {
    const unsub = auth.onAuthStateChanged(user => {
      console.log(user);
      setCurrentUser(user);
    })

    return unsub;
  }, []);

  console.log(currentUser);

  return (
    <AuthContext.Provider value={{ currentUser, loading, signup, login }}>
      {children}
    </AuthContext.Provider>
  );
};
