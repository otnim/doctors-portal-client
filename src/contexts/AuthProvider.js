import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';  
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        
            setLoading(false);
        })
        return () => unsubscribe();
    }, [])

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const googleSignup = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password); 
    }

    //logOut function 'Navbar.js' theke call kora hoyeche
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUser = (userInfo) => {
        return updateProfile(user, userInfo);
    }

    const authInfo = {
        createUser,
        googleSignup,
        loginUser,
        logOut,
        updateUser,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}> 
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;