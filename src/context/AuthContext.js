import React, { useContext, useState, useEffect } from 'react'
import {auth} from '../firebase'
import { onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth';


const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext);
}

export  function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup(email, password) {

        return createUserWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user)=>{

        if(user){
            
            setCurrentUser(user)
            setLoading(false)
        } else{
            setCurrentUser(undefined)
        }
           
        })

        return unsubscribe;
    }, [])
    

    const value ={
        currentUser,
        signup
    }

  return (
    
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
