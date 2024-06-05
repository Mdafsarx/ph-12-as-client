import { GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./Firebase/firebase.config";

export const AuthContext = createContext(null)

const Auth = ({ children }) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)


    const GoogleProvider = new GoogleAuthProvider();
    const Google = () => {
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }

    const TwitterProvider = new TwitterAuthProvider();
    const Twitter = () => {
        setLoading(true)
        return signInWithPopup(auth, TwitterProvider)
    }

    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    } 

    const updateUser=function(name,url){
        setLoading(true)
      return  updateProfile(auth.currentUser, {
            displayName: name, photoURL: url
          })
    }

    const logout=()=>{
        setLoading(true)
      return signOut(auth)
    }






    useEffect(()=>{
        onAuthStateChanged(auth,(User)=>{
          setUser(User)
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