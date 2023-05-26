import React, { useContext, useState, useEffect } from 'react'
import {auth} from '../firebase'
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
// import { Form } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';


const AuthContext = React.createContext()
// const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext);
}

export  function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    // const history = useNavigate()

    function signup(email, password) {

        return (createUserWithEmailAndPassword(auth, email, password)
                    
        )
    }

    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    // function logout(){
    //     return (signOut(auth).then(() => {
    //             history.push('/login')
    //       }).catch((error) => {
    //             console.error(error + "Failed to log out")
    //       }));
    // }

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
        signup,
        login,
        // logout
    }

  return (
    
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
}
