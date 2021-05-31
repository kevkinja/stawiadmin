import React, {useContext, useState, useEffect} from 'react';
// import auth from '@react-native-firebase/auth';
// import {GoogleSignin} from '@react-native-community/google-signin';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(false);
    useEffect(() => {
        // const subscriber = auth().onAuthStateChanged(setCurrentUser);
        const subscriber = true;
        return subscriber;
    }, []);



    return <AuthContext.Provider value={{currentUser, setCurrentUser}}>{children}</AuthContext.Provider>
}


