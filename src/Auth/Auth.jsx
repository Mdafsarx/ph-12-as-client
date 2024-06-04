import { GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./Firebase/firebase.config";

export const AuthContext = createContext(null)

const Auth = ({ children }) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)


    const GoogleProvider = new GoogleAuthProvider();
    const Google = () => {
        return signInWithPopup(auth, GoogleProvider)
    }

    const TwitterProvider = new TwitterAuthProvider();
    const Twitter = () => {
        return signInWithPopup(auth, TwitterProvider)
    }

    const registerUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    } 

    const updateUser=function(name,url){
      return  updateProfile(auth.currentUser, {
            displayName: name, photoURL: url
          })
    }

    const logout=()=>{
      return signOut(auth)
    }






    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
          setUser(user)
          setLoading(false)
        })
    },[])

  





    return (
        <AuthContext.Provider value={{ Google, Twitter, registerUser, loginUser , updateUser , user , logout , loading}}>
            {children}
        </AuthContext.Provider>
    );
};

export default Auth;