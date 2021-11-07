import {  getAuth, GoogleAuthProvider, signInWithPopup,createUserWithEmailAndPassword ,signInWithEmailAndPassword,onAuthStateChanged,signOut } from 'firebase/auth';
import {  useEffect, useState } from "react";
import initializeAuthentication from '../Firebase/Firebaseinit';

initializeAuthentication();

const Usefirebse = () => {
    const [user , setUser] = useState({});
    const [isLoading , setIsLoading] =useState(true)
    const auth = getAuth();

    const googleProvider= new GoogleAuthProvider();

    //sign in method
    const signInWithGoogle = () => {
        return signInWithPopup( auth, googleProvider )
       }

    //create emial and password with passwordauthentication
    const createAccountWithGoogle=(email,password)=> {
       return createUserWithEmailAndPassword(auth, email, password)
    }

    //log in with macthed passwerd and email
    const logInWithEmailPassword = (email,password) => {
      return  signInWithEmailAndPassword(auth, email, password)
           
  }

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth , (user)=> {
       console.log(user);
         if(user){
             setUser(user)
         } else{
             setUser({})
         }
         setIsLoading(false)
    })
     return ()=> unsubscribe()
},[])
    
const logOut=()=> {
   signOut(auth).then(() => {
       setUser({})
     }).catch((error) => {
      
     });
}

    return {
        user,
        setUser,
        signInWithGoogle,
        createAccountWithGoogle,
        logInWithEmailPassword,
        isLoading,
        setIsLoading,
        logOut
    }

};

export default Usefirebse;