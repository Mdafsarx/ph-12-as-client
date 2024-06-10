import { GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./Firebase/firebase.config";
import CommonUrl from "../Hooks/CommonUrl";

export const AuthContext = createContext(null)

const Auth = ({ children }) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const axiosUrl=CommonUrl()


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
        const unSubscribe=onAuthStateChanged(auth,(User)=>{
          setUser(User)
          setLoading(false)
          if(User){
            axiosUrl.post('/jwt',{email:User?.email})
            .then(res=>{
              if(res.data.token){
                console.log(res.data.token)
                  localStorage.setItem('token',res.data.token);
              }
            })
          }
          else{
              localStorage.removeItem('token')
          }
        })
        return ()=>{
            unSubscribe()
        }
    },[])

  





    return (
        <AuthContext.Provider value={{ Google, Twitter, registerUser, loginUser , updateUser , user , logout , loading}}>
            {children}
        </AuthContext.Provider>
    );
};

export default Auth;