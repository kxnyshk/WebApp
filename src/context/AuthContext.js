import { auth } from '../firebase.js';
import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();
export const AuthContextProvider = ({children}) => {
    const [currUser, setCurrUser] = useState({});
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrUser(user);
            console.log(user);
        });

        return () => {
            unsub();
        };
    }, []);

    return (
        <AuthContext.Provider value={{currUser}}>
            {children}
        </AuthContext.Provider>
    );
}