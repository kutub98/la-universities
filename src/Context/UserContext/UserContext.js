import React, { Children, useEffect, useState } from 'react';
import { createContext } from 'react';
import  { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut }  from 'firebase/auth'
import app from '../../FireBase/FireBase.init';


export const AuthContext = createContext();
const auth = getAuth(app)


const UserContext = ({children}) => {
    const [user, setUser] = useState()
    // console.log(user)
    // login with GoogleProvider ==================
    const googleProvider = new GoogleAuthProvider()
    const signWithGoogle = ()=>{
       return signInWithPopup(auth, googleProvider)
    }

    // login with github ==========================
    const gitHubProvider = new GithubAuthProvider()
    const signWithGitHub = ()=>{
        return signInWithPopup (auth, gitHubProvider)
    }

    // Creating new user functions================
    const HandlingCreatingNewUser = (email, password) =>{
        console.log(email, password)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //login with email and password===============
    const login =(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    // set on state changes user=======================

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{

            // setUser(currentUser)
            // if(user?.emailVerified){
            //     setUser(currentUser)
            // }
         
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    // remove user function====================

    const removeUser = ()=>{
        return signOut(auth)
    }

    const authInfo = {
        user , 
        removeUser,
        HandlingCreatingNewUser,
        signWithGoogle,
        signWithGitHub,
        login}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;